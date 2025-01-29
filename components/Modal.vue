<script lang="ts" setup>

interface Props {
    isOpen: Ref<boolean>;
    title: string
    handleModal: () => void;
}

const { isOpen, handleModal, title } = defineProps<Props>();

</script>

<template>
    <div v-if="isOpen" class="skim z-50"></div>
    <Transition name="fade">
        <div v-if="isOpen" class="modal-overlay" @click="handleModal">
            <div class="modal-content" @click.stop>
                <div class="flex items-center justify-between ">
                    <slot name="header">
                        <h2 class="font-semibold text-lg">{{ title }}</h2>
                        <button
                            class=" bg-slate-100 dark:bg-slate-700 text-slate-500 dark:text-slate-300 rounded-lg  p-1  flex items-center justify-center"
                            @click="handleModal">
                            <Icon name="material-symbols:close-rounded" />
                        </button>
                    </slot>
                </div>

                <div>
                    <slot name="body"></slot>
                </div>

                <div class="flex justify-end mt-4">
                    <slot name="footer"></slot>
                </div>
            </div>
        </div>
    </Transition>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
    transition: all 0.15s;
    transform-origin: center;
}

.fade-enter-from,
.fade-leave-to {
    opacity: 0;
    scale: 0.9;
}

.skim {
    @apply fixed top-0 left-0 w-full h-full bg-black bg-opacity-25;
}

.modal-overlay {
    @apply fixed inset-0 flex items-center justify-center;
    @apply z-50;
}

.modal-content {
    @apply bg-white text-slate-700;
    @apply dark:bg-slate-900 dark:text-slate-300;
    @apply rounded-2xl p-4;
    @apply min-w-64 normal-case;
    @apply flex flex-col gap-2;
}

.modal-content>div:not(:last-child) {
    @apply border-b border-slate-200 dark:border-slate-800;
}

.modal-content {
    @apply bg-white text-slate-700;
    @apply dark:bg-slate-900 dark:text-slate-300;
    @apply rounded-2xl p-4;
    @apply min-w-64 normal-case;
    @apply flex flex-col gap-2;
}

.modal-content>div:not(:last-child) {
    @apply border-b border-slate-200 dark:border-slate-800;
}
</style>