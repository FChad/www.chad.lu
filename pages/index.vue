<script lang="ts" setup>
import { useLocalePath } from '#imports'
import { useNavigation } from '~/composables/useNavigation'
import { computed } from 'vue'

const localePath = useLocalePath()
const { navLinks, getLink } = useNavigation()

// Example of getting specific links
const aboutLink = computed(() => getLink('nav.about'))
const projectsLink = computed(() => getLink('nav.projects'))
</script>

<template>
    <div class="w-full h-full flex flex-col overflow-hidden relative">
        <div class="w-full min-h-full flex items-center justify-center ">
            <div class="flex flex-col items-center justify-center w-full h-full z-[1] overflow-hidden">
                <div class="flex flex-col gap-10 items-center justify-center overflow-hidden">
                    <h1 class="flex flex-col w-full gap-4 items-center justify-center font-bold text-white ">
                        <span class="text-xl lg:text-3xl uppercase">
                            Welcome to
                        </span>
                        <span class="text-3xl lg:text-6xl uppercase flex items-center gap-3">
                            my
                            <span
                                class="bg-gradient-to-r from-pink-400 via-purple-500 to-blue-500 bg-clip-text text-transparent">
                                portfolio
                            </span>
                            page!
                        </span>
                    </h1>
                    <div class="w-full max-w-[80%] md:max-w-[50%]">
                        <div class="flex flex-col items-center gap-5 rounded-lg p-3 font-bold">
                            <p class="text-md  text-center text-white">
                                Here, you will find a showcase of my work, skills, and projects. Feel free to explore
                                and learn more about what I do. Enjoy your stay!
                            </p>
                            <div class="flex items-center justify-start gap-4">
                                <button class="bg-blue-500 text-white px-4 py-1 rounded-full">
                                    <NuxtLink class="flex items-center gap-1" :to="aboutLink?.to">
                                        <Icon :name="aboutLink?.icon" /> {{ $t(aboutLink?.name) }}
                                    </NuxtLink>
                                </button>
                                <button class="border border-white text-white px-4 py-1 rounded-full">
                                    <NuxtLink class="flex items-center gap-1" :to="projectsLink?.to">
                                        <Icon :name="projectsLink?.icon" /> {{ $t(projectsLink?.name) }}
                                    </NuxtLink>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="absolute z-0 w-[110%] h-[110%] bg-slate-900 dark:text-slate-300;">
                <img src="/img/luxemburg.jpg" alt=""
                    class="bg-cover w-full h-full brightness-125 dark:brightness-75 blur-[7px] opacity-90 object-cover z-0">
            </div>
        </div>
    </div>
</template>

<style lang="postcss" scoped></style>