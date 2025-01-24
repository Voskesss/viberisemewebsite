import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { joinWaitlist } from '../services/waitlist';

export type UserGroup = 'consumer' | 'company' | 'influencer' | 'investor' | 'developer';

interface WaitlistModalProps {
  isOpen: boolean;
  onClose: () => void;
  userGroup: UserGroup;
}

const WaitlistModal = ({ isOpen, onClose, userGroup: initialUserGroup }: WaitlistModalProps) => {
  const { t } = useTranslation();
  const [selectedGroup, setSelectedGroup] = useState<UserGroup>(initialUserGroup);
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);
  const [position, setPosition] = useState<number | null>(null);
  const [referralLink, setReferralLink] = useState<string | null>(null);

  if (!isOpen) return null;

  const userGroups: { value: UserGroup; label: string }[] = [
    { value: 'consumer', label: t('customer.badge') },
    { value: 'company', label: t('company.badge') },
    { value: 'influencer', label: t('influencer.badge') },
    { value: 'investor', label: t('investor.badge') },
    { value: 'developer', label: t('developer.badge') }
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const result = await joinWaitlist(email, selectedGroup);
      
      if (result.success) {
        setSuccess(true);
        setPosition(result.position || null);
        setReferralLink(result.referralLink || null);
      } else {
        setError(result.error || 'Er is iets misgegaan');
      }
    } catch (err) {
      setError('Er is iets misgegaan bij het aanmelden');
    } finally {
      setLoading(false);
    }
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 overflow-y-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/50 backdrop-blur-sm"
        />

        <div className="flex min-h-full items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="relative w-full max-w-lg overflow-hidden rounded-2xl bg-[#0A192F] p-6 shadow-xl"
          >
            <button
              onClick={onClose}
              className="absolute right-4 top-4 text-gray-400 hover:text-white"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            <div className="text-center">
              {success ? (
                <div className="space-y-4">
                  <div className="mx-auto w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center">
                    <svg className="w-8 h-8 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-white">
                    {t('waitlist.success.title')}
                  </h3>
                  {position && (
                    <p className="text-gray-400">
                      {t('waitlist.success.position', { position })}
                    </p>
                  )}
                  {referralLink && (
                    <div className="mt-4">
                      <p className="text-gray-400 mb-2">
                        {t('waitlist.success.referral')}
                      </p>
                      <input
                        type="text"
                        readOnly
                        value={referralLink}
                        className="w-full px-4 py-2 bg-white/10 rounded-lg text-white text-sm"
                        onClick={(e) => (e.target as HTMLInputElement).select()}
                      />
                    </div>
                  )}
                  <button
                    onClick={onClose}
                    className="mt-4 w-full px-6 py-3 text-white font-medium bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg"
                  >
                    {t('waitlist.success.close')}
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <h3 className="text-2xl font-bold text-white mb-2">
                    {t('waitlist.title')}
                  </h3>
                  <p className="text-gray-400 mb-6">
                    {t(`waitlist.description.${selectedGroup}`)}
                  </p>

                  <div className="relative">
                    <select
                      value={selectedGroup}
                      onChange={(e) => setSelectedGroup(e.target.value as UserGroup)}
                      className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white appearance-none focus:outline-none focus:ring-2 focus:ring-purple-500"
                    >
                      {userGroups.map(group => (
                        <option key={group.value} value={group.value} className="bg-[#0A192F] text-white">
                          {group.label}
                        </option>
                      ))}
                    </select>
                    <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                      <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </div>

                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder={t('waitlist.emailPlaceholder')}
                    required
                    className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
                  />

                  {error && (
                    <p className="text-red-500 text-sm">{error}</p>
                  )}

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full px-6 py-3 text-white font-medium bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg hover:from-purple-700 hover:to-blue-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-[#0A192F] disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {loading ? t('waitlist.loading') : t('waitlist.submit')}
                  </button>

                  <p className="mt-4 text-sm text-gray-400">
                    {t('waitlist.privacy')}
                  </p>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </AnimatePresence>
  );
};

export default WaitlistModal;
