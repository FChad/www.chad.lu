<script lang="ts" setup>
import { onMounted, onUnmounted } from 'vue';

interface Props {
    isOpen: Ref<boolean>;
    title?: string;
    hasFooter?: boolean;
    handleModal: () => void;
}

const props = defineProps<Props>();

// Close on escape key
onMounted(() => {
    const handleEscape = (e: KeyboardEvent) => {
        if (e.key === 'Escape' && props.isOpen) {
            props.handleModal();
        }
    };
    document.addEventListener('keydown', handleEscape);
    onUnmounted(() => document.removeEventListener('keydown', handleEscape));
});
</script>

<template>
    <Teleport to="body">
        <!-- Backdrop outside transition -->
        <div v-if="isOpen" class="modal-backdrop" @click="handleModal"></div>

        <Transition name="fade">
            <div v-if="isOpen" role="dialog" aria-modal="true" :aria-label="title" class="modal-wrapper">
                <!-- Modal -->
                <div class="modal-content" @click.stop>
                    <div class="modal-header">
                        <slot name="header">
                            <h2 v-if="title" class="font-semibold text-lg">{{ title }}</h2>
                            <BaseButton variant="secondary" size="sm" shape="square" icon="mdi:window-close"
                                @click="handleModal" aria-label="Close modal" />
                        </slot>
                    </div>

                    <div class="modal-body">
                        <slot name="body"></slot>
                    </div>

                    <div v-if="hasFooter" class="modal-footer">
                        <slot name="footer"></slot>
                    </div>
                </div>
            </div>
        </Transition>
    </Teleport>
</template>

<style scoped lang="postcss">
.fade-enter-active,
.fade-leave-active {
    @apply transition-all duration-150 origin-center;
}

.fade-enter-from,
.fade-leave-to {
    @apply opacity-0 scale-90;
}

.modal-wrapper {
    @apply fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-[51];
}

.modal-backdrop {
    @apply fixed inset-0 z-50 bg-black/25;
}

.modal-content {
    @apply bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 rounded-2xl p-4 min-w-64 normal-case flex flex-col gap-2 relative;
}

.modal-header {
    @apply flex items-center justify-between pb-2 border-b border-slate-200 dark:border-slate-800;
}

.modal-body {
    @apply py-2;
}

.modal-footer {
    @apply flex justify-end pt-2 border-t border-slate-200 dark:border-slate-800;
}

.close-button {
    @apply bg-slate-100 dark:bg-slate-700 text-slate-500 dark:text-slate-300 rounded-lg p-1 flex items-center justify-center hover:bg-slate-200 dark:hover:bg-slate-600 transition-colors;
}
</style>