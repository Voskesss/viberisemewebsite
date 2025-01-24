import { useTranslation } from 'react-i18next';
import { Helmet } from 'react-helmet-async';

const SEO = () => {
  const { t, i18n } = useTranslation();
  const currentLanguage = i18n.language;

  // Alle ondersteunde talen
  const languages = ['nl', 'en', 'de', 'fr', 'es', 'it', 'pl', 'pt', 'sv', 'da'];

  return (
    <Helmet>
      {/* Basis meta tags */}
      <html lang={currentLanguage} />
      <title>{t('meta.title')}</title>
      <meta name="description" content={t('meta.description')} />

      {/* Open Graph tags */}
      <meta property="og:title" content={t('meta.title')} />
      <meta property="og:description" content={t('meta.description')} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={window.location.href} />
      <meta property="og:image" content="/images/og-image.png" />
      <meta property="og:locale" content={currentLanguage} />

      {/* Alternate language versions */}
      {languages.map(lang => (
        <link
          key={lang}
          rel="alternate"
          hrefLang={lang}
          href={`${window.location.origin}/${lang === 'en' ? '' : lang}`}
        />
      ))}

      {/* Schema.org markup */}
      <script type="application/ld+json">
        {JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'Organization',
          'name': 'SkillVal',
          'url': window.location.origin,
          'logo': `${window.location.origin}/images/logo-dark.png`,
          'description': t('meta.description'),
          'sameAs': [
            'https://www.linkedin.com/company/skillval',
            'https://twitter.com/skillval_eu'
          ]
        })}
      </script>
    </Helmet>
  );
};

export default SEO;
