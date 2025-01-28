<script lang="ts" setup>

</script>

<template>
    <div class="h-full w-full overflow-y-auto">
        <div class="max-w-7xl h-full w-full mx-auto px-4 md:px-1 py-4 font-semibold flex flex-col gap-4">
            <div class="flex flex-col lg:flex-row justify-between items-center gap-4">
                <div class="flex items-center gap-4">
                    <img src="https://picsum.photos/96" alt="Profile Picture"
                        class="w-16 h-16 rounded-full border border-gray-300 dark:border-gray-600">
                    <div class="badge p-2">
                        <span class="label opacity-75">Name:</span><br>
                        <div class="text-xl font-bold">Feierstein Chad</div>
                    </div>
                </div>
                <div class="flex-1 flex flex-col sm:flex-row items-center gap-2">
                    <div class="badge text-center sm:text-left p-2">
                        <span class="label opacity-75">Nationality:</span><br>Luxembourgish
                    </div>
                    <div class="badge text-center sm:text-left p-2">
                        <span class="label opacity-75">Residence:</span><br>Rumelange
                    </div>
                    <div class="badge text-center sm:text-left p-2">
                        <span class="label opacity-75">Marital Status:</span><br>Single
                    </div>
                    <div class="badge text-center sm:text-left p-2">
                        <span class="label opacity-75">Age:</span><br>25 years
                    </div>
                </div>
            </div>

            <div class="flex flex-col md:flex-row gap-4">
                <div class="flex flex-col gap-4">
                    <div class="bg-white dark:bg-slate-700 rounded-lg p-4 flex flex-col gap-2">
                        <h2 class="font-bold opacity-75">Languages:</h2>
                        <ul class="list-none space-y-2">
                            <li class="flex items-center gap-2">
                                <img src="/flags/4x3/lu.svg" alt="Luxembourgish Flag" class="w-6 rounded-[4px]">
                                <span>Luxembourgish</span>
                            </li>
                            <li class="flex items-center gap-2">
                                <img src="/flags/4x3/de.svg" alt="German Flag" class="w-6 rounded-[4px]">
                                <span>German</span>
                            </li>
                            <li class="flex items-center gap-2">
                                <img src="/flags/4x3/gb.svg" alt="English Flag" class="w-6 rounded-[4px]">
                                <span>English</span>
                            </li>
                            <li class="flex items-center gap-2">
                                <img src="/flags/4x3/fr.svg" alt="French Flag" class="w-6 rounded-[4px]">
                                <span>French</span>
                            </li>
                        </ul>
                    </div>

                    <div class="bg-white dark:bg-slate-700 rounded-lg p-4 flex flex-col gap-2">
                        <h2 class="font-bold opacity-75">Driver's License:</h2>
                        <ul class="list-none space-y-2">
                            <li class="flex items-center gap-2">
                                <span>Standard car license<br>Category B</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div class="flex-1 flex flex-col lg:flex-row gap-4">
                    <div
                        class="flex-1 flex flex-col lg:flex-row flex-wrap gap-4 p-4 bg-white dark:bg-slate-700 rounded-lg ">
                        <div class="flex flex-col gap-2 lg:w-[calc(50%-0.5rem)]">
                            <h2 class="font-bold opacity-75">Über mich</h2>
                            <p>Hallo, mein Name ist Chad Feierstein und ich stamme aus dem wunderschönen Luxemburg. Ich
                                lebe
                                aktuell in Rumelange und habe mich der Welt der Technologie verschrieben. Schon früh
                                faszinierte
                                mich die Möglichkeit, komplexe Probleme mit kreativen digitalen Lösungen zu lösen. Diese
                                Begeisterung treibt mich an, ständig Neues zu lernen und mich weiterzuentwickeln.</p>
                        </div>

                        <div class="flex flex-col gap-2 lg:w-[calc(50%-0.5rem)]">
                            <h3 class="font-bold opacity-75">Mein Werdegang</h3>
                            <p>Mit einem Abschluss im Bereich Cloud Computing (Brevet de Technicien Supérieur) und einer
                                fundierten Ausbildung als IT-Techniker habe ich eine solide Basis in der
                                Informationstechnologie
                                geschaffen. Meine Ausbildung sowie meine Praktika und Berufserfahrung haben mir
                                wertvolle
                                Einblicke in Themen wie Netzwerktechnik, IT-Sicherheit, Virtualisierung und
                                Webentwicklung
                                gegeben.</p>
                        </div>

                        <div class="flex flex-col gap-2 lg:w-[calc(50%-0.5rem)]">
                            <h3 class="font-bold opacity-75">Leidenschaft für Technologie</h3>
                            <p>Besonders spannend finde ich die Automatisierung von Prozessen, die Absicherung von
                                IT-Systemen
                                und die Arbeit mit moderner Serververwaltung. Ich freue mich darauf, komplexe Projekte
                                umzusetzen, sei es durch die Konfiguration von Netzwerken, das Programmieren von
                                Webanwendungen
                                oder die Entwicklung effizienter Lösungen in der Serververwaltung.</p>
                        </div>

                        <div class="flex flex-col gap-2 lg:w-[calc(50%-0.5rem)]">
                            <h3 class="font-bold opacity-75">Hobbys und Interessen</h3>
                            <p>Neben meiner Arbeit und Weiterbildung verbringe ich gerne Zeit mit meiner Familie und
                                Freunden
                                sowie meinen drei Hunden - Grimmel, Fusel und Popeye. In meiner Freizeit unternehme ich
                                gerne
                                etwas mit Freunden und bin ein Gelegenheitszocker, der ab und zu auch ein paar
                                Videospiele
                                spielt.</p>
                        </div>
                    </div>
                </div>
            </div>

            <div class="flex flex-col md:flex-row gap-4">
                <div class="w-full h-full flex flex-row justify-between items-center gap-4">
                    <div class="flex-1 flex flex-col gap-4 p-4 bg-white dark:bg-slate-700 rounded-lg ">
                        <div>
                            <h3 class="font-bold opacity-75">Zeitstrahl</h3>
                        </div>

                        <!-- Timeline -->
                        <div class="mx-auto">
                            <div class="flex gap-x-3">
                                <div class="text-end">
                                    <span class="text-xs opacity-75">2024</span>
                                </div>
                                <div
                                    class="relative last:after:hidden after:absolute after:top-7 after:bottom-0 after:start-3.5 after:w-px after:-translate-x-[0.5px] after:bg-slate-800 dark:after:bg-slate-200">
                                    <div class="relative z-10 size-7 flex justify-center items-center">
                                        <div class="size-2 rounded-full bg-slate-800 dark:bg-slate-200 animate-blink">
                                        </div>
                                    </div>
                                </div>
                                <div class="pt-0.5 pb-8">
                                    <h3 class="flex gap-x-1.5 font-semibold">Web-Entwickler bei Rotyre SARL</h3>
                                    <p class="mt-1 text-sm opacity-75">Verantwortlich für
                                        die
                                        Wartung und Weiterentwicklung der Webseite <em>mullerpneus.lu</em>.</p>
                                </div>
                            </div>

                            <div class="flex flex-1 gap-x-3">
                                <div class="text-end">
                                    <span class="text-xs opacity-75">2023</span>
                                </div>
                                <div
                                    class="relative last:after:hidden after:absolute after:top-7 after:bottom-0 after:start-3.5 after:w-px after:-translate-x-[0.5px] after:bg-slate-800 dark:after:bg-slate-200">
                                    <div class="relative z-10 size-7 flex justify-center items-center">
                                        <div class="size-2 rounded-full bg-slate-800 dark:bg-slate-200"></div>
                                    </div>
                                </div>
                                <div class="pt-0.5 pb-8">
                                    <h3 class="flex gap-x-1.5 font-semibold">Zertifizierung: Allgemeine Eignungsprüfung
                                    </h3>
                                    <p class="mt-1 text-sm opacity-75">Erfolgreicher
                                        Abschluss
                                        der staatlichen Prüfung für den öffentlichen Sektor.</p>
                                </div>
                            </div>

                            <div class="flex flex-1 gap-x-3">
                                <div class="text-end">
                                    <span class="text-xs opacity-75">2021</span>
                                </div>
                                <div
                                    class="relative last:after:hidden after:absolute after:top-7 after:bottom-0 after:start-3.5 after:w-px after:-translate-x-[0.5px] after:bg-slate-800 dark:after:bg-slate-200">
                                    <div class="relative z-10 size-7 flex justify-center items-center">
                                        <div class="size-2 rounded-full bg-slate-800 dark:bg-slate-200"></div>
                                    </div>
                                </div>
                                <div class="pt-0.5 pb-8">
                                    <h3 class="flex gap-x-1.5 font-semibold">Diplom in
                                        Cloud Computing (BTS)</h3>
                                    <p class="mt-1 text-sm opacity-75">Höherer technischer
                                        Abschluss im Bereich Cloud Computing am Lycée Guillaume Kroll.</p>
                                </div>
                            </div>

                            <div class="flex flex-1 gap-x-3">
                                <div class="text-end">
                                    <span class="text-xs opacity-75">2020</span>
                                </div>
                                <div
                                    class="relative last:after:hidden after:absolute after:top-7 after:bottom-0 after:start-3.5 after:w-px after:-translate-x-[0.5px] after:bg-slate-800 dark:after:bg-slate-200">
                                    <div class="relative z-10 size-7 flex justify-center items-center">
                                        <div class="size-2 rounded-full bg-slate-800 dark:bg-slate-200"></div>
                                    </div>
                                </div>
                                <div class="pt-0.5 pb-8">
                                    <h3 class="flex gap-x-1.5 font-semibold">Ferienjob als IT-Techniker</h3>
                                    <p class="mt-1 text-sm opacity-75">Tätigkeit am Lycée
                                        Guillaume Kroll: Installation von MIXvoip-Telefonen, Netzwerkmanagement.</p>
                                </div>
                            </div>

                            <div class="flex flex-1 gap-x-3">
                                <div class="text-end">
                                    <span class="text-xs opacity-75">2019</span>
                                </div>
                                <div class="relative">
                                    <div class="relative z-10 size-7 flex justify-center items-center">
                                        <div class="size-2 rounded-full bg-slate-800 dark:bg-slate-200"></div>
                                    </div>
                                </div>
                                <div class="pt-0.5 pb-8">
                                    <h3 class="flex gap-x-1.5 font-semibold">Diplom als IT-Techniker</h3>
                                    <p class="mt-1 text-sm opacity-75">Abschluss am Lycée
                                        Guillaume Kroll in Esch-sur-Alzette mit der Bewertung "Gut".</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="flex flex-col md:flex-row gap-4">
                <div class="w-full h-full flex flex-row justify-between items-center gap-4">
                    <div class="flex-1 flex flex-col gap-4 p-4 bg-white dark:bg-slate-700 rounded-lg mb-4">
                        <div>
                            <h3 class="font-bold opacity-75">Besondere Erlebnisse</h3>
                        </div>

                        <div class="flex flex-row flex-wrap gap-4 justify-around text-center">
                            <div class="flex flex-col gap-2 justify-center items-center">
                                <span>Rundflug mit einem Helikoper</span>
                                <img src="/img/helicopter-scalled.png" alt="Profile Picture"
                                    class="w-[250px] h-[250px] rounded-lg border border-gray-300 dark:border-gray-600">
                            </div>

                            <div class="flex flex-col gap-2 justify-center items-center">
                                <span>Fallschirmsprung über Luxembourg</span>
                                <img src="/img/fallschirmsprung-scalled.png" alt="Profile Picture"
                                    class="w-[250px] h-[250px] rounded-lg border border-gray-300 dark:border-gray-600">
                            </div>

                            <div class="flex flex-col gap-2 justify-center items-center">
                                <span>Tomorrowland Belgium 2025</span>
                                <img src="/img/no_image_available.jpg" alt="Profile Picture"
                                    class="w-[250px] h-[250px] rounded-lg border border-gray-300 dark:border-gray-600">
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
