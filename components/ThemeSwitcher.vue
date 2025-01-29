<script setup>
const colorMode = useColorMode()

const toggleTheme = () => {
    colorMode.preference = colorMode.value === 'dark' ? 'light' : 'dark'
}
</script>

<template>
    <button
        class="bg-slate-100 dark:bg-slate-700 text-slate-500 dark:text-yellow-500 h-full w-full flex items-center justify-center rounded-lg"
        @click="toggleTheme">
        <Icon v-if="colorMode.value === 'dark'" name="material-symbols-light:sunny" />
        <Icon v-else name="material-symbols:dark-mode-rounded" />
    </button>
</template>

<style scoped lang="postcss"></style>