# Setting Up Email for Contact Form

To make the contact form work properly, you need to set up a Gmail account to send emails through your website. For security reasons, you should use an App Password instead of your regular Gmail password.

## Getting a Gmail App Password

1. Visit the Google App Passwords page directly at:
   [https://myaccount.google.com/apppasswords](https://myaccount.google.com/apppasswords)

2. If prompted, sign in to your Google Account (must be the Gmail account you want to use for sending emails)

3. **Note:** If you don't see the App passwords option, it might be because:
   - 2-Step Verification is not set up for your Google Account
   - 2-Step Verification is set up but not for your specific device
   - Your account is through work, school, or other organization
   - You turned on Advanced Protection for your account

4. If you need to set up 2-Step Verification first:
   - Go to [https://myaccount.google.com/security](https://myaccount.google.com/security)
   - Under "Signing in to Google," select 2-Step Verification → Get started
   - Follow the steps on the screen

5. Once you're on the App Passwords page:
   - At the bottom, select "Select app" and then "Mail"
   - Select "Select device" and then "Other (Custom name)"
   - Enter "West Construction Website" and click "Generate"

6. Google will display a 16-character app password. **Copy this password** as you'll use it in the environment variable setup.

## Setting Up Environment Variables in Vercel

1. Log in to your [Vercel Dashboard](https://vercel.com/dashboard)
2. Select the west-construction project
3. Go to Settings → Environment Variables
4. Add the following environment variables:

   | Name | Value | Environment |
   |------|-------|-------------|
   | GMAIL_USER | your-gmail@gmail.com | Production, Preview, Development |
   | GMAIL_APP_PASSWORD | your-16-character-app-password | Production, Preview, Development |
   | EMAIL_RECIPIENT | contact@west.construction | Production, Preview, Development |

5. Click "Save" and redeploy your application

## Testing Your Setup

After deploying with the environment variables, test the contact form on your website to ensure emails are being sent correctly.

## Local Development Setup

For local development, create a `.env.local` file in the root of your project with these variables:

```
GMAIL_USER=your-gmail@gmail.com
GMAIL_APP_PASSWORD=your-16-character-app-password
EMAIL_RECIPIENT=contact@west.construction
```

This file is included in `.gitignore` to prevent your credentials from being exposed in the repository.
