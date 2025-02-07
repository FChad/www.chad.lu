import { Resend } from 'resend'
import { useRuntimeConfig } from '#imports'
import * as yup from 'yup'

// Validierungsschema definieren
const validationSchema = yup.object({
    name: yup.string()
        .required('Name ist erforderlich')
        .min(2, 'Name muss mindestens 2 Zeichen lang sein')
        .max(50, 'Name darf maximal 50 Zeichen lang sein')
        .matches(/^[a-zA-ZäöüÄÖÜß\s-]+$/, 'Name enthält ungültige Zeichen'),
    email: yup.string()
        .required('E-Mail ist erforderlich')
        .email('Ungültige E-Mail-Adresse')
        .max(100, 'E-Mail darf maximal 100 Zeichen lang sein')
        .matches(/^[^@]+@[^@]+\.[a-zA-Z]{2,}$/, 'Ungültiges E-Mail-Format'),
    subject: yup.string()
        .required('Betreff ist erforderlich')
        .min(5, 'Betreff muss mindestens 5 Zeichen lang sein')
        .max(100, 'Betreff darf maximal 100 Zeichen lang sein')
        .matches(/^[a-zA-Z0-9äöüÄÖÜß\s.,!?-]+$/, 'Betreff enthält ungültige Zeichen'),
    message: yup.string()
        .required('Nachricht ist erforderlich')
        .min(30, 'Nachricht muss mindestens 30 Zeichen lang sein')
        .max(1000, 'Nachricht darf maximal 1000 Zeichen lang sein')
});

export default defineEventHandler(async (event) => {
    const body = await readBody(event);

    try {
        // Validiere die Eingabedaten
        await validationSchema.validate(body, { abortEarly: false });

        const { name, email, subject, message } = body;
        const config = useRuntimeConfig();

        // Initialize Resend with API key
        const resend = new Resend(config.resend.apiKey);

        // Use email from environment variable
        const toEmail = config.resend.toEmail;

        await resend.emails.send({
            from: `Contact Form <${config.resend.toEmail}>`,
            replyTo: email,
            to: toEmail,
            subject: `Contact Form: ${subject}`,
            text: `
                Name: ${name}
                Email: ${email}
                Subject: ${subject}
                
                Message:
                ${message}
            `,
            html: `
                <h3>New Contact Form Submission</h3>
                <p><strong>Name:</strong> ${name}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Subject:</strong> ${subject}</p>
                <p><strong>Message:</strong></p>
                <p>${message.replace(/\n/g, '<br>')}</p>
            `
        });

        return { success: true };
    } catch (error) {
        if (error instanceof yup.ValidationError) {
            throw createError({
                statusCode: 400,
                message: 'Validierungsfehler',
                data: error.errors
            });
        }
        console.error('Failed to send email:', error);
        throw createError({
            statusCode: 500,
            message: 'Failed to send email'
        });
    }
}); 