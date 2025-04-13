const sendEmail = require("./sendEmail");
const generateVerificationOtpEmailTemplate = require("./emailTemplate");

const sendVerificationCode = async (verificationCode, email, res) => {
    try {
        const message = generateVerificationOtpEmailTemplate(verificationCode);

        // Await the email sending operation
        await sendEmail({
            email,
            subject: "Verification Code (Bookworm Library Management System)",
            message,
        });

        return res.status(200).json({
            success: true,
            message: "Verification code sent successfully"
        });
    } catch (error) {
        console.error("Email sending failed:", error);
        return res.status(500).json({
            success: false,
            message: "Failed to send verification code"
        });
    }
};

module.exports = sendVerificationCode;
