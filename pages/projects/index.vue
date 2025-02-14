<script lang="ts" setup>
import { useLocalePath } from '#imports'
import { useSeo } from '#imports'

const localePath = useLocalePath()

// SEO
useSeo({
    title: 'seo.projects.title',
    description: 'seo.projects.description',
    path: localePath('/projects')
})

interface Project {
    id: number;
    title: string;
    description: string;
    image: string;
    tags: string[];
    link: string;
}

const projects: Project[] = [
    {
        id: 1,
        title: "projects.portfolio.title",
        description: "projects.portfolio.description",
        image: "/img/projects/project-1-cover.png",
        tags: ["Nuxt3", "TypeScript", "Tailwind", "i18n", "VeeValidate", "Resend", "Iconify"],
        link: localePath('/projects/my-portfolio-website')
    }
];
</script>

<template>
    <div class="h-full bg-gray-50 dark:bg-slate-900 overflow-y-auto">
        <div class="max-w-7xl mx-auto p-4">
            <!-- Header Card -->
            <div
                class="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-sm border border-gray-100 dark:border-slate-700 mb-4">
                <h2 class="text-3xl font-bold text-gray-900 dark:text-white mb-4">{{ $t('projects.title') }}</h2>
                <p class="text-gray-600 dark:text-gray-300">
                    {{ $t('projects.description') }}
                </p>
            </div>

            <!-- Projects Grid -->
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div v-for="project in projects" :key="project.id"
                    class="bg-white dark:bg-slate-800 rounded-xl shadow-sm border border-gray-100 dark:border-slate-700 overflow-hidden group">
                    <a :href="project.link" class="block">
                        <div class="aspect-video overflow-hidden">
                            <img :src="project.image" :alt="project.title"
                                class="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300">
                        </div>
                        <div class="p-6">
                            <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-3">
                                {{ $t(project.title) }}
                            </h3>
                            <p class="text-gray-600 dark:text-gray-300 mb-4">
                                {{ $t(project.description) }}
                            </p>
                            <div class="flex flex-wrap gap-2">
                                <span v-for="tag in project.tags" :key="tag" class="px-4 py-1 border border-neutral-500 rounded-full text-sm">
                                    {{ tag }}
                                </span>
                            </div>
                        </div>
                    </a>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="postcss" scoped>
.aspect-video {
    aspect-ratio: 16 / 9;
}
</style>
