<script lang="ts" setup>
import { Icon } from '@iconify/vue';

interface TagStyle {
    tag: string;
    classes: string;
}

const tagStyles: TagStyle[] = [
    { tag: 'Nuxt3', classes: 'bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-100' },
    { tag: 'TypeScript', classes: 'bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-100' },
    { tag: 'Tailwind', classes: 'bg-teal-100 dark:bg-teal-900 text-teal-800 dark:text-teal-100' },
    { tag: 'i18n', classes: 'bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-100' },
    { tag: 'VeeValidate', classes: 'bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-100' },
    { tag: 'Resend', classes: 'bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-100' },
    { tag: 'Iconify', classes: 'bg-indigo-100 dark:bg-indigo-900 text-indigo-800 dark:text-indigo-100' }
];

const getTagClasses = (tag: string): string => {
    const baseClasses = 'px-3 py-1 rounded-full text-sm';
    const tagStyle = tagStyles.find(style => style.tag === tag);
    return tagStyle ? `${baseClasses} ${tagStyle.classes}` : baseClasses;
};

const features = [
    { id: 'frontendFramework', name: 'Frontend Framework', tech: 'Nuxt 3' },
    { id: 'styling', name: 'Styling', tech: 'Tailwind CSS' },
    { id: 'internationalization', name: 'Internationalization', tech: 'Nuxt i18n' },
    { id: 'uiComponents', name: 'UI Components', tech: 'Custom Components' },
    { id: 'developmentEnvironment', name: 'Development Environment', tech: 'VS Code + Cursor' },
    { id: 'typeSafety', name: 'Type Safety', tech: 'TypeScript' },
    { id: 'emailIntegration', name: 'Email Integration', tech: 'Resend' },
    { id: 'formValidation', name: 'Form Validation', tech: 'VeeValidate + Yup' }
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
</script>

<template>
    <div class="h-full bg-gray-50 dark:bg-slate-900 overflow-y-auto">
        <div class="max-w-7xl mx-auto p-4">
            <!-- Header Card -->
            <div
                class="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-sm border border-gray-100 dark:border-slate-700 mb-6">
                <h1 class="text-3xl font-bold text-gray-900 dark:text-white mb-4">{{ $t('projects.portfolio.title') }}
                </h1>
                <p class="text-gray-600 dark:text-gray-300 mb-4">
                    {{ $t('projects.portfolio.description') }}
                </p>
                <div class="flex flex-wrap gap-2">
                    <span v-for="tag in ['Nuxt3', 'TypeScript', 'Tailwind', 'i18n', 'VeeValidate', 'Resend', 'Iconify']"
                        :key="tag" :class="getTagClasses(tag)">
                        {{ tag }}
                    </span>
                </div>
            </div>

            <!-- Project Cover Image -->
            <div
                class="bg-white dark:bg-slate-800 rounded-xl shadow-sm border border-gray-100 dark:border-slate-700 mb-6 overflow-hidden max-w-3xl mx-auto">
                <div class="aspect-video w-full">
                    <img src="/img/projects/project-1-cover.png" alt="Portfolio App Cover"
                        class="w-full h-full object-cover">
                </div>
                <div class="p-4 flex justify-end gap-4">
                    <a href="https://github.com/FChad/www.chad.lu" target="_blank" rel="noopener noreferrer"
                        class="inline-flex items-center px-4 py-2 rounded-lg bg-gray-100 dark:bg-slate-700 text-gray-700 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-slate-600">
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

            <!-- Features Grid -->
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <div v-for="feature in features" :key="feature.name"
                    class="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-sm border border-gray-100 dark:border-slate-700">
                    <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                        {{ $t(`projects.portfolio.features.${feature.id}.name`) }}
                    </h3>
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