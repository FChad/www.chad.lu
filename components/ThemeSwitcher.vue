<script setup>
const colorMode = useColorMode()

const toggleTheme = () => {
    colorMode.preference = colorMode.value === 'dark' ? 'light' : 'dark'
}
</script>

<template>
    <BaseButton variant="filled" size="sm" shape="square" type="button" :disabled="false"
        class="bg-slate-100 dark:bg-slate-700 hover:bg-slate-200 dark:hover:bg-slate-600 text-slate-500 dark:text-yellow-500"
        @click="toggleTheme">
        <ClientOnly>
            <Icon v-if="colorMode.value === 'dark'" name="material-symbols:sunny-rounded" size="16" />
            <Icon v-else name="material-symbols:dark-mode-rounded" size="16" />
        </ClientOnly>
    </BaseButton>
</template>

<style scoped lang="postcss"></style>