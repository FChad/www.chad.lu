<script lang="ts" setup>
import { useLocalePath, useI18n } from '#imports'

const localePath = useLocalePath()
const { t } = useI18n()

const languages = [
    {
        name: t('languages.luxembourgish'),
        code: 'lu',
        level: t('about.languageLevels.native'),
        proficiency: 100
    },
    {
        name: t('languages.german'),
        code: 'de',
        level: t('about.languageLevels.advanced'),
        proficiency: 100
    },
    {
        name: t('languages.english'),
        code: 'gb',
        level: t('about.languageLevels.advanced'),
        proficiency: 80
    },
    {
        name: t('languages.french'),
        code: 'fr',
        level: t('about.languageLevels.intermediate'),
        proficiency: 40
    }
];

const timelineEvents = [
    {
        year: t('about.timeline.5.year'),
        title: t('about.timeline.5.title'),
        description: t('about.timeline.5.description'),
        isPresent: true
    },
    {
        year: t('about.timeline.4.year'),
        title: t('about.timeline.4.title'),
        description: t('about.timeline.4.description'),
        isPresent: false
    },
    {
        year: t('about.timeline.3.year'),
        title: t('about.timeline.3.title'),
        description: t('about.timeline.3.description'),
        isPresent: false
    },
    {
        year: t('about.timeline.2.year'),
        title: t('about.timeline.2.title'),
        description: t('about.timeline.2.description'),
        isPresent: false
    },
    {
        year: t('about.timeline.1.year'),
        title: t('about.timeline.1.title'),
        description: t('about.timeline.1.description'),
        isPresent: false
    }
];

const aboutSections = [
    {
        key: 'aboutMe',
        icon: 'mdi:account'
    },
    {
        key: 'career',
        icon: 'mdi:school'
    },
    {
        key: 'passion',
        icon: 'mdi:laptop'
    },
    {
        key: 'hobbies',
        icon: 'mdi:heart'
    }
];
</script>

