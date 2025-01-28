<script lang="ts" setup>

</script>

<template>
    <div class="h-full w-full overflow-y-auto">
        <div class="max-w-7xl h-full w-full mx-auto px-4 md:px-0 py-4 font-semibold flex flex-col gap-4">
            <div class="flex gap-4">
                <form class="flex-1 flex flex-col gap-4">
                    <h2 class="text-xl font-bold">Email</h2>
                    <div class="flex justify-between gap-4">
                        <div class="flex-1 relative">
                            <input type="text" id="small_filled"
                                class="block rounded-lg px-2.5 pb-1.5 pt-4 w-full text-sm text-gray-900 border-2 dark:bg-slate-800 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                placeholder="" />
                            <label for="small_filled"
                                class="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-3 scale-75 top-3 z-10 origin-[0] start-2.5 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-3 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto">
                                Name
                            </label>
                        </div>
                        <div class="flex-1 relative">
                            <input type="text" id="small_filled"
                                class="block rounded-lg px-2.5 pb-1.5 pt-4 w-full text-sm text-gray-900 border-2 dark:bg-slate-800 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                placeholder="" />
                            <label for="small_filled"
                                class="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-3 scale-75 top-3 z-10 origin-[0] start-2.5 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-3 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto">
                                Email*
                            </label>
                        </div>
                    </div>
                    <div class="relative">
                        <input type="text" id="small_filled"
                            class="block rounded-lg px-2.5 pb-1.5 pt-4 w-full text-sm text-gray-900  border-2 dark:bg-slate-800 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                            placeholder="" />
                        <label for="small_filled"
                            class="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-3 scale-75 top-3 z-10 origin-[0] start-2.5 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-3 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto">
                            Betreff*
                        </label>
                    </div>
                    <div class="relative">
                        <textarea type="text" id="small_filled" rows="5"
                            class="block rounded-lg px-2.5 pb-1.5 pt-4 w-full text-sm text-gray-900 border-2 dark:bg-slate-800 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                            placeholder="" />
                        <label for="small_filled"
                            class="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-3 scale-75 top-3 z-10 origin-[0] start-2.5 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-3 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto">
                            Nachricht*
                        </label>
                    </div>
                    <button type="submit" class="flex justify-center items-center gap-1 self-end px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
                        Abschicken <Icon name="material-symbols:send-rounded" size="20" />
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
