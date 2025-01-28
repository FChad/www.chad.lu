<script lang="ts" setup>
const certifications = {
    title: 'Certifications',
    icon: 'mdi:certificate',
    items: [
        {
            year: '2023',
            link: 'https://govjobs.public.lu/fr/examen-concours/administration/inscription.html',
            title: 'The general aptitude test',
            details: "L'épreuve d'aptitude générale secteur étatique (administration)"
        },
        {
            year: '2021',
            link: 'https://learningnetwork.cisco.com/s/cbrops-exam-topics?ccid=cyberopsassociate',
            title: 'Cisco Certified CyberOps Associate',
            details: 'Course Completion'
        },
        {
            year: '2021',
            link: 'https://www.netacad.com/courses/networking/ccna-enterprise-networking-security-automation',
            title: 'Cisco Certified Network Associate 3',
            details: '7.0 Enterprise Networking, Security, and Automation'
        },
        {
            year: '2020',
            link: 'https://www.netacad.com/courses/networking/ccna-switching-routing-wireless-essentials',
            title: 'Cisco Certified Network Associate 2',
            details: '7.0 Switching, Routing, and Wireless Essentials'
        },
        {
            year: '2020',
            link: 'https://www.netacad.com/courses/networking/ccna-introduction-networks',
            title: 'Cisco Certified Network Associate 1',
            details: '7.0 Introduction to Networks'
        },
        {
            year: '2020',
            link: 'https://learn.microsoft.com/en-us/certifications/microsoft-office-specialist-master-certification-2016/',
            title: 'Microsoft Office Specialist 2016',
            details: 'PowerPoint, Word, Word expert, Outlook, Excel'
        }
    ]
};

const skills = [
    {
        title: 'Programing',
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
        title: 'Operating systems',
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
        title: 'Office Software',
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
        title: 'Virtualization',
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
    <div class="h-full w-full z-10 overflow-y-auto">
        <div class="max-w-7xl h-full w-full mx-auto">
            <div class="px-4 md:px-1 py-4 font-semibold flex flex-col gap-4">
                <div class="flex flex-col gap-2">
                    <div class="flex gap-2">
                        <div class="text-xl font-bold">{{ certifications.title }}</div>
                    </div>
                    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 w-full">
                        <div v-for="cert in certifications.items" :key="cert.title"
                            class="bg-white dark:bg-slate-800 p-4 rounded-lg flex flex-col gap-2 items-start justify-start w-full">
                            <div class="flex gap-2 items-center w-full">
                                <Icon :name="certifications.icon" class="h-6 w-6" />
                                <div class="flex-1 font-bold leading-tight">{{ cert.title }}</div>
                                <div class="text-sm text-gray-500 dark:text-gray-400 self-start">
                                    <span>{{ cert.year }}</span>
                                </div>
                            </div>
                            <div>{{ cert.details }}</div>
                            <div class="mt-auto text-sm flex items-end justify-end w-full">
                                <a :href="cert.link" target="_blank" class="text-blue-500 underline">More
                                    Information</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div v-for="category in skills" :key="category.title" class="flex flex-col gap-2">
                    <div class="flex gap-2">
                        <div class="text-xl font-bold">{{ category.title }}</div>
                    </div>
                    <div class="flex flex-row flex-wrap gap-2">
                        <div v-for="skill in category.items" :key="skill.name"
                            class="bg-white dark:bg-slate-800 p-2 rounded-lg flex gap-2 items-center justify-start">
                            <img class="h-8 w-8" :src="skill.img" :alt="skill.name">
                            {{ skill.name }}
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </div>
</template>

<style lang="css" scoped></style>
