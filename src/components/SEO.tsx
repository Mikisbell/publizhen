import { Helmet } from 'react-helmet-async';

interface SEOProps {
    title: string;
    description: string;
    keywords?: string;
    image?: string;
    url?: string;
}

const SEO = ({ title, description, keywords, image, url }: SEOProps) => {
    const siteUrl = 'https://publizhen.com'; // TODO: Update with actual domain when live
    const defaultImage = '/images/hero-printer.webp';

    const finalUrl = url ? `${siteUrl}${url}` : siteUrl;
    const finalImage = image ? `${siteUrl}${image}` : `${siteUrl}${defaultImage}`;

    return (
        <Helmet>
            {/* Standard Metadata */}
            <title>{`${title} | Publizhen - Publicidad Industrial & Branding`}</title>
            <meta name="description" content={description} />
            {keywords && <meta name="keywords" content={keywords} />}
            <link rel="canonical" href={finalUrl} />

            {/* Open Graph / Facebook */}
            <meta property="og:type" content="website" />
            <meta property="og:url" content={finalUrl} />
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            <meta property="og:image" content={finalImage} />

            {/* Twitter */}
            <meta property="twitter:card" content="summary_large_image" />
            <meta property="twitter:url" content={finalUrl} />
            <meta property="twitter:title" content={title} />
            <meta property="twitter:description" content={description} />
            <meta property="twitter:image" content={finalImage} />

            {/* Structured Data (Organization) */}
            <script type="application/ld+json">
                {JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "Organization",
                    "name": "Publizhen",
                    "url": siteUrl,
                    "logo": `${siteUrl}/images/logo.png`,
                    "contactPoint": {
                        "@type": "ContactPoint",
                        "telephone": "+51 976 277 993",
                        "contactType": "sales",
                        "areaServed": "PE",
                        "availableLanguage": "Spanish"
                    },
                    "sameAs": [
                        "https://www.facebook.com/publizhen",
                        "https://www.instagram.com/publizhen"
                    ]
                })}
            </script>
        </Helmet>
    );
};

export default SEO;
