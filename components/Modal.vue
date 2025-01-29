<script lang="ts" setup>

interface Props {
    isOpen: Ref<boolean>;
    title: string
    handleModal: () => void;
}

const { isOpen, handleModal, title } = defineProps<Props>();

</script>

<template>
    <div v-if="isOpen" class="skim z-50" @click="handleModal"></div>
    <Transition name="fade">
        <div v-if="isOpen" class="modal-overlay ">
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

                <div>
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
}

.fade-enter-from,
.fade-leave-to {
    opacity: 0;
    scale: 0.9;
}

.skim {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.25);
}

.modal-overlay {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    transform-origin: center;
    width: fit-content;
    height: fit-content;
    z-index: 50;
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