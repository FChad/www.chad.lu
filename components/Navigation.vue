<template>
    <nav>
        <div class="container flex flex-wrap gap-2 items-center mx-auto p-1 flex-col md:flex-row">
            <div class="flex-1">
                <div class="flex items-center">
                    <h1>
                        <a href="#" class="block cursor-pointer text-xl font-bold">
                            <span
                                class="bg-gradient-to-r from-pink-400 via-purple-500 to-blue-500 bg-clip-text text-transparent">
                                Feierstein Chad
                            </span>
                        </a>
                    </h1>
                </div>
            </div>
            <div class="flex-1">
                <ul class="flex justify-around items-center gap-x-2 flex-col sm:flex-row">
                    <li v-for="link in navLinks" :key="link.name" class="flex items-center text-base font-semibold">
                        <NuxtLink :to="link.to" active-class="text-blue-400 dark:text-blue-400"
                            class="flex items-center px-2 py-1 gap-x-1 rounded-xl hover:dark:bg-slate-800 hover:bg-slate-200">
                            <Icon :name="link.icon" size="20"></Icon>
                            {{ link.name }}
                        </NuxtLink>
                    </li>
                </ul>
            </div>
            <div class="flex-1 flex gap-2">
                <div class="flex gap-2 ml-auto">
                    <div class="h-7 w-7">
                        <button
                            class="bg-slate-300 dark:bg-slate-700 text-slate-500 dark:text-slate-300 h-full w-full flex items-center justify-center rounded-lg transition-colors duration-200">
                            <Icon name="material-symbols:translate" />
                        </button>
                    </div>
                    <div class="h-7 w-7">
                        <ClientOnly>
                            <ThemeSwitcher />
                        </ClientOnly>
                    </div>
                </div>
            </div>
        </div>
    </nav>
</template>

<script setup>
const navLinks = [
    { name: 'Home', to: '/', icon: 'material-symbols-light:family-home' },
    { name: 'Skills', to: '/skills', icon: 'material-symbols-light:book-2' },
    { name: 'Projects', to: '/projects', icon: 'material-symbols-light:folder' },
    { name: 'Contact', to: '/contact', icon: 'material-symbols-light:mail' }
];
</script>

<style scoped>
nav {
    @apply border-slate-300 border-b border-opacity-70;
    @apply dark:border-slate-700 dark:text-slate-300;
    @apply uppercase;
    @apply w-full shadow px-4 py-1;
}
</style>
