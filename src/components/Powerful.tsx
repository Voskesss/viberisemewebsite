import { useTranslation } from 'react-i18next';

const Powerful = () => {
  const { t } = useTranslation();

  return (
    <section className="bg-navy-900 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">{t('powerful.title')}</h2>
          <p className="text-lg">{t('powerful.description')}</p>
        </div>
        <div className="mt-8">
          {/* Placeholder voor de screenshot */}
          <div className="bg-white rounded-lg shadow-lg p-4 max-w-2xl mx-auto">
            <img src="/powerful-preview.png" alt="SkillVal Interface" className="w-full" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Powerful;
