import { NextResponse } from 'next/server';
import { Resend } from 'resend';

// Initialize Resend with the API key from environment variables
const resend = new Resend(process.env.RESEND_API_KEY);

// Default sender email (Now verified)
const SENDER_EMAIL = process.env.RESEND_FROM_EMAIL || 'hello@brixs.space';

// Map departments to internal Brixs email addresses
const departmentEmails: Record<string, string> = {
  'General Inquiries': 'hello@brixs.space',
  'Support': 'support@brixs.space',
  'Partnerships': 'partnerships@brixs.space',
  'Legal & Terms': 'legal@brixs.space'
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
    const internalToEmail = departmentEmails[department] || 'hello@brixs.space';

    // 1. Send the internal notification email to the Brixs team
    const internalEmailResponse = await resend.emails.send({
      from: `Brixs Platform <${SENDER_EMAIL}>`,
      to: [internalToEmail],
      subject: `New Inquiry: [${department}] ${subject}`,
      replyTo: email,
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <style>
            body { font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif; background-color: #f4f5f7; margin: 0; padding: 40px 20px; }
            .container { max-width: 600px; margin: 0 auto; background-color: #ffffff; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 24px rgba(0,0,0,0.05); }
            .header { background-color: #05070a; padding: 24px 32px; color: #ffffff; border-bottom: 4px solid #005BFF; }
            .header h1 { margin: 0; font-size: 20px; font-weight: 600; letter-spacing: -0.02em; }
            .content { padding: 32px; color: #1a1a1a; }
            .field { margin-bottom: 24px; }
            .label { font-size: 11px; text-transform: uppercase; letter-spacing: 0.1em; color: #6b7280; margin-bottom: 6px; font-weight: 600; }
            .value { font-size: 15px; color: #111827; line-height: 1.5; }
            .message-box { background-color: #f9fafb; border: 1px solid #e5e7eb; border-radius: 8px; padding: 20px; font-size: 14px; line-height: 1.6; color: #374151; white-space: pre-wrap; margin-top: 8px; }
            .footer { padding: 24px 32px; background-color: #f9fafb; border-top: 1px solid #f3f4f6; text-align: center; }
            .footer p { margin: 0; font-size: 12px; color: #9ca3af; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>Incoming Inquiry — ${department}</h1>
            </div>
            <div class="content">
              <div class="field">
                <div class="label">Sender Details</div>
                <div class="value"><strong>${name}</strong> (${email})</div>
              </div>
              <div class="field">
                <div class="label">Subject</div>
                <div class="value" style="font-weight: 500;">${subject}</div>
              </div>
              <div class="field">
                <div class="label">Message</div>
                <div class="message-box">${message}</div>
              </div>
            </div>
            <div class="footer">
              <p>Generated via Brixs Chain Contact Gateway</p>
            </div>
          </div>
        </body>
        </html>
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
      subject: `We've received your request: ${subject}`,
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <style>
            body { font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif; background-color: #05070a; margin: 0; padding: 40px 20px; }
            .container { max-width: 600px; margin: 0 auto; background-color: #0f1115; border: 1px solid rgba(255,255,255,0.1); border-radius: 16px; overflow: hidden; }
            .header { padding: 32px; text-align: center; border-bottom: 1px solid rgba(255,255,255,0.05); }
            .header h1 { margin: 0; font-size: 24px; font-weight: 400; color: #ffffff; letter-spacing: -0.02em; }
            .content { padding: 40px 32px; color: rgba(255,255,255,0.7); line-height: 1.6; font-size: 15px; }
            .content p { margin-top: 0; margin-bottom: 20px; }
            .highlight-box { background-color: rgba(255,255,255,0.03); border-left: 3px solid #005BFF; padding: 20px; margin: 24px 0; border-radius: 0 8px 8px 0; }
            .highlight-box p { margin: 0; font-size: 14px; color: rgba(255,255,255,0.9); }
            .label { font-size: 11px; text-transform: uppercase; letter-spacing: 0.1em; color: rgba(255,255,255,0.4); margin-bottom: 4px; display: block; }
            .btn { display: inline-block; background-color: #ffffff; color: #000000; padding: 12px 24px; text-decoration: none; font-size: 14px; font-weight: 600; border-radius: 4px; margin-top: 10px; }
            .footer { padding: 32px; border-top: 1px solid rgba(255,255,255,0.05); text-align: center; }
            .footer p { margin: 0; font-size: 13px; color: rgba(255,255,255,0.4); }
            .footer a { color: #005BFF; text-decoration: none; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>Request Received</h1>
            </div>
            <div class="content">
              <p>Hello ${name},</p>
              <p>Thank you for reaching out to the Brixs team. This is an automated confirmation that we have successfully received your inquiry for the <strong>${department}</strong> department.</p>
              
              <div class="highlight-box">
                <span class="label">Reference</span>
                <p><strong>Subject:</strong> ${subject}</p>
              </div>

              <p>Our team is currently reviewing the details of your request. Due to high volume, please allow 24-48 hours for a dedicated team member to connect with you with a comprehensive response.</p>
              
              <p>If you have any urgent additions to this request, simply reply directly to this email.</p>
            </div>
            <div class="footer">
              <p>Best regards,</p>
              <p style="color: #ffffff; font-weight: 500; margin: 8px 0 16px 0;">The Brixs Team</p>
              <p><a href="https://www.brixs.space">www.brixs.space</a> &bull; <a href="https://x.com/BrixsChain">Follow us on X</a></p>
            </div>
          </div>
        </body>
        </html>
      `,
    });

    if (userEmailResponse.error) {
      console.error('Resend Auto-Responder Error:', userEmailResponse.error);
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
