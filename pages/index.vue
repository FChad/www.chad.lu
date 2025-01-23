<script lang="ts" setup>

</script>

<template>
    <div class="w-full h-full flex flex-col overflow-y-auto">
        <div class="w-full min-h-full flex items-center justify-center bg-neutral-700">
            <img src="/img/luxemburg.jpg" alt=""
                class="absolute bg-cover w-[110%] max-w-[110%] h-auto brightness-150 dark:brightness-75 blur-[7px] opacity-60">
            <div class="flex flex-col items-center justify-center w-full h-full z-10">
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
                    <div class="w-full max-w-[50%]">
                        <div class="flex flex-col items-center gap-5 rounded-lg p-3 font-bold">
                            <p class="text-md  text-center text-white">
                                Here, you will find a showcase of my work, skills, and projects. Feel free to explore
                                and learn more about what I do. Enjoy your stay!
                            </p>
                            <div class="flex items-center justify-start gap-4">
                                <button class="bg-blue-500 text-white px-4 py-1 rounded-full">
                                    <NuxtLink class="flex items-center gap-1" to="/about">
                                        <Icon name="material-symbols-light:mail" /> About
                                    </NuxtLink>
                                </button>
                                <button class="border border-white text-white px-4 py-1 rounded-full">
                                    <NuxtLink class="flex items-center gap-1" to="/projects">
                                        <Icon name="material-symbols-light:folder" /> Projects
                                    </NuxtLink>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="css" scoped>
.background-section {
    /* background-image: url('https://picsum.photos/1280/720'); */
    @apply bg-cover bg-center w-full h-full;
    @apply min-h-[500px];
    @apply rounded-2xl p-4 flex items-center justify-center;
}
</style>