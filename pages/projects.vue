<script lang="ts" setup>
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
        title: "Example Project",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        image: "/img/no_image_available.jpg",
        tags: ["HTML", "JavaScript", "CSS", "PHP", "SQL"],
        link: "#"
    }
];
</script>

<template>
    <div class="h-full bg-gray-50 dark:bg-slate-900 overflow-y-auto">
        <div class="max-w-7xl mx-auto p-4">
            <!-- Header Card -->
            <div
                class="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-sm border border-gray-100 dark:border-slate-700 mb-4">
                <h1 class="text-3xl font-bold text-gray-900 dark:text-white mb-4">{{ $t('projects.title') }}</h1>
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
                                {{ project.title }}
                            </h3>
                            <p class="text-gray-600 dark:text-gray-300 mb-4">
                                {{ project.description }}
                            </p>
                            <div class="flex flex-wrap gap-2">
                                <span v-for="tag in project.tags" :key="tag"
                                    class="px-3 py-1 bg-gray-50 dark:bg-slate-700 text-gray-600 dark:text-gray-300 rounded-lg text-sm">
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
