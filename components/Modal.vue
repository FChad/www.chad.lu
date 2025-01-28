<script lang="ts" setup>

interface Props {
    isOpen: Ref<boolean>;
    title: string
    handleModal: () => void;
}

const { isOpen, handleModal, title } = defineProps<Props>();

</script>

<template>
    <div v-if="isOpen" class="modal-overlay " @click="handleModal">
        <div class="modal-content" @click.stop>
            <div class="flex items-center justify-between relative">
                <slot name="header">
                    <h2 class="font-semibold text-lg">{{ title }}</h2>
                    <button class="absolute bg-slate-100 dark:bg-slate-700 text-slate-500 dark:text-slate-300 rounded-lg top-0 right-0 p-1 pointer flex items-center justify-center" @click="handleModal">
                        <Icon name="material-symbols:close-rounded" />
                    </button>
                </slot>
            </div>

            <div>
                <slot name="body"></slot>
            </div>

            <div>
                <slot name="footer"></slot>
            </div>
        </div>
    </div>
</template>

<style scoped>
.modal-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.25);
    display: flex;
    justify-content: center;
    align-items: center;
}

.modal-content {
    @apply bg-white text-slate-700;
    @apply dark:bg-slate-900 dark:text-slate-300;
    @apply rounded-2xl p-4;
    @apply min-w-64 normal-case;
    @apply flex flex-col gap-2;
}

.modal-content > div:not(:last-child) {
    @apply border-b border-slate-200 dark:border-slate-800;
}
</style>