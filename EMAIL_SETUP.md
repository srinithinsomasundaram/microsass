# MicroSaaS Webinar - Email Configuration with Resend

This application uses **Resend** to send confirmation emails to attendees after payment.

## Setup Instructions

### 1. Create a Resend Account
1. Go to [resend.com](https://resend.com)
2. Sign up for a free account (100 emails/day on free tier)
3. Verify your email address

### 2. Get Your API Key
1. Go to [API Keys](https://resend.com/api-keys) in your Resend dashboard
2. Click "Create API Key"
3. Give it a name like "MicroSaaS Webinar"
4. Copy the API key (starts with `re_`)

### 3. Add to Environment Variables
Create or update `.env.local` in your project root:

```bash
RESEND_API_KEY=re_your_api_key_here
```

### 4. Verify Your Domain (Optional but Recommended)

**For Production:**
1. Go to [Domains](https://resend.com/domains) in Resend
2. Click "Add Domain"
3. Enter your domain (e.g., `webinar.yespstudio.com`)
4. Add the DNS records to your domain provider
5. Wait for verification (usually 5-10 minutes)

**Update the 'from' address in the code:**
```typescript
from: 'MicroSaaS Movement <noreply@webinar.yespstudio.com>'
```

**For Testing:**
- Use the default `onboarding@resend.dev` (works immediately)
- Emails will be delivered but may go to spam
- Only works for emails sent to your verified email

## How It Works

After payment, the system automatically:
1. Redirects to `/MicroSaaS-live-building/success?email={email}&name={name}&payment_id={id}`
2. Success page calls `POST /api/send-confirmation`
3. Resend sends a beautiful HTML email with:
   - Payment confirmation
   - Webinar details (Date, Time, Duration)
   - WhatsApp group link
   - What attendees will learn
   - Payment ID

## Testing the Email

You can test the email API directly:

```bash
curl -X POST http://localhost:3000/api/send-confirmation \
  -H "Content-Type: application/json" \
  -d '{
    "email": "your-email@example.com",
    "name": "Test User",
    "paymentId": "pay_test123"
  }'
```

## Resend Advantages

✅ **Simple Setup** - Just one API key, no SMTP configuration
✅ **Reliable Delivery** - 99.9% uptime SLA
✅ **Better Deliverability** - Built-in SPF/DKIM/DMARC
✅ **Free Tier** - 100 emails/day, 3,000/month
✅ **Email Analytics** - Track opens, clicks, bounces
✅ **React Email Support** - Can use React components for emails

## Pricing

- **Free**: 100 emails/day, 3,000/month
- **Pro**: $20/month - 50,000 emails/month
- **Enterprise**: Custom pricing

For this webinar, the free tier should be more than sufficient!

## Troubleshooting

**Email not sending?**
- Check your API key is correct in `.env.local`
- Restart your dev server after adding the API key
- Check Resend dashboard for error logs

**Emails going to spam?**
- Verify your domain in Resend
- Add SPF, DKIM, and DMARC records
- Use a custom domain instead of `resend.dev`

**Rate limits?**
- Free tier: 100 emails/day
- Upgrade to Pro if you need more
