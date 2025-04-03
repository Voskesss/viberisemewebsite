import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';

const SEO = () => {
  const { t } = useTranslation();

  return (
    <Helmet>
      <title>{t('metadata.title')}</title>
      <meta name="description" content={t('metadata.description')} />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://coliblanco.ai/" />
      <meta property="og:title" content={t('metadata.title')} />
      <meta property="og:description" content={t('metadata.description')} />
      
      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content="https://coliblanco.ai/" />
      <meta property="twitter:title" content={t('metadata.title')} />
      <meta property="twitter:description" content={t('metadata.description')} />
    </Helmet>
  );
};

export default SEO;
