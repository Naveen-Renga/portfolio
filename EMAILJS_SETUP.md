# EmailJS Setup Guide

This guide will help you configure EmailJS to send contact form messages to your Gmail inbox.

## Step 1: Create an EmailJS Account

1. Go to [emailjs.com](https://www.emailjs.com/)
2. Click "Sign Up Free"
3. Create an account or log in with Google/GitHub

## Step 2: Get Your Public Key

1. Navigate to the [Admin Dashboard](https://dashboard.emailjs.com/admin)
2. Go to **Account** section
3. Copy your **Public Key**
4. Open `components/contact-section.tsx` and replace:
   ```typescript
   emailjs.init("YOUR_EMAILJS_PUBLIC_KEY")
   ```
   with:
   ```typescript
   emailjs.init("your_actual_public_key_here")
   ```

## Step 3: Create an Email Service

1. In the Dashboard, go to **Email Services**
2. Click **Add Service**
3. Select **Gmail** (or your preferred email provider)
4. Follow the authentication steps:
   - You may need to create an [App Password](https://myaccount.google.com/apppasswords) for Gmail
   - Or use [less secure app access](https://myaccount.google.com/lesssecureapps) (not recommended for security)
5. Copy your **Service ID** after creating the service

## Step 4: Create an Email Template

1. In the Dashboard, go to **Email Templates**
2. Click **Create New Template**
3. Set up your template with the following variables:

### Template Variables (use these exactly):
```
{{to_email}}       - Recipient email (nexvoratech26@gmail.com)
{{from_name}}      - Contact form name field
{{from_email}}     - Contact form email field
{{subject}}        - Contact form subject field
{{message}}        - Contact form message field
{{reply_to}}       - Reply-to email address
```

### Example Template Structure:
```
Subject: New Contact Form Submission: {{subject}}

From: {{from_name}} <{{from_email}}>
Reply-To: {{reply_to}}

Message:
{{message}}
```

4. Copy your **Template ID** after creating the template

## Step 5: Update contact-section.tsx

In `components/contact-section.tsx`, replace the placeholders:

1. Find this line:
   ```typescript
   emailjs.init("YOUR_EMAILJS_PUBLIC_KEY")
   ```
   Replace `YOUR_EMAILJS_PUBLIC_KEY` with your actual public key from Step 2

2. Find this line in the `handleSubmit` function:
   ```typescript
   await emailjs.send(
     "YOUR_SERVICE_ID",
     "YOUR_TEMPLATE_ID",
     templateParams
   )
   ```
   Replace:
   - `YOUR_SERVICE_ID` with your Service ID from Step 3
   - `YOUR_TEMPLATE_ID` with your Template ID from Step 4

## Step 6: Test the Contact Form

1. Run your development server: `npm run dev`
2. Navigate to the contact section
3. Fill out the form with test data
4. Click "Send Message"
5. Check your Gmail inbox for the message

## Troubleshooting

### Message Not Sending?
- Verify all three credentials are correctly replaced (Public Key, Service ID, Template ID)
- Check browser console for error messages (F12 → Console tab)
- Ensure Gmail service is enabled in your EmailJS dashboard
- Verify template variables match exactly

### Gmail Authentication Issues?
- If using Gmail, create an [App Password](https://myaccount.google.com/apppasswords) instead of your regular password
- Make sure "Less secure app access" is enabled if you're not using App Passwords

### Rate Limiting?
- EmailJS free plan allows limited emails per day
- Check your usage in the Dashboard

## Security Notes

- Never commit your Public Key, Service ID, or Template ID to public repositories
- For production, consider storing these in environment variables
- The Public Key is meant to be public, but Service ID and Template ID should be treated as secrets

## Support

- [EmailJS Documentation](https://www.emailjs.com/docs/)
- [EmailJS Support](https://www.emailjs.com/support/)
