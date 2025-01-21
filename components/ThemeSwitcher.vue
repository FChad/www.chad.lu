<script setup>
const colorMode = useColorMode()

const toggleTheme = () => {
    colorMode.preference = colorMode.preference === 'dark' ? 'light' : 'dark'
}
watch(colorMode, () => {
    console.log(colorMode.value.toLowerCase() === 'dark' ? 'material-symbols-light:sunny' : 'material-symbols:dark-mode-rounded');
    
})
</script>

<template>
    <button class="toggleThemeButton" @click="toggleTheme">
        <Icon v-if="colorMode.value === 'dark'" name="material-symbols-light:sunny"  />
        <Icon v-else name="material-symbols:dark-mode-rounded"  />
    </button>
</template>

<style scoped>
.toggleThemeButton {
    @apply bg-slate-400 dark:bg-slate-600;
    @apply text-slate-100 dark:text-yellow-400;
    @apply h-full w-full flex items-center justify-center rounded-lg;
    @apply transition-colors duration-200;
}
</style>