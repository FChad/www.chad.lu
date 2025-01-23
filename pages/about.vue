<script lang="ts" setup>

</script>

<template>
    <div class="h-full w-full z-10 overflow-y-auto">
        <div class="max-w-7xl h-full w-full mx-auto p-4 font-semibold flex flex-col gap-4">
            <div class="flex flex-col lg:flex-row justify-between items-center gap-4">
                <div class="flex items-center gap-4">
                    <img src="https://picsum.photos/96" alt="Profile Picture"
                        class="w-16 h-16 rounded-full border border-gray-300 dark:border-gray-600">
                    <div class="badge p-2">
                        <span class="label opacity-75">Name:</span><br>
                        <div class="text-xl font-bold">Feierstein Chad</div>
                    </div>
                </div>
                <div class="flex-1 flex flex-row items-center gap-2">
                    <div class="badge bg-white dark:bg-slate-700 p-2 rounded-lg">
                        <span class="label font-bold  opacity-75">Nationality:</span><br>Luxembourgish
                    </div>
                    <div class="badge bg-white dark:bg-slate-700 p-2 rounded-lg">
                        <span class="label font-bold  opacity-75">Residence:</span><br>Rumelange
                    </div>
                    <div class="badge bg-white dark:bg-slate-700 p-2 rounded-lg">
                        <span class="label font-bold  opacity-75">Marital Status:</span><br>Single
                    </div>
                    <div class="badge bg-white dark:bg-slate-700 p-2 rounded-lg">
                        <span class="label font-bold  opacity-75">Age:</span><br>25 years
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
                <div class="w-full h-full flex flex-col lg:flex-row justify-between items-center gap-4">
                    <div
                        class="flex-1 flex flex-col lg:flex-row flex-wrap gap-4 p-4 bg-white dark:bg-slate-700 rounded-lg ">
                        Zeitstrahl
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="css" scoped></style>
