import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import emailjs from '@emailjs/browser';

const NewsletterSection = () => {
  const { t } = useTranslation();
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        { email },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );
      
      setIsSubmitted(true);
      setEmail('');
    } catch (err) {
      setError(t('newsletter.error'));
      console.error('EmailJS error:', err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="container mx-auto px-4 my-24">
      <section className="bg-gradient-to-br from-[#0A192F] via-[#172A46] to-[#1F3A60] py-16 rounded-[48px] relative overflow-hidden">
        {/* Decoratieve cirkels */}
        <div className="absolute top-0 left-0 w-64 h-64 bg-blue-400/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
        
        <div className="relative">
          <div className="max-w-2xl mx-auto text-center px-4">
            <h2 className="text-4xl font-bold text-white mb-4">
              {t('newsletter.title')}
            </h2>
            <p className="text-xl text-white/80 mb-8">
              {t('newsletter.subtitle')}
            </p>

            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder={t('newsletter.placeholder')}
                required
                className="flex-1 px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder:text-white/60 focus:outline-none focus:border-blue-400"
              />
              <button
                type="submit"
                disabled={isLoading || isSubmitted}
                className={`px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors ${
                  isSubmitted
                    ? 'bg-green-500'
                    : isLoading
                    ? 'bg-gray-400'
                    : ''
                }`}
              >
                {isSubmitted
                  ? t('newsletter.success')
                  : isLoading
                  ? t('newsletter.sending')
                  : t('newsletter.button')}
              </button>
            </form>
            
            {error && (
              <p className="mt-4 text-red-500">{error}</p>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default NewsletterSection;
