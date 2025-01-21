<template>
    <nav>
        <div class="container flex flex-wrap gap-2 items-center mx-auto p-1 flex-col md:flex-row">
            <div class="flex-1">
                <h1>
                    <a href="#" class="mr-4 block cursor-pointer text-2xl font-bold">
                        Feierstein Chad
                    </a>
                </h1>
            </div>
            <div class="flex-1">
                <ul class="flex flex-row justify-around items-center gap-x-2">
                    <li v-for="link in navLinks" :key="link.name" class="flex items-center text-lg font-semibold">
                        <NuxtLink :to="link.to" active-class="text-blue-500"
                            class="flex items-center gap-x-1 rounded-lg hover:text-blue-500">
                            <Icon :name="link.icon" size="24"></Icon>
                            {{ link.name }}
                        </NuxtLink>
                    </li>
                </ul>
            </div>
            <div class="flex-1 flex gap-2">
                <div class="h-8 w-8 ml-auto">
                    <ClientOnly>
                        <ThemeSwitcher />
                    </ClientOnly>
                </div>
            </div>
        </div>
    </nav>
</template>

<script setup>
const navLinks = [
    { name: 'Home', to: '/', icon: 'material-symbols-light:family-home' },
    { name: 'Skills', to: '/skills', icon: 'material-symbols-light:book-2' },
    { name: 'Projects', to: '/projects', icon: 'material-symbols-light:folder' }
];
</script>

<style scoped>
nav {
    @apply bg-slate-300 bg-opacity-75 border-slate-300 border-[1px] border-opacity-70;
    @apply dark:bg-slate-700 dark:bg-opacity-75 dark:border-slate-700 dark:text-slate-300;
    @apply uppercase;
    @apply block w-full max-w-screen-xl mx-auto fixed left-[50%] translate-x-[-50%] top-1 shadow px-4 py-1 backdrop-blur-lg backdrop-saturate-150 z-[9999] rounded-lg;
}
</style>
