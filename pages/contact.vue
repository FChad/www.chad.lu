<script lang="ts" setup>
const formFields = [
    { id: 'name', label: 'Name', type: 'text' },
    { id: 'email', label: 'Email', type: 'text' },
    { id: 'subject', label: 'Subject', type: 'text' },
    { id: 'message', label: 'Message', type: 'textarea', rows: 5 }
];
</script>

<template>
    <div class="h-full bg-gray-50 dark:bg-slate-800 overflow-y-auto">
        <div class="max-w-5xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
            <!-- Page Header -->
            <div class="text-center mb-12">
                <h1 class="text-4xl font-bold text-gray-900 dark:text-white mb-4">Get in Touch</h1>
                <p class="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                    Have questions or feedback? We're here to help. Send us a message, and we'll respond within 24
                    hours.
                </p>
            </div>

            <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <!-- Contact Form -->
                <div class="bg-white dark:bg-slate-700 rounded-2xl shadow-lg p-8">
                    <form class="space-y-6">
                        <div v-for="field in formFields" :key="field.id" class="relative">
                            <component :is="field.type === 'textarea' ? 'textarea' : 'input'" :id="field.id"
                                :rows="field.rows" :type="field.type" class="block w-full px-4 py-3 rounded-lg border-2 bg-gray-50 dark:bg-slate-800 
                                    text-gray-900 dark:text-white border-gray-200 dark:border-gray-600
                                    focus:border-blue-500 dark:focus:border-blue-500 focus:ring-2 
                                    focus:ring-blue-500 focus:ring-opacity-20 transition-colors
                                    peer" placeholder=" " />
                            <label :for="field.id" class="absolute text-sm text-gray-500 dark:text-gray-400 duration-200 
                                    transform -translate-y-2 scale-75 top-2 z-10 origin-[0] 
                                    bg-gray-50 dark:bg-slate-800 px-2 peer-placeholder-shown:px-4
                                    peer-placeholder-shown:top-3 peer-placeholder-shown:text-base 
                                    peer-focus:-translate-y-2 peer-focus:text-blue-500 peer-focus:text-sm
                                    peer-focus:px-2 left-1">
                                {{ field.label }}
                            </label>
                        </div>

                        <button type="submit" class="w-full sm:w-auto px-6 py-3 bg-blue-600 text-white rounded-lg
                                hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 
                                focus:ring-opacity-50 transition-colors duration-200 flex items-center 
                                justify-center gap-2 text-sm font-semibold">
                            Send message
                            <Icon name="material-symbols:send-rounded" size="20" />
                        </button>
                    </form>
                </div>

                <!-- Social Media Section -->
                <div class="bg-white dark:bg-slate-700 rounded-2xl shadow-lg p-6">
                    <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-4">Connect With Us</h2>
                    <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        <NuxtLink to="#"
                            class="group bg-gray-50 dark:bg-slate-800 p-3 rounded-xl hover:bg-blue-50 dark:hover:bg-slate-900 transition-colors ">
                            <div class="flex items-center gap-2">
                                <div
                                    class="p-2 bg-blue-100 dark:bg-blue-900 rounded-lg group-hover:bg-blue-200 dark:group-hover:bg-blue-800 transition-colors flex items-center justify-center">
                                    <Icon name="mdi:linkedin" size="20" class="text-blue-600 dark:text-blue-400" />
                                </div>
                                <div>
                                    <p class="font-medium text-gray-900 dark:text-white">LinkedIn</p>
                                    <p class="text-sm text-gray-600 dark:text-gray-400">Professional </p>
                                </div>
                            </div>
                        </NuxtLink>

                        <NuxtLink to="#"
                            class="group bg-gray-50 dark:bg-slate-800 p-3 rounded-xl hover:bg-blue-50 dark:hover:bg-slate-900 transition-colors ">
                            <div class="flex items-center gap-2">
                                <div
                                    class="p-2 bg-blue-100 dark:bg-blue-900 rounded-lg group-hover:bg-blue-200 dark:group-hover:bg-blue-800 transition-colors flex items-center justify-center">
                                    <Icon name="mdi:twitter" size="20" class="text-blue-500 dark:text-blue-400" />
                                </div>
                                <div>
                                    <p class="font-medium text-gray-900 dark:text-white">Twitter</p>
                                    <p class="text-sm text-gray-600 dark:text-gray-400">Latest News</p>
                                </div>
                            </div>
                        </NuxtLink>

                        <NuxtLink to="#"
                            class="group bg-gray-50 dark:bg-slate-800 p-3 rounded-xl hover:bg-pink-50 dark:hover:bg-slate-900 transition-colors ">
                            <div class="flex items-center gap-2">
                                <div
                                    class="p-2 bg-pink-100 dark:bg-pink-900 rounded-lg group-hover:bg-pink-200 dark:group-hover:bg-pink-800 transition-colors flex items-center justify-center">
                                    <Icon name="mdi:instagram" size="20" class="text-pink-600 dark:text-pink-400" />
                                </div>
                                <div>
                                    <p class="font-medium text-gray-900 dark:text-white">Instagram</p>
                                    <p class="text-sm text-gray-600 dark:text-gray-400">Photo Updates</p>
                                </div>
                            </div>
                        </NuxtLink>

                        <NuxtLink to="#"
                            class="group bg-gray-50 dark:bg-slate-800 p-3 rounded-xl hover:bg-blue-50 dark:hover:bg-slate-900 transition-colors ">
                            <div class="flex items-center gap-2">
                                <div
                                    class="p-2 bg-blue-100 dark:bg-blue-900 rounded-lg group-hover:bg-blue-200 dark:group-hover:bg-blue-800 transition-colors flex items-center justify-center">
                                    <Icon name="mdi:facebook" size="20" class="text-[#1877F2] dark:text-blue-400" />
                                </div>
                                <div>
                                    <p class="font-medium text-gray-900 dark:text-white">Facebook</p>
                                    <p class="text-sm text-gray-600 dark:text-gray-400">Community</p>
                                </div>
                            </div>
                        </NuxtLink>
                    </div>
                    <div class="mt-8 flex justify-center">
                        <img src="https://raw.githubusercontent.com/ShaifArfan/shaif-s-cuisine/main/images/about-photo.jpg"
                            alt="Connect with us illustration"
                            class="w-full max-w-md h-auto rounded-xl opacity-90 dark:opacity-80 shadow-lg" />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="postcss" scoped></style>
