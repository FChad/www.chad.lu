<template>
    <div class="w-screen h-screen flex flex-col overflow-hidden">
        <!-- Navigation bar -->
        <Navigation />
        
        <!-- Main content area -->
        <main class="flex-1 overflow-hidden bg-slate-100 dark:bg-slate-900">
            <slot />
        </main>
    </div>
</template>

<script setup lang="ts">
// The Navigation component will be auto-imported since it's in the components directory
</script>

<style lang="postcss">
body {
    @apply bg-slate-100 text-slate-700;
    @apply dark:bg-slate-900 dark:text-slate-300;
}

/* Custom scrollbar styles */
::-webkit-scrollbar {
    @apply w-2;
}

::-webkit-scrollbar-track {
    @apply bg-slate-100 dark:bg-slate-900;
}

::-webkit-scrollbar-thumb {
    @apply bg-slate-300 dark:bg-slate-700;
}

::-webkit-scrollbar-thumb:hover {
    @apply bg-slate-500 dark:bg-slate-600;
}
</style> 