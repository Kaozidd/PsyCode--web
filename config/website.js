const tailwind = require('../tailwind')

module.exports = {
  pathPrefix: '/', // Prefix for all links. If you deploy your site to example.com/portfolio your pathPrefix should be "/portfolio"

  siteTitle: 'PsyCode - Los desarrolladores conscientes', // Navigation and Site Title
  siteTitleAlt: 'PsyCode', // Alternative Site title for SEO
  siteTitleShort: 'PsyCode', // short_name for manifest
  siteHeadline: 'Solucionadores de problemas', // Headline for schema.org JSONLD
  siteUrl: 'http://psycode-surge.sh', // Domain of your site. No trailing slash!
  siteLanguage: 'es', // Language Tag on <html> element
  siteLogo: '/icon.png', // Used for SEO and manifest
  siteDescription: 'Página de una vista colorida y con efecto parallax',
  author: 'PsyCode', // Author for schema.org JSONLD

  // siteFBAppID: '123456789', // Facebook App ID - Optional
  userTwitter: '@kaozidd', // Twitter Username
  ogSiteName: 'PsyCode', // Facebook Site Name
  ogLanguage: 'es_MX', // Facebook Language
  googleAnalyticsID: 'n/a',

  // Manifest and Progress color
  themeColor: tailwind.colors.orange,
  backgroundColor: tailwind.colors.blue,
}
