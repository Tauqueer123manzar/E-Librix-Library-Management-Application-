const nodemailer = require('nodemailer');

const sendEmail = async ({ email, subject, message }) => {
    const transporter = nodemailer.createTransport({
        host: process.env.SMTP_HOST,
        port: process.env.SMTP_PORT,
        service: process.env.SMTP_SERVICE,
        auth: {
            user: process.env.SMTP_MAIL, // Corrected here
            pass: process.env.SMTP_PASSWORD, // Corrected here
        }
    });

    const mailOptions = {
        from: process.env.SMTP_MAIL,
        to: email,
        subject,
        html: message
    };

    // Send the email
    await transporter.sendMail(mailOptions);
};

module.exports = sendEmail;
