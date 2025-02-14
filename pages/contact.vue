<script lang="ts" setup>
import { toTypedSchema } from "@vee-validate/yup";
import { useField, useForm } from "vee-validate";
import * as yup from "yup";
import { useI18n } from "vue-i18n";

const { t } = useI18n();

const { locale } = useI18n();

// Define the validation schema with i18n
const validationSchema = toTypedSchema(yup.object({
    name: yup.string()
        .required(t('contact.validation.required'))
        .min(2, t('contact.validation.name.min'))
        .max(50, t('contact.validation.name.max'))
        .matches(/^[a-zA-ZäöüÄÖÜß\s-]+$/, t('contact.validation.name.format')),
    email: yup.string()
        .required(t('contact.validation.required'))
        .email(t('contact.validation.email.valid'))
        .max(100, t('contact.validation.email.max'))
        .matches(/^[^@]+@[^@]+\.[a-zA-Z]{2,}$/, t('contact.validation.email.format')),
    subject: yup.string()
        .required(t('contact.validation.required'))
        .min(5, t('contact.validation.subject.min'))
        .max(100, t('contact.validation.subject.max'))
        .matches(/^[a-zA-Z0-9äöüÄÖÜß\s.,!?-]+$/, t('contact.validation.subject.format')),
    message: yup.string()
        .required(t('contact.validation.required'))
        .min(30, t('contact.validation.message.min'))
        .max(1000, t('contact.validation.message.max'))
}));

// Initialize form with ref to access it later
const form = ref();
const { handleSubmit, values, resetForm } = useForm({
    validationSchema
});

// Define fields
const { value: name, errorMessage: nameError } = useField('name');
const { value: email, errorMessage: emailError } = useField('email');
const { value: subject, errorMessage: subjectError } = useField('subject');
const { value: message, errorMessage: messageError } = useField('message');

// Add status handling
const status = ref('');
const loading = ref(false);

// Add loading and success states for button
const isSubmitting = ref(false);
const isSuccess = ref(false);

// Watch for locale changes and reinitialize the form
watch(locale, () => {
    // Reinitialize the validation schema with new locale
    const newValidationSchema = toTypedSchema(yup.object({
        name: yup.string()
            .required(t('contact.validation.required'))
            .min(2, t('contact.validation.name.min'))
            .max(50, t('contact.validation.name.max'))
            .matches(/^[a-zA-ZäöüÄÖÜß\s-]+$/, t('contact.validation.name.format')),
        email: yup.string()
            .required(t('contact.validation.required'))
            .email(t('contact.validation.email.valid'))
            .max(100, t('contact.validation.email.max'))
            .matches(/^[^@]+@[^@]+\.[a-zA-Z]{2,}$/, t('contact.validation.email.format')),
        subject: yup.string()
            .required(t('contact.validation.required'))
            .min(5, t('contact.validation.subject.min'))
            .max(100, t('contact.validation.subject.max'))
            .matches(/^[a-zA-Z0-9äöüÄÖÜß\s.,!?-]+$/, t('contact.validation.subject.format')),
        message: yup.string()
            .required(t('contact.validation.required'))
            .min(30, t('contact.validation.message.min'))
            .max(1000, t('contact.validation.message.max'))
    }));

    // Update the form with new schema
    form.value = useForm({
        validationSchema: newValidationSchema,
        initialValues: values
    });
});

// Update form submission handler
const onSubmit = handleSubmit(async (values) => {
    isSubmitting.value = true;
    status.value = '';

    try {
        await $fetch('/api/contact', {
            method: 'POST',
            body: values
        });
        status.value = 'success';
        isSuccess.value = true;
        // Reset form and validation state
        resetForm();
    } catch (error) {
        status.value = 'error';
        console.error('Failed to send email:', error);
    } finally {
        isSubmitting.value = false;
    }
});
</script>

