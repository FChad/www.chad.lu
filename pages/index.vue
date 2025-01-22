<script lang="ts" setup>

</script>

<template>
    <div class="flex flex-col gap-4">
        <div class="uppercase w-full">
            <div
                class="flex gap-2 items-center text-xl font-bold leading-none tracking-tight dark:text-gray-300 text-gray-700">
                <Icon name="material-symbols-light:family-home" />
                <span>Home</span>
            </div>
        </div>
        <div class="background-section">
            <div class="w-full h-wull max-w-xl">
                <div
                    class="flex gap-4 bg-white dark:bg-black bg-opacity-50 dark:bg-opacity-50 rounded-2xl p-4 text-slate-700 font-bold backdrop-blur-md">
                    <div class="flex flex-col gap-4">
                        <p class="text-xl font-bold text-gray-800 dark:text-gray-200">
                            <span
                                class="bg-gradient-to-r from-pink-400 via-purple-500 to-blue-500 bg-clip-text text-transparent">Welcome</span>
                            to my portfolio page! 👋
                        </p>
                        <p class="text-base leading-relaxed text-gray-800 dark:text-gray-300">
                            Here, you will find a showcase of my work, skills, and projects.<br>
                            I am passionate about web development and love creating beautiful, functional websites.<br>
                            Feel free to explore and learn more about what I do.<br>
                            If you have any questions or would like to collaborate, don't hesitate to reach out.<br>
                            Enjoy your stay! 😊
                        </p>
                    </div>
                </div>
            </div>
        </div>


        <div
            class="bg-white dark:bg-slate-800 text-slate-800 dark:text-slate-200 bg-opacity-75 dark:bg-opacity-75 rounded-2xl p-4 text-slate-700 font-bold backdrop-blur-md">
            <div class="flex flex-row justify-between items-center gap-4">
                <div class="flex items-center gap-4 mb-4">
                    <img src="https://picsum.photos/96" alt="Profile Picture" class="w-16 h-16 rounded-full">
                    <div class="badge p-2">
                        <span class="label opacity-75">Name:</span><br><div class="text-xl font-bold">Feierstein Chad</div>
                    </div>
                </div>
                <div class="flex-1 flex flex-row items-center gap-2 mb-4">
                    <div class="badge bg-slate-100 dark:bg-slate-800 p-2 rounded-lg">
                        <span class="label opacity-75">Nationalität:</span><br>Luxembourgisch
                    </div>
                    <div class="badge bg-slate-100 dark:bg-slate-800 p-2 rounded-lg">
                        <span class="label opacity-75">Wohnort:</span><br>Rumelange
                    </div>
                    <div class="badge bg-slate-100 dark:bg-slate-800 p-2 rounded-lg">
                        <span class="label opacity-75">Familienstand:</span><br>Ledig
                    </div>
                    <div class="badge bg-slate-100 dark:bg-slate-800 p-2 rounded-lg">
                        <span class="label opacity-75">Alter:</span><br>30 Jahre
                    </div>
                </div>
            </div>
            <h2 class="text-xl font-bold">Features</h2>
            <ul class="mt-2 list-disc list-inside">
                <li>Feature 1: Description of feature 1.</li>
                <li>Feature 2: Description of feature 2.</li>
                <li>Feature 3: Description of feature 3.</li>
            </ul>
        </div>
    </div>
</template>

<style lang="css" scoped>
.background-section {
    background-image: url('https://picsum.photos/1280/720');
    @apply bg-cover bg-center w-full h-full;
    @apply min-h-[500px];
    @apply rounded-2xl p-4 flex items-center justify-center;
}
</style>