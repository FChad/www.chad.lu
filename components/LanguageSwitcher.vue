<script lang="ts" setup>
const { locale, locales } = useI18n();
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

const switchLanguage = (code: string) => {
    locale.value = code as 'en' | 'fr';
    isOpen.value = false;
};

// Handle click outside
const handleClickOutside = (event: MouseEvent) => {
    if (selectRef.value && !selectRef.value.contains(event.target as Node)) {
        isOpen.value = false;
    }
};

// Handle keyboard navigation
const handleKeydown = (e: KeyboardEvent) => {
    if (!isOpen.value && e.key === 'Enter') {
        isOpen.value = true;
        return;
    }
    
    if (isOpen.value) {
        const currentIndex = locales.findIndex(l => l.code === locale.value);
        
        switch (e.key) {
            case 'Escape':
                isOpen.value = false;
                break;
            case 'ArrowDown':
                e.preventDefault();
                const nextIndex = (currentIndex + 1) % locales.length;
                switchLanguage(locales[nextIndex].code);
                activeIndex.value = nextIndex;
                break;
            case 'ArrowUp':
                e.preventDefault();
                const prevIndex = currentIndex - 1 < 0 ? locales.length - 1 : currentIndex - 1;
                switchLanguage(locales[prevIndex].code);
                activeIndex.value = prevIndex;
                break;
            case 'Enter':
            case ' ':
                e.preventDefault();
                isOpen.value = false;
                break;
        }
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
    <div 
        ref="selectRef"
        class="relative w-fit h-10  flex items-center justify-center"
        @keydown="handleKeydown"
    >
            <!-- Select Button -->
            <button
                type="button"
                :aria-expanded="isOpen"
                aria-haspopup="listbox"
                :aria-label="'Select language. Current language is ' + languageMap[locale].name"
                class="lg:min-w-40 flex items-center h-8 gap-2 border border-slate-200 dark:border-slate-700 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent p-1 w-full h-fullsm:h-auto justify-center"
                @click="isOpen = !isOpen"
            >
                <Icon 
                    :name="`circle-flags:${locale}`" 
                    class="w-5 h-5 flex-shrink-0"
                />
                <span class="hidden sm:block flex-1 text-left">{{ languageMap[locale].name }}</span>
                <Icon 
                    name="heroicons:chevron-down-20-solid" 
                    class="  w-5 h-5 text-slate-400 transition-transform"
                    :class="{ 'rotate-180': isOpen }"
                />
            </button>

            <!-- Options Dropdown -->
            <Transition
                enter-active-class="transition duration-100 ease-out"
                enter-from-class="transform scale-95 opacity-0"
                enter-to-class="transform scale-100 opacity-100"
                leave-active-class="transition duration-75 ease-in"
                leave-from-class="transform scale-100 opacity-100"
                leave-to-class="transform scale-95 opacity-0"
            >
                <div
                    v-if="isOpen"
                    class="absolute flex flex-col gap-2 z-50 p-2 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-lg shadow-lg w-32 right-0 sm:right-auto sm:w-full top-full"
                    role="listbox"
                    :aria-activedescendant="locale"
                >
                    <button
                        v-for="(lang, index) in locales"
                        :key="lang.code"
                        :id="lang.code"
                        role="option"
                        :aria-selected="locale === lang.code"
                        @click="switchLanguage(lang.code)"
                        @mouseover="activeIndex = index"
                        class="flex w-full items-center gap-2 px-3 py-2 text-sm hover:bg-slate-50 dark:hover:bg-slate-800 rounded-md"
                        :class="{ 
                            'bg-slate-50 dark:bg-slate-800': locale === lang.code || activeIndex === index 
                        }"
                    >
                        <Icon 
                            :name="`circle-flags:${lang.code}`" 
                            class="w-5 h-5 flex-shrink-0"
                            size="20"
                        />
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