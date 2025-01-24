import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useGoogleReCaptcha } from 'react-google-recaptcha-v3';
import emailjs from '@emailjs/browser';

const ContactForm = () => {
  const { t } = useTranslation();
  const { executeRecaptcha } = useGoogleReCaptcha();
  const [formData, setFormData] = useState({
    from_name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!executeRecaptcha) {
      setError(t('contact.error'));
      console.error('Execute recaptcha not yet available');
      return;
    }

    setIsLoading(true);
    setError('');

    try {
      // Get reCAPTCHA token
      const token = await executeRecaptcha('contact_form');
      
      if (!token) {
        throw new Error('Failed to get reCAPTCHA token');
      }

      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_CONTACT_TEMPLATE_ID,
        {
          ...formData,
          to_name: 'SkillVal Team',
          'g-recaptcha-response': token
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );
      
      setIsSubmitted(true);
      setFormData({ from_name: '', email: '', subject: '', message: '' });
    } catch (err) {
      setError(t('contact.error'));
      console.error('EmailJS error:', err);
    } finally {
      setIsLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <input
        type="text"
        name="from_name"
        value={formData.from_name}
        onChange={handleChange}
        placeholder={t('contact.name')}
        required
        className="px-4 py-3 rounded-lg bg-white border border-gray-200 text-gray-900 placeholder:text-gray-500 focus:outline-none focus:border-blue-400"
      />
      <input
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        placeholder={t('contact.email')}
        required
        className="px-4 py-3 rounded-lg bg-white border border-gray-200 text-gray-900 placeholder:text-gray-500 focus:outline-none focus:border-blue-400"
      />
      <input
        type="text"
        name="subject"
        value={formData.subject}
        onChange={handleChange}
        placeholder={t('contact.subject')}
        required
        className="px-4 py-3 rounded-lg bg-white border border-gray-200 text-gray-900 placeholder:text-gray-500 focus:outline-none focus:border-blue-400"
      />
      <textarea
        name="message"
        value={formData.message}
        onChange={handleChange}
        placeholder={t('contact.message')}
        required
        rows={4}
        className="px-4 py-3 rounded-lg bg-white border border-gray-200 text-gray-900 placeholder:text-gray-500 focus:outline-none focus:border-blue-400 resize-none"
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
          ? t('contact.success')
          : isLoading
          ? t('contact.sending')
          : t('contact.button')}
      </button>
      
      {error && (
        <p className="mt-2 text-red-500">{error}</p>
      )}
    </form>
  );
};

export default ContactForm;
