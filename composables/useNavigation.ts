import { useI18n } from 'vue-i18n'
import { useLocalePath } from '#imports'

export interface NavLink {
    name: string
    to: string
    icon: string
}

export const useNavigation = () => {
    const { t } = useI18n()
    const localePath = useLocalePath()

    const navLinks = computed((): NavLink[] => [
        { name: 'nav.home', to: localePath('/'), icon: 'mdi:home' },
        { name: 'nav.about', to: localePath('/about'), icon: 'mdi:person' },
        { name: 'nav.skills', to: localePath('/skills'), icon: 'mdi:book-education' },
        { name: 'nav.projects', to: localePath('/projects'), icon: 'mdi:folder' },
        { name: 'nav.contact', to: localePath('/contact'), icon: 'mdi:mail' }
    ])

    // Helper function to get a specific link by name
    const getLink = (name: string) => {
        return navLinks.value.find(link => link.name === name)
    }

    return {
        navLinks,
        getLink
    }
} 