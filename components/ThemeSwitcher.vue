<script setup>
const colorMode = useColorMode()

const toggleTheme = () => {
    colorMode.preference = colorMode.preference === 'dark' ? 'light' : 'dark'
}
</script>

<template>
    <button class="toggleThemeButton" @click="toggleTheme">
        <template v-if="colorMode.value === 'dark'">
            <Icon name="i-heroicons-sun-20-solid" />
        </template>
        <template v-else>
            <Icon name="i-heroicons-moon-20-solid" />
        </template>
    </button>
</template>