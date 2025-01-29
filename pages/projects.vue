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
        title: "E-Commerce Platform",
        description: "A full-stack e-commerce solution built with Vue 3 and Node.js, featuring real-time inventory management and secure payment processing.",
        image: "/img/no_image_available.jpg",
        tags: ["Vue", "Node.js", "MongoDB", "Stripe"],
        link: "#"
    },
    {
        id: 2,
        title: "AI Chat Assistant",
        description: "An intelligent chatbot powered by machine learning, capable of natural language processing and contextual responses.",
        image: "/img/no_image_available.jpg",
        tags: ["Python", "TensorFlow", "NLP", "API"],
        link: "#"
    },
    {
        id: 3,
        title: "Smart Home Dashboard",
        description: "A responsive dashboard for monitoring and controlling IoT devices, with real-time data visualization.",
        image: "/img/no_image_available.jpg",
        tags: ["IoT", "Vue", "WebSocket", "Charts"],
        link: "#"
    },
    {
        id: 4,
        title: "Mobile Fitness App",
        description: "A cross-platform fitness tracking application with workout plans, progress monitoring, and social features.",
        image: "/img/no_image_available.jpg",
        tags: ["React Native", "Firebase", "Redux", "Health API"],
        link: "#"
    }
];
</script>

<template>
    <div class="flex-1 overflow-y-auto">
        <div class="max-w-7xl w-full mx-auto p-4 font-semibold">
            <h2 class="text-4xl font-bold mb-8 text-gray-800 dark:text-white">Projects</h2>
            <p class="text-lg text-gray-600 dark:text-gray-300 mb-12">
                Explore some of my recent work and personal projects
            </p>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-6 pb-6">
                <div v-for="project in projects" 
                     :key="project.id"
                     class="bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden group">
                    <a :href="project.link" class="block">
                        <div class="aspect-video overflow-hidden">
                            <img :src="project.image" 
                                 :alt="project.title"
                                 class="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300">
                        </div>
                        <div class="p-6">
                            <h3 class="text-xl font-bold text-gray-800 dark:text-white mb-3">
                                {{ project.title }}
                            </h3>
                            <p class="text-gray-600 dark:text-gray-300 mb-4">
                                {{ project.description }}
                            </p>
                            <div class="flex flex-wrap gap-2">
                                <span v-for="tag in project.tags" 
                                      :key="tag"
                                      class="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 rounded-full text-sm">
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