<template>
    <div class="h-full bg-gray-50 dark:bg-slate-900 overflow-y-auto">
        <div class="max-w-7xl mx-auto p-4 flex flex-col gap-3">
            <!-- Hero Section with Profile -->
            <div class="max-w-7xl mx-auto min-h-screen lg:h-screen flex flex-col gap-3">
                <!-- Profile Header -->
                <div
                    class="bg-white dark:bg-slate-800 rounded-xl px-6 py-4 shadow-sm border border-gray-100 dark:border-slate-700 lg:flex-shrink-0">
                    <div class="flex flex-col lg:flex-row gap-6 items-center">
                        <div class="relative">
                            <img src="/img/about/user-icon.png" alt="Profile Picture"
                                class="w-24 h-24 rounded-full border-4 border-blue-500 dark:border-blue-400">
                        </div>

                        <div class="flex-1 text-center lg:text-left">
                            <h1 class="text-2xl font-bold mb-2">Feierstein Chad</h1>
                            <div class="flex flex-wrap justify-center lg:justify-start gap-3">
                                <span
                                    class="px-3 py-1 bg-blue-100 dark:bg-blue-900 rounded-full text-sm flex items-center gap-1">
                                    <Icon name="mdi:earth" class="w-4 h-4" />
                                    {{ $t('about.profile.nationality') }}
                                </span>
                                <span
                                    class="px-3 py-1 bg-blue-100 dark:bg-blue-900 rounded-full text-sm flex items-center gap-1">
                                    <Icon name="mdi:map-marker" class="w-4 h-4" />
                                    {{ $t('about.profile.location') }}
                                </span>
                                <span
                                    class="px-3 py-1 bg-blue-100 dark:bg-blue-900 rounded-full text-sm flex items-center gap-1">
                                    <Icon name="mdi:heart" class="w-4 h-4" />
                                    {{ $t('about.profile.status') }}
                                </span>
                                <span
                                    class="px-3 py-1 bg-blue-100 dark:bg-blue-900 rounded-full text-sm flex items-center gap-1">
                                    <Icon name="mdi:cake-variant" class="w-4 h-4" />
                                    {{ $t('about.profile.age') }}
                                </span>
                            </div>
                        </div>

                        <div class="lg:ml-auto">
                            <NuxtLink :to="localePath('/contact')">
                                <BaseButton>
                                    <span class="flex items-center gap-2">
                                        <Icon name="mdi:message" class="w-5 h-5" />
                                        {{ $t('about.sendMessage') }}
                                    </span>
                                </BaseButton>
                            </NuxtLink>
                        </div>
                    </div>
                </div>

                <!-- Main Content Grid -->
                <div class="grid grid-cols-1 lg:grid-cols-12 gap-3 lg:flex-1">
                    <!-- Sidebar -->
                    <div class="lg:col-span-3 lg:overflow-y-auto flex flex-col gap-3">
                        <!-- Languages Card -->
                        <div
                            class="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-sm border border-gray-100 dark:border-slate-700">
                            <div class="flex items-center gap-3">
                                <div
                                    class="p-2 h-8 w-8 bg-blue-100 dark:bg-blue-900/50 rounded-lg flex items-center justify-center">
                                    <Icon name="mdi:translate" class="w-5 h-5 text-blue-500 dark:text-blue-400" />
                                </div>
                                <h2 class="text-xl font-bold">{{ $t('about.languages') }}</h2>
                            </div>
                            <div class="space-y-4 mt-4">
                                <div v-for="language in languages" :key="language.name"
                                    class="space-y-2 p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-slate-700 transition-colors">
                                    <div class="flex items-center gap-4">
                                        <div class="flex items-center gap-2 min-w-0 flex-1">
                                            <Icon :name="`circle-flags:${language.code}`"
                                                class="w-6 h-6 flex-shrink-0" />
                                            <span class="font-medium truncate">{{ language.name }}</span>
                                        </div>
                                        <span class="text-sm text-blue-500 dark:text-blue-400 flex-shrink-0">{{
                                            language.level }}</span>
                                    </div>
                                    <div class="w-full bg-gray-200 dark:bg-slate-600 rounded-full h-2">
                                        <div class="bg-blue-500 dark:bg-blue-400 h-2 rounded-full transition-all duration-500"
                                            :style="{ width: `${language.proficiency}%` }"></div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <!-- Driver's License Card -->
                        <div
                            class="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-sm border border-gray-100 dark:border-slate-700">
                            <div class="flex items-center gap-3">
                                <div
                                    class="p-2 h-8 w-8 bg-blue-100 dark:bg-blue-900/50 rounded-lg flex items-center justify-center">
                                    <Icon name="mdi:license" class="w-5 h-5 text-blue-500 dark:text-blue-400" />
                                </div>
                                <h2 class="text-xl font-bold">{{ $t('about.driversLicense') }}</h2>
                            </div>
                            <div class="space-y-3 mt-4">
                                <div class="flex items-center gap-4 p-3 rounded-lg bg-gray-50 dark:bg-slate-700/50">
                                    <div
                                        class="w-8 h-8 bg-blue-100 dark:bg-blue-900/50 rounded-full flex items-center justify-center flex-shrink-0">
                                        <Icon name="mdi:car" class="w-4 h-4 text-blue-500 dark:text-blue-400" />
                                    </div>
                                    <div class="min-w-0 flex-1">
                                        <div class="text-sm font-medium truncate">{{ $t('about.license.category') }}
                                        </div>
                                    </div>
                                    <div class="flex-shrink-0">
                                        <span
                                            class="whitespace-nowrap px-2 py-1 bg-blue-100 dark:bg-blue-900/50 text-blue-500 dark:text-blue-400 rounded-full text-xs">
                                            {{ $t('about.license.since') }}
                                        </span>
                                    </div>
                                </div>
                                <div class="text-sm text-gray-600 dark:text-gray-300 px-2">
                                    <div class="flex items-center gap-1">
                                        <Icon name="mdi:check" class="w-4 h-4 text-green-500" />
                                        <span>{{ $t('about.manualTransmission') }}</span>
                                    </div>
                                    <div class="flex items-center gap-1">
                                        <Icon name="mdi:check" class="w-4 h-4 text-green-500" />
                                        <span>{{ $t('about.cleanDrivingRecord') }}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Main Content -->
                    <div class="lg:col-span-9 lg:overflow-y-auto pb-8 flex flex-col gap-3">
                        <!-- About Me Sections -->
                        <div
                            class="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-sm border border-gray-100 dark:border-slate-700">
                            <div class="grid md:grid-cols-2 gap-6">
                                <div v-for="section in aboutSections" :key="section.key" class="space-y-4">
                                    <div class="flex items-center gap-3">
                                        <div
                                            class="p-2 h-8 w-8 bg-blue-100 dark:bg-blue-900/50 rounded-lg flex items-center justify-center">
                                            <Icon :name="section.icon" class="text-blue-500 dark:text-blue-400" />
                                        </div>
                                        <h2 class="text-xl font-bold">{{ $t(`about.sections.${section.key}.title`) }}
                                        </h2>
                                    </div>
                                    <p class="text-gray-600 dark:text-gray-300 leading-relaxed">
                                        {{ $t(`about.sections.${section.key}.content`) }}
                                    </p>
                                </div>
                            </div>
                        </div>

                        <!-- Timeline -->
                        <div
                            class="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-sm border border-gray-100 dark:border-slate-700">
                            <div class="flex items-center gap-3 mb-6">
                                <div
                                    class="p-2 h-8 w-8 bg-blue-100 dark:bg-blue-900/50 rounded-lg flex items-center justify-center">
                                    <Icon name="mdi:timeline" class="w-5 h-5 text-blue-500 dark:text-blue-400" />
                                </div>
                                <h2 class="text-xl font-bold">{{ $t('about.professionalJourney') }}</h2>
                            </div>
                            <div class="relative">
                                <!-- Timeline Line -->
                                <div class="absolute top-8 bottom-0 w-[3px] bg-blue-200 dark:bg-blue-900 lg:left-1/2">
                                </div>

                                <div class="space-y-6">
                                    <template v-for="event in timelineEvents" :key="event.year">
                                        <div
                                            class="relative flex gap-4 lg:grid lg:grid-cols-[1fr_0_1fr] lg:items-start lg:gap-0">
                                            <!-- Dot -->
                                            <div
                                                class="absolute -translate-x-[6px] top-5 lg:col-start-2 lg:z-10 flex items-center justify-center">
                                                <div class="w-4 h-4 rounded-full border-4 border-white dark:border-slate-800"
                                                    :class="event.isPresent ? 'bg-green-500' : 'bg-blue-500'">
                                                </div>
                                            </div>

                                            <!-- Content -->
                                            <div class="ml-8 lg:ml-0" :class="{
                                                'lg:col-start-1 lg:text-right lg:pr-8': timelineEvents.indexOf(event) % 2 === 0,
                                                'lg:col-start-3 lg:pl-8': timelineEvents.indexOf(event) % 2 === 1
                                            }">
                                                <div class="backdrop-blur-sm p-4 rounded-lg">
                                                    <span class="font-bold"
                                                        :class="event.isPresent ? 'text-green-500' : 'text-blue-500'">{{
                                                            event.year }}</span>
                                                    <h3 class="font-bold mt-1">{{ event.title }}</h3>
                                                    <p class="text-gray-600 dark:text-gray-300 mt-1">{{
                                                        event.description }}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </template>
                                </div>
                            </div>
                        </div>

                        <!-- Experiences Gallery -->
                        <div
                            class="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-sm border border-gray-100 dark:border-slate-700">
                            <div class="flex items-center gap-3 mb-6">
                                <div
                                    class="p-2 h-8 w-8 bg-blue-100 dark:bg-blue-900/50 rounded-lg flex items-center justify-center">
                                    <Icon name="mdi:image-multiple" class="w-5 h-5 text-blue-500 dark:text-blue-400" />
                                </div>
                                <h2 class="text-xl font-bold">{{ $t('about.specialExperiences') }}</h2>
                            </div>
                            <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
                                <div class="group relative overflow-hidden rounded-lg">
                                    <img src="/img/about/helicopter-scalled.png" alt="Helicopter Ride"
                                        class="w-full h-64 object-cover transition transform group-hover:scale-105">
                                    <div
                                        class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                                        <p class="text-white p-4">{{ $t('about.gallery.helicopter') }}</p>
                                    </div>
                                </div>
                                <div class="group relative overflow-hidden rounded-lg">
                                    <img src="/img/about/fallschirmsprung-scalled.png" alt="Parachute Jump"
                                        class="w-full h-64 object-cover transition transform group-hover:scale-105">
                                    <div
                                        class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                                        <p class="text-white p-4">{{ $t('about.gallery.skydiving') }}</p>
                                    </div>
                                </div>
                                <div class="group relative overflow-hidden rounded-lg">
                                    <img src="/img/no_image_available.jpg" alt="Tomorrowland Belgium"
                                        class="w-full h-64 object-cover transition transform group-hover:scale-105">
                                    <div
                                        class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                                        <p class="text-white p-4">{{ $t('about.gallery.tomorrowland') }}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="css" scoped>
@keyframes blink {

    0%,
    100% {
        opacity: 1;
        background-color: green;
    }

    50% {
        opacity: 0.25;
        background-color: green;
    }
}

.animate-blink {
    animation: blink 2s infinite;
}
</style>
