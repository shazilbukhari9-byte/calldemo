import { Helmet } from 'react-helmet-async'

const SITE_URL = 'https://callmama-design.vercel.app'
const SITE_NAME = 'CallMama'
const DEFAULT_OG = '/assets/callmama-logo.webp'

export default function Seo({
  title,
  description,
  path = '/',
  image = DEFAULT_OG,
  keywords,
  schema,
  noIndex = false,
  ogType = 'website',
  publishedTime,
  modifiedTime,
}) {
  const url = `${SITE_URL}${path}`
  const fullImage = image.startsWith('http') ? image : `${SITE_URL}${image}`
  const ldJson = schema ? (Array.isArray(schema) ? schema : [schema]) : []

  return (
    <Helmet prioritizeSeoTags>
      <title>{title}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      <link rel="canonical" href={url} />
      <meta name="robots" content={noIndex ? 'noindex,nofollow' : 'index,follow,max-image-preview:large'} />

      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={fullImage} />
      <meta property="og:image:alt" content={title} />
      <meta property="og:site_name" content={SITE_NAME} />
      {ogType === 'article' && publishedTime && (
        <meta property="article:published_time" content={publishedTime} />
      )}
      {ogType === 'article' && modifiedTime && (
        <meta property="article:modified_time" content={modifiedTime} />
      )}

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={fullImage} />

      {ldJson.map((s, i) => (
        <script key={i} type="application/ld+json">
          {JSON.stringify(s)}
        </script>
      ))}
    </Helmet>
  )
}

export const orgSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'CallMama',
  url: SITE_URL,
  logo: `${SITE_URL}/assets/callmama-logo.webp`,
  sameAs: [
    'https://in.pinterest.com/callmama_/',
    'https://www.youtube.com/@CallmamaApp',
    'https://www.linkedin.com/company/callmama/',
    'https://x.com/callmama_info',
    'https://www.facebook.com/callmama1',
    'https://instagram.com/callmama_',
  ],
}

export function faqSchema(faqs) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  }
}

export function breadcrumbSchema(items) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((it, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: it.name,
      item: it.item || `${SITE_URL}${it.path || ''}`,
    })),
  }
}

export const mobileAppSchema = {
  '@context': 'https://schema.org',
  '@type': 'MobileApplication',
  name: 'CallMama',
  operatingSystem: 'iOS, Android, Web',
  applicationCategory: 'CommunicationApplication',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.5',
    ratingCount: '2100000',
  },
  downloadUrl: [
    'https://apps.apple.com/us/app/callmama-numbers-calls-sms/id6752691983',
    'https://play.google.com/store/apps/details?id=com.callmama',
  ],
}

export function softwareSchema({ name, description, category = 'Communication' }) {
  return {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name,
    description,
    applicationCategory: category,
    operatingSystem: 'iOS, Android, Web',
    offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
  }
}

export function howToSchema({ name, description, steps }) {
  return {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name,
    description,
    step: steps.map((s, i) => ({
      '@type': 'HowToStep',
      position: i + 1,
      name: s.name,
      text: s.text,
    })),
  }
}
