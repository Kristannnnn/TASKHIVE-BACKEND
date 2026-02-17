import { sendEmail } from "./mail";

export const ForgotPassword = async (email: string, resetLink: string) => {
  await sendEmail({
    to: email,
    subject: "TaskHive Password Reset Request",
    text: `
You requested to reset your TaskHive password.

Click the link below to reset your password:
${resetLink}

If you did not request a password reset, please ignore this email.

– TaskHive Team
    `,
    html: `
      <div style="font-family: Arial, sans-serif; padding: 20px; color: #333;">
        <h2 style="color: #4F46E5;">TaskHive</h2>
        <p>Hello,</p>

        <p>You recently requested to reset your password for your <strong>TaskHive</strong> account.</p>

        <div style="margin: 30px 0; text-align: center;">
          <a 
            href="${resetLink}" 
            style="
              background-color: #4F46E5;
              color: white;
              padding: 12px 24px;
              text-decoration: none;
              border-radius: 6px;
              font-weight: bold;
              display: inline-block;
            "
          >
            Reset Password
          </a>
        </div>

        <p style="font-size: 14px;">
          If you did not request this, you can safely ignore this email.
          Your password will not be changed.
        </p>

        <hr style="margin: 30px 0;" />

        <p style="font-size: 12px; color: #888;">
          This link may expire for security reasons.
        </p>

        <p style="font-size: 12px; color: #888;">
          © ${new Date().getFullYear()} TaskHive. All rights reserved.
        </p>
      </div>
    `,
  });
};
