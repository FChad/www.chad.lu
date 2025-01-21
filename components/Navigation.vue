<template>
    <nav>
        <div class="container flex flex-wrap gap-2 items-center justify-between mx-auto">
            <h1 class="">
                <a href="#" class="mr-4 block cursor-pointer text-2xl font-black">
                    Feierstein Chad
                </a>
            </h1>
            <div class="hidden lg:block">
                <ul class="flex flex-col gap-2 mt-2 mb-4 lg:mb-0 lg:mt-0 lg:flex-row lg:justify-around lg:items-center lg:gap-10">
                    <li class="flex items-center p-1 text-lg gap-x-2">
                        <a href="#" class="flex items-center bg-white bg-opacity-25 dark:bg-black dark:bg-opacity-25 rounded-lg py-1 px-4">Home</a>
                    </li>
                    <li class="flex items-center p-1 text-lg gap-x-2">
                        <a href="#" class="flex items-center bg-white bg-opacity-25 dark:bg-black dark:bg-opacity-25 rounded-lg py-1 px-4">Skills</a>
                    </li>
                    <li class="flex items-center p-1 text-lg gap-x-2">
                        <a href="#" class="flex items-center bg-white bg-opacity-25 dark:bg-black dark:bg-opacity-25 rounded-lg py-1 px-4">Projects</a>
                    </li>

                </ul>
            </div>
            <div class="flex gap-2">
                <client-only>
                    <ThemeSwitcher />
                </client-only>
                <button class="h-8 w-8 lg:hidden toggleColorMode" type="button">
                    <Icon name="i-heroicons-bars-3"></Icon>
                </button>
            </div>
        </div>
    </nav>
</template>

<script setup>

</script>

<style scoped></style>