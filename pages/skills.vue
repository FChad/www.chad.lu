<script lang="ts" setup>
const certifications = {
    title: 'certifications.title',
    icon: 'mdi:certificate',
    items: [
        {
            year: '2023',
            link: 'https://govjobs.public.lu/fr/examen-concours/administration/inscription.html',
            title: 'certifications.items.aptitudeTest.title',
            details: 'certifications.items.aptitudeTest.description'
        },
        {
            year: '2021',
            link: 'https://learningnetwork.cisco.com/s/cbrops-exam-topics?ccid=cyberopsassociate',
            title: 'certifications.items.cyberOps.title',
            details: 'certifications.items.cyberOps.description'
        },
        {
            year: '2021',
            link: 'https://www.netacad.com/courses/networking/ccna-enterprise-networking-security-automation',
            title: 'certifications.items.ccna3.title',
            details: 'certifications.items.ccna3.description'
        },
        {
            year: '2020',
            link: 'https://www.netacad.com/courses/networking/ccna-switching-routing-wireless-essentials',
            title: 'certifications.items.ccna2.title',
            details: 'certifications.items.ccna2.description'
        },
        {
            year: '2020',
            link: 'https://www.netacad.com/courses/networking/ccna-introduction-networks',
            title: 'certifications.items.ccna1.title',
            details: 'certifications.items.ccna1.description'
        },
        {
            year: '2020',
            link: 'https://learn.microsoft.com/en-us/certifications/microsoft-office-specialist-master-certification-2016/',
            title: 'certifications.items.mos.title',
            details: 'certifications.items.mos.description'
        }
    ]
};

const skills = [
    {
        title: 'skills.programming',
        items: [
            { name: 'Python', img: '/img/skills/programing/python.svg' },
            { name: 'Hypertext Markup Language (HTML)', img: '/img/skills/programing/html-5.svg' },
            { name: 'Cascading Style Sheets (CSS)', img: '/img/skills/programing/css-3.svg' },
            { name: 'JavaScript (+ jQuery)', img: '/img/skills/programing/javascript.svg' },
            { name: 'PHP', img: '/img/skills/programing/php.svg' },
            { name: 'Structured Query Language (SQL)', img: '/img/skills/programing/sql.svg' },
            { name: 'Windows PowerShell', img: '/img/skills/programing/powershell.svg' },
            { name: 'Linux Bash', img: '/img/skills/programing/bash.svg' },
        ]
    },
    {
        title: 'skills.operatingSystems',
        items: [
            { name: 'Windows 7', img: '/img/skills/os/windows-7.svg' },
            { name: 'Windows 8', img: '/img/skills/os/windows-8.svg' },
            { name: 'Windows 10', img: '/img/skills/os/windows-8.svg' },
            { name: 'Windows 11', img: '/img/skills/os/windows-11.svg' },
            { name: 'Windows Server 2012', img: '/img/skills/os/windows-8.svg' },
            { name: 'Windows Server 2016', img: '/img/skills/os/windows-8.svg' },
            { name: 'Windows Server 2019', img: '/img/skills/os/windows-8.svg' },
            { name: 'Ubuntu', img: '/img/skills/os/ubuntu.svg' },
            { name: 'Debian', img: '/img/skills/os/debian.svg' },
            { name: 'Kali Linux', img: '/img/skills/os/kalilinux.svg' },
            { name: 'Cisco IOS', img: '/img/skills/os/cisco.svg' }
        ]
    },
    {
        title: 'skills.officeSoftware',
        items: [
            { name: 'Microsoft Word', img: '/img/skills/office/word.svg' },
            { name: 'Microsoft Excel', img: '/img/skills/office/excel.svg' },
            { name: 'Microsoft PowerPoint', img: '/img/skills/office/powerpoint.svg' },
            { name: 'Microsoft Access', img: '/img/skills/office/access.svg' },
            { name: 'Microsoft Outlook', img: '/img/skills/office/outlook.svg' },
            { name: 'Microsoft Teams', img: '/img/skills/office/teams.svg' },
            { name: 'Microsoft OneDrive', img: '/img/skills/office/onedrive.svg' }
        ]
    },
    {
        title: 'skills.virtualization',
        items: [
            { name: 'VMware ESXi', img: '/img/skills/virtualization/vmware.svg' },
            { name: 'Proxmox (using KVM)', img: '/img/skills/virtualization/proxmox.svg' },
            { name: 'VMware Workstation', img: '/img/skills/virtualization/vmware.svg' },
            { name: 'VirtualBox', img: '/img/skills/virtualization/virtualbox.svg' },
            { name: 'Docker', img: '/img/skills/virtualization/docker.svg' },
            { name: 'Docker Swarm', img: '/img/skills/virtualization/docker.svg' },
            { name: 'Kubernetes', img: '/img/skills/virtualization/kubernetes.svg' }
        ]
    }
];
</script>

<template>
    <div class="h-full bg-gray-50 dark:bg-slate-900 overflow-y-auto">
        <div class="max-w-7xl mx-auto p-4">
            <!-- Certifications Section -->
            <div
                class="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-sm border border-gray-100 dark:border-slate-700 mb-4">
                <h2 class="text-2xl font-bold flex items-center gap-3 mb-4">
                    <Icon :name="certifications.icon" class="h-7 w-7 text-blue-500" />
                    {{ $t(certifications.title) }}
                </h2>
                <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    <div v-for="cert in certifications.items" :key="cert.title"
                        class="bg-gray-50 dark:bg-slate-700 p-5 rounded-xl group flex flex-col">
                        <div class="flex gap-3 items-start">
                            <div class="flex-1">
                                <h3 class="font-bold group-hover:text-blue-500">{{
                                    $t(cert.title) }}</h3>
                                <p class="text-gray-600 dark:text-gray-300 mt-2">{{ $t(cert.details) }}</p>
                            </div>
                            <span
                                class="text-sm font-medium px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-800 text-blue-600 dark:text-blue-200">
                                {{ cert.year }}
                            </span>
                        </div>
                        <div class="mt-auto pt-4 text-right">
                            <a :href="cert.link" target="_blank"
                                class="inline-flex items-center text-sm text-blue-400 dark:text-blue-300 hover:text-blue-600 dark:hover:text-blue-400">
                                {{ $t('skills.moreInformation') }}
                                <Icon name="heroicons:arrow-right" class="ml-1 h-4 w-4" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Skills Categories -->
            <div v-for="category in skills" :key="category.title"
                class="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-sm border border-gray-100 dark:border-slate-700 mb-4">
                <h2 class="text-2xl font-bold mb-6">{{ $t(category.title) }}</h2>
                <div class="flex flex-wrap gap-4">
                    <div v-for="skill in category.items" :key="skill.name"
                        class="group flex items-center gap-3 px-4 py-3 rounded-xl bg-gray-50 dark:bg-slate-700 hover:bg-blue-50 dark:hover:bg-slate-600">
                        <img class="h-6 w-6" :src="skill.img" :alt="skill.name">
                        <span class="font-medium">{{ skill.name }}</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="postcss" scoped></style>
