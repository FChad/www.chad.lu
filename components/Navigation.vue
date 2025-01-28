<template>
    <nav class="bg-white dark:bg-slate-800 ">
        <div class="container max-w-7xl flex flex-wrap gap-2 items-center mx-auto py-1 flex-col lg:flex-row">
            <div class="flex-1 w-full md:w-fit flex md:block justify-between items-center">
                <h1 class="flex-1">
                    <a href="#" class="block cursor-pointer text-xl font-bold">
                        <span
                            class="bg-gradient-to-r from-pink-400 via-purple-500 to-blue-500 bg-clip-text text-transparent">
                            Feierstein Chad
                        </span>
                    </a>
                </h1>

                <div class="block md:hidden">
                    <div class="flex gap-2 ml-auto">
                        <div class="h-7 w-7">
                            <button
                                class="bg-slate-100 dark:bg-slate-700 text-slate-500 dark:text-slate-300 h-full w-full flex items-center justify-center rounded-lg">
                                <Icon name="material-symbols:translate" />
                            </button>
                        </div>
                        <div class="h-7 w-7">
                            <ClientOnly>
                                <ThemeSwitcher />
                            </ClientOnly>
                        </div>

                        <div class="h-7 w-7">
                            <button @click="handleModal"
                                class="bg-slate-100 dark:bg-slate-700 text-slate-500 dark:text-slate-300 h-full w-full flex items-center justify-center rounded-lg">
                                <Icon name="material-symbols:menu" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <div class="flex-1 hidden md:block">
                <ul class="flex justify-around items-center gap-x-2 flex-col sm:flex-row">
                    <li v-for="link in navLinks" :key="link.name" class="flex items-center text-base font-semibold">
                        <NuxtLink :to="link.to" active-class="text-blue-400 dark:text-blue-400"
                            class="flex items-center px-2 py-1 gap-x-1 rounded-xl hover:dark:bg-slate-700 hover:bg-slate-100">
                            <Icon :name="link.icon" size="20"></Icon>
                            {{ link.name }}
                        </NuxtLink>
                    </li>
                </ul>
            </div>
            <div class="flex-1 gap-2 hidden md:flex">
                <div class="flex gap-2 ml-auto">
                    <div class="h-7 w-7">
                        <button
                            class="bg-slate-100 dark:bg-slate-700 text-slate-500 dark:text-slate-300 h-full w-full flex items-center justify-center rounded-lg">
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
        <Modal :isOpen="isOpen" title="Navigation" :handleModal="handleModal" class="!z-50">
            <template #body>
                <ul class="flex justify-around items-center gap-x-2 flex-col p-2">
                    <li v-for="link in navLinks" :key="link.name" class="flex items-center text-base font-semibold">
                        <NuxtLink @click="handleModal" :to="link.to" active-class="text-blue-400 dark:text-blue-400"
                            class="flex items-center px-2 py-1 gap-x-1 rounded-xl hover:dark:bg-slate-700 hover:bg-slate-100">
                            <Icon :name="link.icon" size="20"></Icon>
                            {{ link.name }}
                        </NuxtLink>
                    </li>
                </ul>
            </template>
            <template #footer>

            </template>
        </Modal>
    </nav>
</template>

<script setup>

const isOpen = ref(false);

const handleModal = () => {
    isOpen.value = !isOpen.value;
};

const navLinks = [
    { name: 'Home', to: '/', icon: 'material-symbols-light:family-home' },
    { name: 'About', to: '/about', icon: 'material-symbols-light:person' },
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