<template>
    <div class="h-full bg-gray-50 dark:bg-slate-800 overflow-y-auto">
        <div class="max-w-5xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
            <!-- Page Header -->
            <div class="text-center mb-12">
                <h1 class="text-4xl font-bold text-gray-900 dark:text-white mb-4">{{ t('contact.title') }}</h1>
                <p class="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                    {{ t('contact.subtitle') }}
                </p>
            </div>

            <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <!-- Contact Form -->
                <div
                    class="bg-white/90 dark:bg-slate-700/90 rounded-2xl shadow-lg p-8 border border-gray-100 dark:border-slate-600">
                    <form @submit="onSubmit" class="space-y-6">
                        <div class="space-y-2">
                            <label for="name" class="block text-sm font-medium text-gray-700 dark:text-gray-200">{{
                                t('contact.form.name') }}</label>
                            <input id="name" v-model="name" type="text" :class="[
                                'w-full px-4 py-3 border rounded-lg transition duration-150 ease-in-out',
                                nameError
                                    ? 'border-red-300 focus:border-red-500 focus:ring focus:ring-red-200'
                                    : 'border-gray-300 focus:border-blue-500 focus:ring focus:ring-blue-200',
                                'dark:bg-slate-800 dark:border-slate-600 dark:text-white'
                            ]" :placeholder="t('contact.form.namePlaceholder')" />
                            <span v-if="nameError" class="flex items-center text-red-500 text-sm mt-1">
                                <Icon name="mdi:alert-circle" class="mr-1" />
                                {{ nameError }}
                            </span>
                        </div>

                        <div class="space-y-2">
                            <label for="email" class="block text-sm font-medium text-gray-700 dark:text-gray-200">{{
                                t('contact.form.email') }}</label>
                            <input id="email" v-model="email" type="email" :class="[
                                'w-full px-4 py-3 border rounded-lg transition duration-150 ease-in-out',
                                emailError
                                    ? 'border-red-300 focus:border-red-500 focus:ring focus:ring-red-200'
                                    : 'border-gray-300 focus:border-blue-500 focus:ring focus:ring-blue-200',
                                'dark:bg-slate-800 dark:border-slate-600 dark:text-white'
                            ]" :placeholder="t('contact.form.emailPlaceholder')" />
                            <span v-if="emailError" class="flex items-center text-red-500 text-sm mt-1">
                                <Icon name="mdi:alert-circle" class="mr-1" />
                                {{ emailError }}
                            </span>
                        </div>

                        <div class="space-y-2">
                            <label for="subject" class="block text-sm font-medium text-gray-700 dark:text-gray-200">{{
                                t('contact.form.subject') }}</label>
                            <input id="subject" v-model="subject" type="text" :class="[
                                'w-full px-4 py-3 border rounded-lg transition duration-150 ease-in-out',
                                subjectError
                                    ? 'border-red-300 focus:border-red-500 focus:ring focus:ring-red-200'
                                    : 'border-gray-300 focus:border-blue-500 focus:ring focus:ring-blue-200',
                                'dark:bg-slate-800 dark:border-slate-600 dark:text-white'
                            ]" :placeholder="t('contact.form.subjectPlaceholder')" />
                            <span v-if="subjectError" class="flex items-center text-red-500 text-sm mt-1">
                                <Icon name="mdi:alert-circle" class="mr-1" />
                                {{ subjectError }}
                            </span>
                        </div>

                        <div class="space-y-2">
                            <label for="message" class="block text-sm font-medium text-gray-700 dark:text-gray-200">{{
                                t('contact.form.message') }}</label>
                            <textarea id="message" v-model="message" rows="5" :class="[
                                'w-full px-4 py-3 border rounded-lg transition duration-150 ease-in-out',
                                messageError
                                    ? 'border-red-300 focus:border-red-500 focus:ring focus:ring-red-200'
                                    : 'border-gray-300 focus:border-blue-500 focus:ring focus:ring-blue-200',
                                'dark:bg-slate-800 dark:border-slate-600 dark:text-white'
                            ]" :placeholder="t('contact.form.messagePlaceholder')"></textarea>
                            <span v-if="messageError" class="flex items-center text-red-500 text-sm mt-1">
                                <Icon name="mdi:alert-circle" class="mr-1" />
                                {{ messageError }}
                            </span>
                        </div>

                        <!-- Status Messages -->
                        <TransitionGroup name="fade">
                            <div v-if="status === 'success'" key="success"
                                class="flex items-center p-4 bg-green-50 dark:bg-green-900/30 border border-green-200 dark:border-green-800 rounded-lg">
                                <Icon name="mdi:check-circle" class="text-green-500 mr-2" />
                                <span class="text-green-700 dark:text-green-300">{{ t('contact.form.success') }}</span>
                            </div>
                            <div v-if="status === 'error'" key="error"
                                class="flex items-center p-4 bg-red-50 dark:bg-red-900/30 border border-red-200 dark:border-red-800 rounded-lg">
                                <Icon name="mdi:alert-circle" class="text-red-500 mr-2" />
                                <span class="text-red-700 dark:text-red-300">{{ t('contact.form.error') }}</span>
                            </div>
                        </TransitionGroup>

                        <button type="submit" :disabled="isSubmitting || isSuccess"
                            class="w-full sm:w-auto px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition-all duration-200 flex items-center justify-center gap-2 text-sm font-semibold disabled:opacity-50 disabled:cursor-not-allowed">
                            <span v-if="isSubmitting" class="inline-block animate-spin mr-2">
                                <Icon name="mdi:loading" />
                            </span>
                            {{ isSubmitting ? t('contact.form.sending') : t('contact.form.sendButton') }}
                            <Icon v-if="!isSubmitting" name="mdi:send-variant" size="20" />
                        </button>
                    </form>
                </div>

                <!-- Social Media Section -->
                <div
                    class="bg-white/90 dark:bg-slate-700/90 rounded-2xl shadow-lg p-8 border border-gray-100 dark:border-slate-600">
                    <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-6">{{ t('contact.social.title') }}
                    </h2>
                    <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <NuxtLink to="https://www.linkedin.com/in/chad-feierstein/" target="_blank"
                            class="group bg-gray-50 dark:bg-slate-800 p-4 rounded-xl hover:bg-blue-50 dark:hover:bg-slate-900 transition-colors border border-gray-100 dark:border-slate-600">
                            <div class="flex items-center gap-3">
                                <div
                                    class="p-2.5 flex items-center justify-center w-10 h-10 bg-blue-100 dark:bg-blue-900 rounded-lg group-hover:bg-blue-200 dark:group-hover:bg-blue-800 transition-colors">
                                    <Icon name="mdi:linkedin" size="32" class="text-blue-600 dark:text-blue-400" />
                                </div>
                                <div>
                                    <p class="font-medium text-gray-900 dark:text-white">{{
                                        t('contact.social.linkedin.title') }}</p>
                                    <p class="text-sm text-gray-600 dark:text-gray-400">{{
                                        t('contact.social.linkedin.subtitle') }}</p>
                                </div>
                            </div>
                        </NuxtLink>

                        <NuxtLink to="https://github.com/FChad?tab=repositories" target="_blank"
                            class="group bg-gray-50 dark:bg-slate-800 p-4 rounded-xl hover:bg-gray-100 dark:hover:bg-slate-900 transition-colors border border-gray-100 dark:border-slate-600">
                            <div class="flex items-center gap-3">
                                <div
                                    class="p-2.5 flex items-center justify-center w-10 h-10 bg-gray-200 dark:bg-gray-700 rounded-lg group-hover:bg-gray-300 dark:group-hover:bg-gray-600 transition-colors">
                                    <Icon name="mdi:github" size="32" class="text-gray-900 dark:text-gray-100" />
                                </div>
                                <div>
                                    <p class="font-medium text-gray-900 dark:text-white">GitHub</p>
                                    <p class="text-sm text-gray-600 dark:text-gray-400">{{
                                        t('contact.social.github.subtitle') }}</p>
                                </div>
                            </div>
                        </NuxtLink>

                        <NuxtLink to="https://www.instagram.com/chadfeierstein/" target="_blank"
                            class="group bg-gray-50 dark:bg-slate-800 p-4 rounded-xl hover:bg-pink-50 dark:hover:bg-slate-900 transition-colors border border-gray-100 dark:border-slate-600">
                            <div class="flex items-center gap-3">
                                <div
                                    class="p-2.5 flex items-center justify-center w-10 h-10 bg-pink-100 dark:bg-pink-900 rounded-lg group-hover:bg-pink-200 dark:group-hover:bg-pink-800 transition-colors">
                                    <Icon name="mdi:instagram" size="32" class="text-pink-600 dark:text-pink-400" />
                                </div>

                                <div>

                                    <p class="font-medium text-gray-900 dark:text-white">{{
                                        t('contact.social.instagram.title') }}</p>
                                    <p class="text-sm text-gray-600 dark:text-gray-400">{{
                                        t('contact.social.instagram.subtitle') }}</p>
                                </div>
                            </div>
                        </NuxtLink>

                        <NuxtLink to="https://www.facebook.com/chad.feierstein.7/" target="_blank"
                            class="group bg-gray-50 dark:bg-slate-800 p-4 rounded-xl hover:bg-blue-50 dark:hover:bg-slate-900 transition-colors border border-gray-100 dark:border-slate-600">
                            <div class="flex items-center gap-3">
                                <div
                                    class="p-2.5 flex items-center justify-center w-10 h-10 bg-blue-100 dark:bg-blue-900 rounded-lg group-hover:bg-blue-200 dark:group-hover:bg-blue-800 transition-colors">
                                    <Icon name="mdi:facebook" size="32" class="text-[#1877F2] dark:text-blue-400" />
                                </div>
                                <div>
                                    <p class="font-medium text-gray-900 dark:text-white">{{
                                        t('contact.social.facebook.title') }}</p>
                                    <p class="text-sm text-gray-600 dark:text-gray-400">{{
                                        t('contact.social.facebook.subtitle') }}</p>
                                </div>
                            </div>
                        </NuxtLink>
                    </div>
                    <div class="mt-10 flex justify-center">
                        <img src="/img/contact/socials.webp" alt="Connect with us illustration"
                            class="w-full max-w-md h-auto rounded-xl opacity-95 dark:opacity-85 shadow-md" />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="postcss" scoped>
.fade-enter-active,
.fade-leave-active {
    transition: all 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
    opacity: 0;
    transform: translateY(-10px);
}
</style>
