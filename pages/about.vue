<script lang="ts" setup>
const languages = [
    {
        name: 'Luxembourgish',
        code: 'lu',
        level: 'Native',
        proficiency: 100
    },
    {
        name: 'German',
        code: 'de',
        level: 'Native',
        proficiency: 100
    },
    {
        name: 'English',
        code: 'gb',
        level: 'Advanced',
        proficiency: 80
    },
    {
        name: 'French',
        code: 'fr',
        level: 'Intermediate',
        proficiency: 40
    }
];

const aboutSections = [
    {
        title: 'Über mich',
        content: 'Hallo, mein Name ist Chad Feierstein und ich stamme aus dem wunderschönen Luxemburg. Ich lebe aktuell in Rumelange und habe mich der Welt der Technologie verschrieben. Schon früh faszinierte mich die Möglichkeit, komplexe Probleme mit kreativen digitalen Lösungen zu lösen. Diese Begeisterung treibt mich an, ständig Neues zu lernen und mich weiterzuentwickeln.'
    },
    {
        title: 'Mein Werdegang',
        content: 'Mit einem Abschluss im Bereich Cloud Computing (Brevet de Technicien Supérieur) und einer fundierten Ausbildung als IT-Techniker habe ich eine solide Basis in der Informationstechnologie geschaffen. Meine Ausbildung sowie meine Praktika und Berufserfahrung haben mir wertvolle Einblicke in Themen wie Netzwerktechnik, IT-Sicherheit, Virtualisierung und Webentwicklung gegeben.'
    },
    {
        title: 'Leidenschaft für Technologie',
        content: 'Besonders spannend finde ich die Automatisierung von Prozessen, die Absicherung von IT-Systemen und die Arbeit mit moderner Serververwaltung. Ich freue mich darauf, komplexe Projekte umzusetzen, sei es durch die Konfiguration von Netzwerken, das Programmieren von Webanwendungen oder die Entwicklung effizienter Lösungen in der Serververwaltung.'
    },
    {
        title: 'Hobbys und Interessen',
        content: 'Neben meiner Arbeit und Weiterbildung verbringe ich gerne Zeit mit meiner Familie und Freunden sowie meinen drei Hunden - Grimmel, Fusel und Popeye. In meiner Freizeit unternehme ich gerne etwas mit Freunden und bin ein Gelegenheitszocker, der ab und zu auch ein paar Videospiele spielt.'
    }
];

