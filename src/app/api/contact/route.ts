import { NextResponse } from 'next/server';
import { Resend } from 'resend';

// Initialize Resend with the API key from environment variables
const resend = new Resend(process.env.RESEND_API_KEY);

// Default sender email (Must be verified in Resend dashboard)
// If not verified, Resend uses "onboarding@resend.dev" for testing.
const SENDER_EMAIL = process.env.RESEND_FROM_EMAIL || 'onboarding@resend.dev';

// Map departments to internal Brixs email addresses
// NOTE: Until brixs.space is verified on Resend, all emails must go to contactbrixs@gmail.com
const departmentEmails: Record<string, string> = {
  'General Inquiries': 'contactbrixs@gmail.com',
  'Support': 'contactbrixs@gmail.com',
  'Partnerships': 'contactbrixs@gmail.com',
  'Legal & Terms': 'contactbrixs@gmail.com'
};

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, department, subject, message } = body;

    // Validate inputs
    if (!name || !email || !department || !subject || !message) {
      return NextResponse.json(
        { error: 'All fields are required.' },
        { status: 400 }
      );
    }

    // Determine the internal routing address
    const internalToEmail = departmentEmails[department] || 'contactbrixs@gmail.com';

    // 1. Send the internal notification email to the Brixs team
    const internalEmailResponse = await resend.emails.send({
      from: `Brixs Contact Form <${SENDER_EMAIL}>`,
      to: [internalToEmail],
      subject: `[${department}] ${subject}`,
      replyTo: email,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; color: #1a1a1a;">
          <h2 style="color: #000; border-bottom: 1px solid #eaeaea; padding-bottom: 10px;">New Website Contact Form Submission</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Department:</strong> ${department}</p>
          <p><strong>Subject:</strong> ${subject}</p>
          <div style="margin-top: 20px; padding: 20px; background-color: #f9f9f9; border-radius: 5px; white-space: pre-wrap;">
            ${message}
          </div>
          <p style="margin-top: 30px; font-size: 12px; color: #666;">This email was automatically generated from the Brixs Chain website contact form.</p>
        </div>
      `,
    });

    if (internalEmailResponse.error) {
      console.error('Resend Internal Error:', internalEmailResponse.error);
      return NextResponse.json({ error: 'Failed to send internal email' }, { status: 500 });
    }

    // 2. Send the auto-responder email to the user
    const userEmailResponse = await resend.emails.send({
      from: `Brixs Team <${SENDER_EMAIL}>`,
      to: [email],
      subject: `Thank you for contacting Brixs: ${subject}`,
      html: `
        <div style="font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; max-width: 600px; margin: 0 auto; color: #1a1a1a; padding: 20px; border: 1px solid #eaeaea; border-radius: 8px;">
          <h2 style="color: #000; margin-bottom: 24px;">Thank you for contacting Brixs</h2>
          <p style="font-size: 16px; line-height: 1.6; color: #333;">Hi ${name},</p>
          <p style="font-size: 16px; line-height: 1.6; color: #333;">
            We have received your message regarding <strong>"${subject}"</strong> submitted to our <strong>${department}</strong> team.
          </p>
          <p style="font-size: 16px; line-height: 1.6; color: #333;">
            Our team is reviewing your inquiry, and we will connect with you as soon as possible. We aim to respond to all inquiries within 24-48 hours.
          </p>
          <hr style="border: none; border-top: 1px solid #eaeaea; margin: 32px 0;" />
          <p style="font-size: 14px; color: #666;">
            Best regards,<br/>
            <strong>The Brixs Team</strong><br/>
            <a href="https://www.brixs.space" style="color: #0052FF; text-decoration: none;">www.brixs.space</a>
          </p>
        </div>
      `,
    });

    if (userEmailResponse.error) {
      console.error('Resend Auto-Responder Error:', userEmailResponse.error);
      // We don't fail the request here since the internal email was successful, 
      // but we log it.
    }

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error('Contact API Error:', error);
    return NextResponse.json(
      { error: 'Internal Server Error' },
      { status: 500 }
    );
  }
}
