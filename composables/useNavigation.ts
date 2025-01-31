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
        { name: 'nav.home', to: localePath('/'), icon: 'material-symbols-light:family-home' },
        { name: 'nav.about', to: localePath('/about'), icon: 'material-symbols-light:person' },
        { name: 'nav.skills', to: localePath('/skills'), icon: 'material-symbols-light:book-2' },
        { name: 'nav.projects', to: localePath('/projects'), icon: 'material-symbols-light:folder' },
        { name: 'nav.contact', to: localePath('/contact'), icon: 'material-symbols-light:mail' }
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