import { useTranslation } from 'react-i18next';

const Features = () => {
  const { t } = useTranslation();

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Hoofdtekst */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            {t('hero.title')}
          </h2>
          <p className="text-lg text-gray-600">
            {t('hero.subtitle')}. {t('hero.description')}
          </p>
        </div>

        {/* Feature cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div className="bg-blue-50 rounded-lg p-8">
            <div className="w-12 h-12 bg-blue-100 rounded-lg mb-6 flex items-center justify-center">
              <svg className="w-6 h-6 text-blue-600" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              {t('features.workflow.title')}
            </h3>
            <p className="text-gray-600">
              {t('features.workflow.description')}
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-green-50 rounded-lg p-8">
            <div className="w-12 h-12 bg-green-100 rounded-lg mb-6 flex items-center justify-center">
              <svg className="w-6 h-6 text-green-600" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              {t('features.collaboration.title')}
            </h3>
            <p className="text-gray-600">
              {t('features.collaboration.description')}
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-red-50 rounded-lg p-8">
            <div className="w-12 h-12 bg-red-100 rounded-lg mb-6 flex items-center justify-center">
              <svg className="w-6 h-6 text-red-600" viewBox="0 0 24 24" fill="currentColor">
                <path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              {t('features.security.title')}
            </h3>
            <p className="text-gray-600">
              {t('features.security.description')}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
