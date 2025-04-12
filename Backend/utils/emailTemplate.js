function generateVerificationOtpEmailTemplate(otpCode) {
    return `
        <html>
            <head>
                <style>
                    body {
                        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
                        background: linear-gradient(135deg, #f0f4f8, #d9e2ec);
                        color: #333;
                        margin: 0;
                        padding: 0;
                    }
                    .email-container {
                        max-width: 600px;
                        margin: 50px auto;
                        background-color: #ffffff;
                        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
                        border-radius: 12px;
                        padding: 40px;
                    }
                    .header {
                        text-align: center;
                        padding-bottom: 20px;
                        border-bottom: 1px solid #e0e0e0;
                    }
                    .header h1 {
                        color: #4a90e2;
                    }
                    .content {
                        padding-top: 20px;
                        font-size: 16px;
                        line-height: 1.6;
                    }
                    .otp-code {
                        font-size: 32px;
                        font-weight: bold;
                        color: #2c3e50;
                        text-align: center;
                        margin: 20px 0;
                        background-color: #f2f6fc;
                        padding: 15px;
                        border-radius: 8px;
                        letter-spacing: 3px;
                    }
                    .footer {
                        text-align: center;
                        margin-top: 30px;
                        font-size: 14px;
                        color: #777;
                    }
                </style>
            </head>
            <body>
                <div class="email-container">
                    <div class="header">
                        <h1>Email Verification</h1>
                    </div>
                    <div class="content">
                        <p>Dear User,</p>
                        <p>We received a request to verify your email address. To complete the verification process, please use the one-time verification code provided below.</p>

                        <div class="otp-code">${otpCode}</div>

                        <p>This code is valid for the next <strong>10 minutes</strong>. Please do not share this code with anyone for security reasons.</p>
                        <p>If you did not request this verification, you can safely ignore this email.</p>
                        <p>Thank you,<br> BookWorm Team. We are committed to providing you with secure and seamless access to your account.</p>
                    </div>
                    <div class="footer">
                        &copy; ${new Date().getFullYear()} YourCompanyName. All rights reserved.
                    </div>
                </div>
            </body>
        </html>
    `;
}

module.exports = generateVerificationOtpEmailTemplate;
