import { useHead, useI18n } from '#imports'
import { computed } from 'vue'

interface SeoMetaData {
    title: string
    description: string
    path: string
    image?: string
}

export function useSeo({ title, description, path, image = '/img/og-image.jpg' }: SeoMetaData) {
    const { t, locale } = useI18n()
    const baseUrl = 'https://www.chad.lu'

    // Create reactive metadata
    const meta = {
        title: computed(() => t(title)),
        description: computed(() => t(description)),
        ogTitle: computed(() => t(title)),
        ogDescription: computed(() => t(description)),
        ogImage: `${baseUrl}${image}`,
        ogUrl: `${baseUrl}${path}`,
        twitterTitle: computed(() => t(title)),
        twitterDescription: computed(() => t(description)),
        twitterImage: `${baseUrl}${image}`
    }

    // Use useHead with both client and server modes
    useHead({
        title: meta.title,
        htmlAttrs: {
            lang: computed(() => locale.value)
        },
        meta: [
            {
                name: 'description',
                content: meta.description,
            },
            // Open Graph / Facebook
            { property: 'og:type', content: 'website' },
            {
                property: 'og:title',
                content: meta.ogTitle,
            },
            {
                property: 'og:description',
                content: meta.ogDescription,
            },
            { property: 'og:image', content: meta.ogImage },
            { property: 'og:url', content: meta.ogUrl },

            // Twitter
            { name: 'twitter:card', content: 'summary_large_image' },
            {
                name: 'twitter:title',
                content: meta.twitterTitle,
            },
            {
                name: 'twitter:description',
                content: meta.twitterDescription,
            },
            { name: 'twitter:image', content: meta.twitterImage }
        ],
        link: [
            {
                rel: 'canonical',
                href: meta.ogUrl
            }
        ]
    })
} 