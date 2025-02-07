<script lang="ts" setup>
import { useLocalePath } from '#imports'
import { useNavigation } from '~/composables/useNavigation'
import { computed } from 'vue'

const localePath = useLocalePath()
const { navLinks, getLink } = useNavigation()

// Add proper typing for links
interface NavLink {
    to: string
    icon: string
    name: string
}

// Example of getting specific links
const aboutLink = computed<NavLink | undefined>(() => getLink('nav.about'))
const projectsLink = computed<NavLink | undefined>(() => getLink('nav.projects'))
</script>

<template>
    <div class="w-full h-full flex flex-col overflow-hidden relative">
        <div class="w-full min-h-full flex items-center justify-center ">
            <div class="flex flex-col items-center justify-center w-full h-full z-[1] overflow-hidden">
                <div class="flex flex-col gap-10 items-center justify-center overflow-hidden">
                    <h1 class="flex flex-col w-full gap-4 items-center justify-center font-bold text-white ">
                        <span class="text-xl lg:text-3xl uppercase">
                            {{ $t('home.welcome') }}
                        </span>
                        <span class="text-3xl lg:text-6xl uppercase flex items-center gap-3">
                            {{ $t('home.my') }}
                            <span
                                class="bg-gradient-to-r from-rose-500 via-violet-600 to-indigo-600 dark:from-rose-400 dark:via-violet-400 dark:to-indigo-400 bg-clip-text text-transparent">
                                {{ $t('home.portfolio') }}
                            </span>
                            {{ $t('home.page') }}
                        </span>
                    </h1>
                    <div class="w-full max-w-[80%] md:max-w-[50%]">
                        <div class="flex flex-col items-center gap-5 rounded-lg p-3 font-bold">
                            <p class="text-lg text-center text-white">
                                {{ $t('home.description') }}
                            </p>
                            <div class="flex items-center justify-start gap-4">
                                <button
                                    class="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-full transition-colors duration-200"
                                    :aria-label="$t(aboutLink?.name)">
                                    <NuxtLink class="flex items-center gap-1" :to="aboutLink?.to">
                                        <Icon :name="aboutLink?.icon" class="text-xl" /> {{ $t(aboutLink?.name) }}
                                    </NuxtLink>
                                </button>
                                <button
                                    class="border border-white hover:bg-white hover:text-slate-900 text-white px-6 py-2 rounded-full transition-colors duration-200"
                                    :aria-label="$t(projectsLink?.name)">
                                    <NuxtLink class="flex items-center gap-1" :to="projectsLink?.to">
                                        <Icon :name="projectsLink?.icon" class="text-xl" /> {{ $t(projectsLink?.name) }}
                                    </NuxtLink>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="absolute z-0 w-[110%] h-[110%] bg-slate-900 dark:text-slate-300">
                <img src="/img/luxembourg.webp" alt="Luxembourg city landscape" loading="eager"
                    class="bg-cover w-full h-full brightness-125 dark:brightness-75 blur-[7px] opacity-90 object-cover z-0 transition-[filter] duration-300">
            </div>
        </div>
    </div>
</template>

<style lang="postcss" scoped>
.text-3xl {
    animation: fadeIn 0.5s ease-in;
}

@keyframes fadeIn {
    from {
        opacity: 0;
        transform: translateY(20px);
    }

    to {
        opacity: 1;
        transform: translateY(0);
    }
}
</style>