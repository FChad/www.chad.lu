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
    <button
        class="bg-slate-300 dark:bg-slate-700 text-slate-500 dark:text-yellow-500 h-full w-full flex items-center justify-center rounded-lg transition-colors duration-200"
        @click="toggleTheme">
        <Icon v-if="colorMode.value === 'dark'" name="material-symbols-light:sunny" />
        <Icon v-else name="material-symbols:dark-mode-rounded" />
    </button>
</template>

<style scoped></style>