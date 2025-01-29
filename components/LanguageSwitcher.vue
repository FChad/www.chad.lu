<script lang="ts" setup>
const { locale, locales, setLocale } = useI18n();
const isOpen = ref(false);
const selectRef = ref<HTMLDivElement | null>(null);
const activeIndex = ref(0);

const languageMap = {
    en: {
        name: 'English',
        flag: '🇬🇧'
    },
    fr: {
        name: 'Français',
        flag: '🇫🇷'
    }
};

// Add type for supported languages
type LanguageCode = 'en' | 'fr';

const switchLanguage = async (code: LanguageCode) => {
    await setLocale(code);
    isOpen.value = false;
};

// Handle click outside
const handleClickOutside = (event: MouseEvent) => {
    if (selectRef.value && !selectRef.value.contains(event.target as Node)) {
        isOpen.value = false;
    }
};

// Enhanced keyboard navigation
const handleKeydown = (e: KeyboardEvent) => {
    if (!isOpen.value && e.key === 'Enter') {
        isOpen.value = true;
        return;
    }
    if (isOpen.value) {
        const currentIndex = (locales.value as Array<{ code: LanguageCode }>).findIndex((l: { code: LanguageCode }) => l.code === locale.value);

        switch (e.key) {
            case 'Escape':
                isOpen.value = false;
                break;
            case 'ArrowDown':
            case 'ArrowRight':
                e.preventDefault();
                const nextIndex = (currentIndex + 1) % locales.value.length;
                switchLanguage(locales.value[nextIndex].code as LanguageCode);
                activeIndex.value = nextIndex;
                break;
            case 'ArrowUp':
            case 'ArrowLeft':
                e.preventDefault();
                const prevIndex = currentIndex - 1 < 0 ? locales.value.length - 1 : currentIndex - 1;
                switchLanguage(locales.value[prevIndex].code as LanguageCode);
                activeIndex.value = prevIndex;
                break;
            case 'Home':
                e.preventDefault();
                switchLanguage(locales.value[0].code as LanguageCode);
                activeIndex.value = 0;
                break;
            case 'End':
                e.preventDefault();
                switchLanguage(locales.value[locales.value.length - 1].code as LanguageCode);
                activeIndex.value = locales.value.length - 1;
                break;
            case 'Enter':
            case ' ':
                e.preventDefault();
                isOpen.value = false;
                break;
        }
    }
};

// Close dropdown when focus moves away
const handleBlur = (event: FocusEvent) => {
    // Check if the new focused element is still within our component
    if (selectRef.value && !selectRef.value.contains(event.relatedTarget as Node)) {
        isOpen.value = false;
    }
};

onMounted(() => {
    document.addEventListener('click', handleClickOutside);
});

onUnmounted(() => {
    if (process.client) {
        document.removeEventListener('click', handleClickOutside);
    }
});
</script>

<template>
    <div ref="selectRef" class="relative w-fit h-10  flex items-center justify-center" @keydown="handleKeydown"
        @blur="handleBlur" tabindex="0">
        <!-- Select Button -->
        <button type="button" :aria-expanded="isOpen" aria-haspopup="listbox"
            :aria-label="'Select language. Current language is ' + languageMap[locale].name"
            class="flex items-center h-8 gap-2 bg-slate-100 dark:bg-slate-700 hover:bg-slate-200 dark:hover:bg-slate-600 text-slate-500 dark:text-slate-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent p-1 w-fit justify-center"
            @click="isOpen = !isOpen">
            <Icon :name="`circle-flags:${locale}`" class="w-5 h-5 flex-shrink-0" />
            <Icon name="heroicons:chevron-down-20-solid" class="w-5 h-5 text-slate-400 transition-transform"
                :class="{ 'rotate-180': isOpen }" />
        </button>

        <!-- Options Dropdown -->
        <Transition enter-active-class="transition duration-100 ease-out"
            enter-from-class="transform scale-95 opacity-0" enter-to-class="transform scale-100 opacity-100"
            leave-active-class="transition duration-75 ease-in" leave-from-class="transform scale-100 opacity-100"
            leave-to-class="transform scale-95 opacity-0">
            <div v-if="isOpen"
                class="absolute flex flex-col gap-2 z-50 p-2 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-lg shadow-lg w-40 right-0 top-full"
                role="listbox" :aria-activedescendant="locale">
                <button v-for="(lang, index) in locales" :key="lang.code" :id="lang.code" role="option"
                    :aria-selected="locale === lang.code" @click="switchLanguage(lang.code as LanguageCode)"
                    @mouseover="activeIndex = index"
                    class="flex w-full items-center gap-2 px-3 py-2 text-sm hover:bg-slate-50 dark:hover:bg-slate-800 rounded-md"
                    :class="{
                        'bg-slate-50 dark:bg-slate-800': locale === lang.code || activeIndex === index
                    }">
                    <Icon :name="`circle-flags:${lang.code}`" class="w-5 h-5 flex-shrink-0" size="20" />
                    <span>{{ languageMap[lang.code].name }}</span>
                </button>
            </div>
        </Transition>
    </div>
</template>

<style scoped>
.rotate-180 {
    transform: rotate(180deg);
}
</style>