const timelineEvents = [
    {
        year: '2024',
        title: 'Web-Entwickler bei Rotyre SARL',
        description: 'Verantwortlich für die Wartung und Weiterentwicklung der Webseite mullerpneus.lu.',
        position: 'left'
    },
    {
        year: '2023',
        title: 'Zertifizierung: Allgemeine Eignungsprüfung',
        description: 'Erfolgreicher Abschluss der staatlichen Prüfung für den öffentlichen Sektor.',
        position: 'right'
    },
    {
        year: '2021',
        title: 'Diplom in Cloud Computing (BTS)',
        description: 'Höherer technischer Abschluss im Bereich Cloud Computing am Lycée Guillaume Kroll.',
        position: 'left'
    },
    {
        year: '2020',
        title: 'Ferienjob als IT-Techniker',
        description: 'Tätigkeit am Lycée Guillaume Kroll: Installation von MIXvoip-Telefonen, Netzwerkmanagement.',
        position: 'right'
    },
    {
        year: '2019',
        title: 'Diplom als IT-Techniker',
        description: 'Abschluss am Lycée Guillaume Kroll in Esch-sur-Alzette mit der Bewertung "Gut".',
        position: 'left'
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
                            <img src="https://picsum.photos/96" alt="Profile Picture"
                                class="w-24 h-24 rounded-full border-4 border-blue-500 dark:border-blue-400">
                        </div>

                        <div class="flex-1 text-center lg:text-left">
                            <h1 class="text-2xl font-bold mb-2">Feierstein Chad</h1>
                            <div class="flex flex-wrap justify-center lg:justify-start gap-3">
                                <span class="px-3 py-1 bg-blue-100 dark:bg-blue-900 rounded-full text-sm flex items-center gap-1">
                                    <Icon name="mdi:earth" class="w-4 h-4"/>
                                    Luxembourgish
                                </span>
                                <span class="px-3 py-1 bg-blue-100 dark:bg-blue-900 rounded-full text-sm flex items-center gap-1">
                                    <Icon name="mdi:map-marker" class="w-4 h-4"/>
                                    Rumelange
                                </span>
                                <span class="px-3 py-1 bg-blue-100 dark:bg-blue-900 rounded-full text-sm flex items-center gap-1">
                                    <Icon name="mdi:heart" class="w-4 h-4"/>
                                    Single
                                </span>
                                <span class="px-3 py-1 bg-blue-100 dark:bg-blue-900 rounded-full text-sm flex items-center gap-1">
                                    <Icon name="mdi:cake-variant" class="w-4 h-4"/>
                                    25 years
                                </span>
                            </div>
                        </div>

                        <div class="lg:ml-auto">
                            <NuxtLink to="/contact">
                                <BaseButton>
                                    <span class="flex items-center gap-2">
                                        <Icon name="mdi:message" class="w-5 h-5" />
                                        Send Message
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
                            <h2 class="text-xl font-bold mb-4">Languages</h2>
                            <div class="space-y-4">
                                <div v-for="language in languages" :key="language.name"
                                    class="space-y-2 p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-slate-700 transition-colors">
                                    <div class="flex items-center gap-4">
                                        <div class="flex items-center gap-2 min-w-0 flex-1">
                                            <Icon :name="`circle-flags:${language.code}`" class="w-6 h-6 flex-shrink-0"/>
                                            <span class="font-medium truncate">{{ language.name }}</span>
                                        </div>
                                        <span class="text-sm text-blue-500 dark:text-blue-400 flex-shrink-0">{{ language.level }}</span>
                                    </div>
                                    <div class="w-full bg-gray-200 dark:bg-slate-600 rounded-full h-2">
                                        <div class="bg-blue-500 dark:bg-blue-400 h-2 rounded-full transition-all duration-500"
                                            :style="{ width: `${language.proficiency}%` }"></div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <!-- Driver's License Card -->
                        <div class="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-sm border border-gray-100 dark:border-slate-700">
                            <h2 class="text-xl font-bold mb-4">Driver's License</h2>
                            <div class="space-y-3">
                                <div class="flex items-center gap-4 p-3 rounded-lg bg-gray-50 dark:bg-slate-700/50">
                                    <div class="w-10 h-10 bg-blue-100 dark:bg-blue-900/50 rounded-full flex items-center justify-center flex-shrink-0">
                                        <Icon name="mdi:car" class="w-5 h-5 text-blue-500 dark:text-blue-400"/>
                                    </div>
                                    <div class="min-w-0 flex-1">
                                        <div class="font-medium truncate">Category B</div>
                                    </div>
                                    <div class="flex-shrink-0">
                                        <span class="whitespace-nowrap px-2 py-1 bg-blue-100 dark:bg-blue-900/50 text-blue-500 dark:text-blue-400 rounded-full text-xs">
                                            Since 2023
                                        </span>
                                    </div>
                                </div>
                                <div class="text-sm text-gray-600 dark:text-gray-300 px-2">
                                    <div class="flex items-center gap-1">
                                        <Icon name="mdi:check" class="w-4 h-4 text-green-500"/> 
                                        <span>Manual transmission</span>
                                    </div>
                                    <div class="flex items-center gap-1">
                                        <Icon name="mdi:check" class="w-4 h-4 text-green-500"/> 
                                        <span>Clean driving record</span>
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
                                <div v-for="section in aboutSections" :key="section.title" class="space-y-4">
                                    <h2 class="text-xl font-bold">{{ section.title }}</h2>
                                    <p class="text-gray-600 dark:text-gray-300 leading-relaxed">{{ section.content }}</p>
                                </div>
                            </div>
                        </div>

                        <!-- Timeline -->
                        <div
                            class="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-sm border border-gray-100 dark:border-slate-700">
                            <h2 class="text-xl font-bold mb-6">Professional Journey</h2>
                            <div class="relative">
                                <!-- Timeline Line -->
                                <div class="absolute left-[17px] top-0 bottom-0 w-[3px] bg-blue-200 dark:bg-blue-900 lg:left-1/2 lg:-translate-x-[1.5px]"></div>

                                <div class="space-y-6">
                                    <template v-for="event in timelineEvents" :key="event.year">
                                        <!-- Mobile: Single column, Desktop: Two columns -->
                                        <div class="relative flex gap-4 lg:grid lg:grid-cols-[1fr_0_1fr] lg:items-start lg:gap-0">
                                            <!-- Dot -->
                                            <div class="absolute left-[14px] -translate-x-[2px] top-2 lg:static lg:col-start-2 lg:w-0 lg:mx-auto lg:-translate-x-[8px] lg:z-10">
                                                <div class="w-4 h-4 rounded-full bg-blue-500 border-4 border-white dark:border-slate-800"></div>
                                            </div>

                                            <!-- Content -->
                                            <div class="ml-12 lg:ml-0" :class="{
                                                'lg:col-start-1 lg:text-right lg:pr-8': event.position === 'left',
                                                'lg:col-start-3 lg:pl-8': event.position === 'right'
                                            }">
                                                <div class="backdrop-blur-sm p-4 rounded-lg">
                                                    <span class="font-bold text-blue-500">{{ event.year }}</span>
                                                    <h3 class="font-bold mt-1">{{ event.title }}</h3>
                                                    <p class="text-gray-600 dark:text-gray-300 mt-1">{{ event.description }}</p>
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
                            <h2 class="text-xl font-bold mb-6">Special Experiences</h2>
                            <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
                                <div class="group relative overflow-hidden rounded-lg">
                                    <img src="/img/helicopter-scalled.png" alt="Helicopter Ride"
                                        class="w-full h-64 object-cover transition transform group-hover:scale-105">
                                    <div
                                        class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                                        <p class="text-white p-4">Rundflug mit einem Helikoper</p>
                                    </div>
                                </div>
                                <div class="group relative overflow-hidden rounded-lg">
                                    <img src="/img/fallschirmsprung-scalled.png" alt="Parachute Jump"
                                        class="w-full h-64 object-cover transition transform group-hover:scale-105">
                                    <div
                                        class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                                        <p class="text-white p-4">Fallschirmsprung über Luxembourg</p>
                                    </div>
                                </div>
                                <div class="group relative overflow-hidden rounded-lg">
                                    <img src="/img/no_image_available.jpg" alt="Tomorrowland Belgium"
                                        class="w-full h-64 object-cover transition transform group-hover:scale-105">
                                    <div
                                        class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                                        <p class="text-white p-4">Tomorrowland Belgium 2025</p>
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
