<script lang="ts" setup>
import { Icon } from '@iconify/vue';
import { useLocalePath } from '#imports'
import { useSeo } from '#imports'

const localePath = useLocalePath()

// SEO
useSeo({
    title: 'projects.portfolio.title',
    description: 'projects.portfolio.description',
    path: localePath('/projects/my-portfolio-website')
})

interface Project {
    id: number;
    title: string;
    description: string;
    image: string;
    tags: string[];
    link: string;
}

const features = [
    { id: 'frontendFramework', name: 'Frontend Framework', tech: 'Nuxt 3', icon: 'logos:nuxt-icon' },
    { id: 'styling', name: 'Styling', tech: 'Tailwind CSS', icon: 'logos:tailwindcss-icon' },
    { id: 'internationalization', name: 'Internationalization', tech: 'Nuxt i18n', icon: 'mdi:translate' },
    { id: 'uiComponents', name: 'UI Components', tech: 'Custom Components', icon: 'mdi:puzzle' },
    { id: 'developmentEnvironment', name: 'Development Environment', tech: 'VS Code + Cursor', icon: 'logos:visual-studio-code' },
    { id: 'typeSafety', name: 'Type Safety', tech: 'TypeScript', icon: 'logos:typescript-icon' },
    { id: 'emailIntegration', name: 'Email Integration', tech: 'Resend', icon: 'mdi:email' },
    { id: 'formValidation', name: 'Form Validation', tech: 'VeeValidate + Yup', icon: 'mdi:form-textbox' }
];

const keyFeatures = [
    'responsiveDesign',
    'darkMode',
    'multiLanguage',
    'modernUi',
    'typeSafe',
    'secureContact',
    'schemaValidation'
];

interface GitHubStats {
    totalCommits: number;
    lastCommitDate: string;
}

const { data: githubStats, error } = await useFetch<GitHubStats>('/api/github/portfolio-website', {
    server: true,
    watch: false,
    onResponseError: (error) => {
        console.error('Error fetching GitHub stats:', error)
        return null
    }
})
</script>

<template>
    <div class="h-full bg-gray-50 dark:bg-slate-900 overflow-y-auto">
        <div class="max-w-7xl mx-auto p-4">
            <!-- Back Button -->
            <NuxtLink :to="localePath('/projects')"
                class="mb-4 inline-flex items-center px-4 py-2 rounded-lg bg-white hover:bg-gray-100 dark:bg-slate-800 dark:hover:bg-slate-700 text-gray-700 dark:text-gray-200 border border-gray-200 dark:border-slate-700">
                <Icon icon="mdi:arrow-left" class="w-5 h-5 mr-2" />
                {{ $t('common.back') }}
            </NuxtLink>

            <!-- Header Card -->
            <div
                class="text-white bg-slate-800 rounded-xl shadow-sm border border-slate-700 mb-6 relative overflow-hidden">
                <div class="absolute inset-0">
                    <img src="/img/projects/project-1-cover.png" alt="Portfolio App Cover"
                        class="w-full h-full object-cover opacity-70 blur-[6px] bg-slate-900">
                </div>
                <div class="relative p-6 flex flex-col gap-5">
                    <div class="flex flex-col gap-7">

                        <div class="flex justify-between items-start flex-wrap gap-2">
                            <h2 class="text-3xl font-bold text-white">
                                {{ $t('projects.portfolio.title') }}
                            </h2>
                            <div class="flex gap-4">
                                <a href="https://github.com/FChad/portfolio-website" target="_blank" rel="noopener noreferrer"
                                    class="inline-flex items-center px-4 py-2 rounded-lg bg-gray-100 dark:bg-slate-700 text-gray-700 dark:text-gray-100 hover:bg-gray-300 dark:hover:bg-gray-600">
                                    <Icon icon="mdi:github" class="w-5 h-5 mr-2" />
                                    GitHub
                                </a>
                                <a href="https://www.chad.lu" target="_blank" rel="noopener noreferrer"
                                    class="inline-flex items-center px-4 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700">
                                    <Icon icon="mdi:open-in-new" class="w-5 h-5 mr-2" />
                                    Live Demo
                                </a>
                            </div>
                        </div>
                        <p>
                            {{ $t('projects.portfolio.description') }}
                        </p>
                    </div>
                    <!-- GitHub Stats -->
                    <div class="flex items-center justify-between gap-4 flex-wrap">
                        <div class="flex flex-wrap gap-2">
                            <span
                                v-for="tag in ['Nuxt3', 'TypeScript', 'Tailwind', 'i18n', 'VeeValidate', 'Resend', 'Iconify']"
                                :key="tag" class="px-4 py-1 border border-neutral-500 rounded-full text-sm">
                                {{ tag }}
                            </span>
                        </div>
                        <div class="flex gap-4 text-xs text-gray-200 dark:text-gray-300 flex-wrap">
                            <div v-if="error || !githubStats" class="flex items-center gap-2 text-yellow-400">
                                <Icon icon="mdi:alert" class="w-5 h-5" />
                                {{ $t('common.githubStatsUnavailable') }}
                            </div>
                            <template v-else>
                                <div class="flex items-center gap-2">
                                    <Icon icon="mdi:source-commit" class="w-5 h-5" />
                                    {{ githubStats?.totalCommits }} {{ $t('common.github.commits') }}
                                </div>
                                <div class="flex items-center gap-2">
                                    <Icon icon="mdi:clock-outline" class="w-5 h-5" />
                                    {{ $t('common.github.lastUpdated') }}: {{ githubStats?.lastCommitDate }}
                                </div>
                            </template>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Features Grid -->
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <div v-for="feature in features" :key="feature.name"
                    class="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-sm border border-gray-100 dark:border-slate-700">
                    <div class="flex items-center gap-3 mb-2">
                        <Icon :icon="feature.icon" class="w-6 h-6" />
                        <h3 class="text-lg font-semibold text-gray-900 dark:text-white">
                            {{ $t(`projects.portfolio.features.${feature.id}.name`) }}
                        </h3>
                    </div>
                    <div class="text-sm font-medium text-blue-600 dark:text-blue-400 mb-2">
                        {{ $t(`projects.portfolio.features.${feature.id}.tech`) }}
                    </div>
                    <p class="text-gray-600 dark:text-gray-300">
                        {{ $t(`projects.portfolio.features.${feature.id}.description`) }}
                    </p>
                </div>
            </div>

            <!-- Key Features Section -->
            <div
                class="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-sm border border-gray-100 dark:border-slate-700">
                <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                    {{ $t('projects.portfolio.features.keyFeatures.title') }}
                </h2>
                <ul class="space-y-3 text-gray-600 dark:text-gray-300">
                    <li v-for="feature in keyFeatures" :key="feature" class="flex items-start">
                        <svg class="h-6 w-6 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                        </svg>
                        <span>{{ $t(`projects.portfolio.features.keyFeatures.${feature}`) }}</span>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<style lang="postcss" scoped>
.aspect-video {
    aspect-ratio: 16 / 9;
}
</style>