<script lang="ts" setup>

</script>

<template>
    <div class="bg-white dark:bg-slate-800 text-slate-800 dark:text-slate-200 h-full w-full z-10">
        <div class="max-w-7xl h-full w-full mx-auto p-4 font-bold flex flex-col">
            <div class="flex flex-row justify-between items-center gap-4">
                <div class="flex items-center gap-4 mb-4">
                    <img src="https://picsum.photos/96" alt="Profile Picture" class="w-16 h-16 rounded-full">
                    <div class="badge p-2">
                        <span class="label opacity-75">Name:</span><br>
                        <div class="text-xl font-bold">Feierstein Chad</div>
                    </div>
                </div>
                <div class="flex-1 flex flex-row items-center gap-2 mb-4">
                    <div class="badge bg-slate-100 dark:bg-slate-700 p-2 rounded-lg">
                        <span class="label opacity-75">Nationality:</span><br>Luxembourgish
                    </div>
                    <div class="badge bg-slate-100 dark:bg-slate-700 p-2 rounded-lg">
                        <span class="label opacity-75">Residence:</span><br>Rumelange
                    </div>
                    <div class="badge bg-slate-100 dark:bg-slate-700 p-2 rounded-lg">
                        <span class="label opacity-75">Marital Status:</span><br>Single
                    </div>
                    <div class="badge bg-slate-100 dark:bg-slate-700 p-2 rounded-lg">
                        <span class="label opacity-75">Age:</span><br>25 years
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

<style lang="css" scoped></style>
