<template>
    <div class="w-screen h-screen flex flex-col overflow-hidden">
        <Navigation />
        <NuxtPage />
    </div>
</template>

<style lang="postcss">
body {
    /* font-family: 'Poppins', sans-serif; */
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
