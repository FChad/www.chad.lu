<script setup lang="ts">
import { computed, useSlots } from 'vue'

interface Props {
    // Button type
    variant?: 'primary' | 'secondary'
    // Icon name from the icon library (optional)
    icon?: string
    // Icon position when text is present
    iconPosition?: 'left' | 'right'
    // Button size
    size?: 'sm' | 'md' | 'lg'
    // Button shape
    shape?: 'square' | 'default'
    // Additional custom classes
    class?: string
    // Whether the button is disabled
    disabled?: boolean
    // Type of button (HTML attribute)
    type?: 'button' | 'submit' | 'reset'
}

const props = withDefaults(defineProps<Props>(), {
    variant: 'primary',
    iconPosition: 'left',
    size: 'md',
    shape: 'default',
    disabled: false,
    type: 'button'
})

const slots = useSlots()

// Compute classes based on props
const buttonClasses = computed(() => {
    const baseClasses = 'rounded-md font-medium disabled:opacity-50 disabled:cursor-not-allowed'

    const sizeClasses = {
        sm: props.shape === 'square' ? 'w-8 h-8 flex items-center justify-center' : 'h-8 text-sm px-4 py-1.5',
        md: props.shape === 'square' ? 'w-10 h-10 flex items-center justify-center' : 'h-10 text-base px-6 py-2',
        lg: props.shape === 'square' ? 'w-12 h-12 flex items-center justify-center' : 'h-12 text-lg px-8 py-2.5'
    }

    const variantClasses = {
        primary: 'bg-blue-600 text-white hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600',
        secondary: 'bg-slate-100 dark:bg-slate-700 hover:bg-slate-200 dark:hover:bg-slate-600 text-slate-500 dark:text-slate-300'
    }

    return [
        baseClasses,
        sizeClasses[props.size],
        variantClasses[props.variant],
        props.class
    ]
})

// Compute icon size based on button size
const iconSize = computed(() => {
    const sizes = {
        sm: 16,
        md: 20,
        lg: 24
    }
    return sizes[props.size]
})
</script>

<template>
    <button :type="type" :disabled="disabled" :class="buttonClasses">
        <!-- Icon only -->
        <Icon v-if="icon && !$slots.default" :name="icon" :size="iconSize" />

        <!-- Icon with text -->
        <template v-else-if="icon && $slots.default">
            <div class="flex items-center gap-2">
                <Icon v-if="iconPosition === 'left'" :name="icon" :size="iconSize" />
                <slot />
                <Icon v-if="iconPosition === 'right'" :name="icon" :size="iconSize" />
            </div>
        </template>

        <!-- Text only -->
        <slot v-else />
    </button>
</template>