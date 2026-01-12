import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { email, name, paymentId } = body;

    if (!email || !name) {
      return NextResponse.json(
        { error: 'Email and name are required' },
        { status: 400 }
      );
    }

    const whatsappLink = 'https://chat.whatsapp.com/KV8CXIuL8JIJtq0n1rtxLA';

    // Send email using Resend
    const { data, error } = await resend.emails.send({
      from: 'MicroSaaS Movement <onboarding@resend.dev>', // Replace with your verified domain
      to: [email],
      subject: '🎉 Your MicroSaaS Webinar Seat is Confirmed!',
      html: `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>MicroSaaS Webinar - Payment Confirmation</title>
</head>
<body style="margin: 0; padding: 0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; background-color: #f5f5f5;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #f5f5f5; padding: 40px 20px;">
    <tr>
      <td align="center">
        <table width="600" cellpadding="0" cellspacing="0" style="background-color: #ffffff; border-radius: 16px; overflow: hidden; box-shadow: 0 4px 12px rgba(0,0,0,0.1);">
          
          <!-- Header -->
          <tr>
            <td style="background: linear-gradient(135deg, #144B2A 0%, #1a5f36 100%); padding: 40px 30px; text-align: center;">
              <h1 style="margin: 0; color: #F2D600; font-size: 32px; font-weight: 900;">MicroSaaS Movement</h1>
              <p style="margin: 10px 0 0; color: rgba(255,255,255,0.9); font-size: 16px;">Your Seat is Confirmed! 🎉</p>
            </td>
          </tr>

          <!-- Content -->
          <tr>
            <td style="padding: 40px 30px;">
              <h2 style="margin: 0 0 20px; color: #144B2A; font-size: 24px; font-weight: 700;">Hi ${name},</h2>
              
              <p style="margin: 0 0 20px; color: #333; font-size: 16px; line-height: 1.6;">
                Thank you for securing your seat at the <strong>MicroSaaS Free Webinar</strong>! We're excited to have you join us.
              </p>

              <!-- Event Details Box -->
              <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #f8f9fa; border-radius: 12px; margin: 30px 0;">
                <tr>
                  <td style="padding: 24px;">
                    <h3 style="margin: 0 0 16px; color: #144B2A; font-size: 18px; font-weight: 700;">Webinar Details</h3>
                    <table width="100%" cellpadding="8" cellspacing="0">
                      <tr>
                        <td style="color: #666; font-size: 14px; font-weight: 600;">📅 Date:</td>
                        <td style="color: #111; font-size: 14px; font-weight: 700; text-align: right;">18 January 2026</td>
                      </tr>
                      <tr>
                        <td style="color: #666; font-size: 14px; font-weight: 600;">🕐 Time:</td>
                        <td style="color: #111; font-size: 14px; font-weight: 700; text-align: right;">11:00 AM IST</td>
                      </tr>
                      <tr>
                        <td style="color: #666; font-size: 14px; font-weight: 600;">⏱️ Duration:</td>
                        <td style="color: #111; font-size: 14px; font-weight: 700; text-align: right;">3 Hours</td>
                      </tr>
                      ${paymentId ? `
                      <tr>
                        <td style="color: #666; font-size: 14px; font-weight: 600;">💳 Payment ID:</td>
                        <td style="color: #111; font-size: 12px; font-family: monospace; text-align: right;">${paymentId}</td>
                      </tr>
                      ` : ''}
                    </table>
                  </td>
                </tr>
              </table>

              <!-- WhatsApp CTA -->
              <div style="background: linear-gradient(135deg, #144B2A 0%, #1a5f36 100%); border-radius: 12px; padding: 32px; text-align: center; margin: 30px 0;">
                <h3 style="margin: 0 0 12px; color: #F2D600; font-size: 22px; font-weight: 800;">Join Our WhatsApp Group</h3>
                <p style="margin: 0 0 24px; color: rgba(255,255,255,0.9); font-size: 15px; line-height: 1.5;">
                  Connect with fellow attendees, get exclusive updates, and access pre-webinar resources.
                </p>
                <a href="${whatsappLink}" style="display: inline-block; background-color: #25D366; color: #ffffff; text-decoration: none; padding: 16px 40px; border-radius: 50px; font-size: 16px; font-weight: 700; box-shadow: 0 4px 12px rgba(37, 211, 102, 0.3);">
                  Join WhatsApp Group →
                </a>
                <p style="margin: 20px 0 0; color: rgba(255,255,255,0.6); font-size: 13px;">
                  Or copy this link: <br>
                  <span style="color: #F2D600; font-family: monospace; font-size: 12px;">${whatsappLink}</span>
                </p>
              </div>

              <!-- What to Expect -->
              <div style="margin: 30px 0;">
                <h3 style="margin: 0 0 16px; color: #144B2A; font-size: 18px; font-weight: 700;">What You'll Learn:</h3>
                <ul style="margin: 0; padding-left: 20px; color: #333; line-height: 1.8;">
                  <li>MicroSaaS fundamentals with real revenue examples</li>
                  <li>Why solo founders thrive with smaller products</li>
                  <li>Building with AI tools (ChatGPT, Claude, Lovable)</li>
                  <li>From launch to monetization: deployment & payment setup</li>
                </ul>
              </div>

              <!-- Important Note -->
              <div style="background-color: #fff3cd; border-left: 4px solid #F2D600; padding: 16px; margin: 30px 0; border-radius: 4px;">
                <p style="margin: 0; color: #856404; font-size: 14px; font-weight: 600;">
                  ⚠️ Important: No recordings will be shared. Make sure to attend live!
                </p>
              </div>

              <p style="margin: 30px 0 0; color: #333; font-size: 16px; line-height: 1.6;">
                See you at the webinar! 🚀<br>
                <strong>Team MicroSaaS Movement</strong>
              </p>
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="background-color: #f8f9fa; padding: 24px 30px; text-align: center; border-top: 1px solid #e9ecef;">
              <p style="margin: 0 0 8px; color: #666; font-size: 13px;">
                Organized by <strong>yespstudio</strong>
              </p>
              <p style="margin: 0; color: #999; font-size: 12px;">
                © 2026 Srinithin Somasundaram. All rights reserved.
              </p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>
      `,
    });

    if (error) {
      console.error('Resend error:', error);
      return NextResponse.json(
        { error: 'Failed to send confirmation email', details: error },
        { status: 500 }
      );
    }

    return NextResponse.json({
      success: true,
      message: 'Confirmation email sent successfully',
      emailId: data?.id
    });

  } catch (error) {
    console.error('Email sending error:', error);
    return NextResponse.json(
      { error: 'Failed to send confirmation email', details: error instanceof Error ? error.message : 'Unknown error' },
      { status: 500 }
    );
  }
}
