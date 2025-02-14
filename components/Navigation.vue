<template>
    <nav class="bg-white dark:bg-slate-800 sticky top-0 z-50 min-h-14 flex items-center w-full">
        <div class="container max-w-7xl mx-auto w-full flex items-center justify-between px-4 py-2">
            <!-- Main Navigation Bar -->
            <div class="flex items-center w-full gap-1 sm:gap-4">
                <!-- Logo -->
                <div class="flex-shrink-0">
                    <NuxtLink to="/" class="block cursor-pointer">
                        <h1 class="text-xl font-bold">
                            <span
                                class="uppercase bg-gradient-to-r from-rose-500 via-violet-600 to-indigo-600 dark:from-rose-400 dark:via-violet-400 dark:to-indigo-400 bg-clip-text text-transparent">
                                Feierstein Chad
                            </span>
                        </h1>
                    </NuxtLink>
                </div>

                <div class="flex-1 flex items-center justify-center">
                    <!-- Desktop Navigation -->
                    <div class="hidden lg:flex items-center gap-8">
                        <ul class="flex items-center gap-6">
                            <li v-for="link in navLinks" :key="link.name" class="text-base">
                                <NuxtLink :to="link.to"
                                    class="relative flex items-center gap-2 px-3 py-2 text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors duration-200"
                                    :class="{ 'text-slate-900 dark:text-white': $route.path === localePath(link.to) }">
                                    <Icon :name="link.icon" size="20" />
                                    <span>{{ $t(link.name) }}</span>
                                    <span
                                        class="absolute bottom-0 left-0 w-full h-0.5 bg-blue-500 scale-x-0 transition-transform duration-200"
                                        :class="{ 'scale-x-100': $route.path === localePath(link.to) }">
                                    </span>
                                </NuxtLink>
                            </li>
                        </ul>
                    </div>
                </div>

                <!-- Right Controls -->
                <div class="flex items-center gap-3">
                    <LanguageSwitcher />
                    <div class="w-8 h-8">
                        <ClientOnly>
                            <ThemeSwitcher />
                        </ClientOnly>
                    </div>
                    <!-- Mobile Menu Button -->
                    <BaseButton variant="filled" size="sm" shape="square" type="button" icon="mdi:menu"
                        :disabled="false"
                        class="lg:hidden bg-slate-100 dark:bg-slate-700 hover:bg-slate-200 dark:hover:bg-slate-600 text-slate-500 dark:text-slate-300"
                        @click="handleModal">
                    </BaseButton>
                </div>
            </div>
        </div>

        <!-- Mobile Navigation Modal -->
        <Modal :isOpen="isOpen" title="Navigation" :handleModal="handleModal">
            <template #body>
                <ul class="grid gap-2">
                    <li v-for="link in navLinks" :key="link.name">
                        <NuxtLink @click="handleModal" :to="link.to"
                            class="grid grid-cols-[48px_1fr_24px] items-center gap-2 p-2 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800 group"
                            :class="{ 'bg-slate-100 dark:bg-slate-800': $route.path === localePath(link.to) }">
                            <div
                                class="flex items-center justify-center w-8 h-8 rounded-lg bg-slate-200 dark:bg-slate-700 group-hover:bg-slate-300 dark:group-hover:bg-slate-600">
                                <Icon :name="link.icon" size="24" class="text-slate-700 dark:text-slate-200" />
                            </div>
                            <span class="text-base font-medium">{{ $t(link.name) }}</span>
                            <Icon name="mdi:chevron-right" size="24"
                                class="text-slate-400 transition-transform group-hover:translate-x-1 justify-self-end"
                                :class="{ 'text-blue-500': $route.path === localePath(link.to) }" />
                        </NuxtLink>
                    </li>
                </ul>
            </template>
        </Modal>
    </nav>
</template>

<script setup>
import { useNavigation } from '~/composables/useNavigation'
import { useLocalePath } from '#imports'

const localePath = useLocalePath()
const { navLinks } = useNavigation()
const isOpen = ref(false)

const handleModal = () => {
    isOpen.value = !isOpen.value
}
</script>

<style scoped lang="postcss">
nav {
    @apply border-slate-300 border-b border-opacity-70;
    @apply dark:border-slate-700 dark:text-slate-300;
    @apply backdrop-blur-lg bg-white/90 dark:bg-slate-800/90;
}
</style>
