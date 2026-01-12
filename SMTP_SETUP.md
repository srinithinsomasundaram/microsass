# MicroSaaS Webinar - SMTP Email Configuration

This application sends confirmation emails to attendees after payment. Configure your SMTP settings in `.env.local`:

```bash
# SMTP Configuration
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_SECURE=false
SMTP_USER=your-email@gmail.com
SMTP_PASSWORD=your-app-password
SMTP_FROM=MicroSaaS Movement <your-email@gmail.com>
```

## Gmail Setup Instructions

1. **Enable 2-Factor Authentication** on your Gmail account
2. **Generate App Password**:
   - Go to Google Account → Security → 2-Step Verification → App passwords
   - Select "Mail" and "Other (Custom name)"
   - Name it "MicroSaaS Webinar"
   - Copy the 16-character password
3. **Update .env.local** with your credentials

## Other SMTP Providers

### SendGrid
```
SMTP_HOST=smtp.sendgrid.net
SMTP_PORT=587
SMTP_USER=apikey
SMTP_PASSWORD=your-sendgrid-api-key
```

### Mailgun
```
SMTP_HOST=smtp.mailgun.org
SMTP_PORT=587
SMTP_USER=postmaster@your-domain.mailgun.org
SMTP_PASSWORD=your-mailgun-password
```

## Testing the Email API

After payment, the system automatically calls:
```
POST /api/send-confirmation
{
  "email": "user@example.com",
  "name": "User Name",
  "paymentId": "pay_xxxxx"
}
```

The email includes:
- Payment confirmation
- Webinar details (Date, Time, Duration)
- WhatsApp group link
- What attendees will learn
