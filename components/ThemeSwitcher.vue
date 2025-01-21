<script setup>

const colorMode = ref(localStorage.getItem('colorMode') || 'light')

const toggleColorMode = () => {
    colorMode.value = colorMode.value === 'dark' ? 'light' : 'dark'
    localStorage.setItem('colorMode', colorMode.value)
}

watchEffect(() => {
    document.documentElement.setAttribute('data-theme', colorMode.value)
})
</script>

<template>
    <button class="toggleColorMode" @click="toggleColorMode">
        <template v-if="colorMode.value === 'dark'">
            <Icon name="i-heroicons-moon-20-solid" />
        </template>
        <template v-else>
            <Icon name="i-heroicons-sun-20-solid" />
        </template>
    </button>
</template>