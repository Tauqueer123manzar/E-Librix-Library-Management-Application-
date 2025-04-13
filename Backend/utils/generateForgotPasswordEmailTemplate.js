function generateForgotPasswordEmailTemplate(resetPasswordUrl) {
    return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <title>Reset Your Password</title>
        <style>
            body {
                font-family: Arial, sans-serif;
                background-color: #f4f4f4;
                margin: 0;
                padding: 0;
            }
            .container {
                background-color: #ffffff;
                max-width: 600px;
                margin: 40px auto;
                padding: 30px;
                border-radius: 10px;
                box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
            }
            h2 {
                color: #333;
                text-align: center;
            }
            p {
                color: #555;
                font-size: 16px;
                line-height: 1.5;
            }
            a.button {
                display: inline-block;
                background-color: #007bff;
                color: white;
                padding: 12px 20px;
                text-decoration: none;
                border-radius: 5px;
                margin-top: 20px;
                text-align: center;
            }
            .footer {
                margin-top: 30px;
                text-align: center;
                font-size: 12px;
                color: #aaa;
            }
        </style>
    </head>
    <body>
        <div class="container">
            <h2>Password Reset Request</h2>
            <p>You have requested to reset your password for the Library Management System. Please click the button below to reset your password:</p>
            <p style="text-align: center;">
                <a class="button" href="${resetPasswordUrl}" target="_blank">Reset Password</a>
            </p>
             <p class="link">${resetPasswordUrl}</p>
            <p>If you did not request this, you can safely ignore this email.</p>
            <div class="footer">
                &copy; ${new Date().getFullYear()} Library Management System. All rights reserved.
            </div>
        </div>
    </body>
    </html>
    `;
  }
module.exports = generateForgotPasswordEmailTemplate;  