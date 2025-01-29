<script lang="ts" setup>
const formFields = [
    { id: 'name', label: 'Name', type: 'text' },
    { id: 'email', label: 'Email', type: 'text' },
    { id: 'subject', label: 'Subject', type: 'text' },
    { id: 'message', label: 'Message', type: 'textarea', rows: 5 }
];
</script>

<template>
    <div class="h-full w-full overflow-y-auto">
        <div class="max-w-7xl h-full w-full mx-auto p-4 font-semibold flex flex-col gap-4">
            <div class="flex flex-col lg:flex-row gap-4">
                <form class="flex-1 flex flex-col gap-2 bg-white dark:dark:bg-slate-700 p-4 rounded-lg shadow-md">
                    <h2 class="text-xl font-bold text-center">Email</h2>
                    <span>Get in Touch</span>
                    <span>Let's Chat, feel free to reach out to me</span>
                    <span>Have questions or feedback? We're here to help. Send us a message, and we'll respond within 24
                        hours.</span>
                    <div v-for="field in formFields" :key="field.id" class="relative">
                        <component :is="field.type === 'textarea' ? 'textarea' : 'input'" :id="field.id"
                            :rows="field.rows" :type="field.type"
                            class="block rounded-lg px-2.5 pb-1.5 pt-4 w-full text-sm text-gray-900 border-2 bg-slate-50 dark:bg-slate-800 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                            placeholder="" />
                        <label :for="field.id"
                            class="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 bg-slate-50 dark:bg-slate-800 transform -translate-y-3 scale-75 top-3 z-10 origin-[0] start-2.5 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-3 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto">
                            {{ field.label }}
                        </label>
                    </div>
                    <button type="submit"
                        class="flex justify-center items-center gap-1 self-end px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-300 focus:ring-opacity-50">
                        Send message
                        <Icon name="material-symbols:send-rounded" size="20" />
                    </button>
                </form>

                <div class="flex-1">
                    <h2 class="text-xl font-bold">Social media</h2>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="css" scoped></style>
