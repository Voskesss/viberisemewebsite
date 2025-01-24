import { useTranslation } from 'react-i18next';

const Validation = () => {
  const { t } = useTranslation();

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="md:w-1/2">
            {/* Placeholder voor de screenshot */}
            <div className="bg-white rounded-lg shadow-lg p-4">
              <img src="/validation-preview.png" alt="Skill Validation Process" className="w-full" />
            </div>
          </div>
          <div className="md:w-1/2">
            <h2 className="text-3xl font-bold mb-4">{t('validation.title')}</h2>
            <p className="text-lg">{t('validation.description')}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Validation;
