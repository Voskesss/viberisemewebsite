import { useState } from 'react';
import { useTranslation } from 'react-i18next';

const Newsletter = () => {
  const { t } = useTranslation();
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Hier komt de logica voor het versturen van de e-mail
    console.log('Email submitted:', email);
    setEmail('');
  };

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-xl mx-auto text-center">
          <h2 className="text-2xl font-bold mb-2">{t('newsletter.title')}</h2>
          <p className="mb-6">{t('newsletter.subtitle')}</p>
          <form onSubmit={handleSubmit} className="flex flex-col md:flex-row gap-4 justify-center">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder={t('newsletter.placeholder')}
              className="px-4 py-2 rounded border"
              required
            />
            <button
              type="submit"
              className="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600"
            >
              {t('newsletter.button')}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
