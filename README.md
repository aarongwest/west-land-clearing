# WestWeld - Professional Welding Services Website

A Next.js website with TailwindCSS for WestWeld, a professional welding company in Utah County.

## Features

- Modern, professional design with black and white color scheme
- Mobile-responsive layout
- Contact forms with email notifications
- Service pages for different welding services
- Blog section for industry insights
- Quick contact form on every page

## Getting Started

```bash
# Install dependencies
npm install

# Run the development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

## Setting Up Gmail for Contact Forms

The contact forms on this website use Nodemailer with Gmail to send email notifications. To set this up:

1. **Create a Gmail App Password:**

   Gmail requires an "App Password" for applications to send emails, as regular passwords don't work with third-party apps.

   a. Go to your [Google Account](https://myaccount.google.com/).
   
   b. Navigate to "Security" and enable "2-Step Verification" if you haven't already.
   
   c. After enabling 2-Step Verification, go back to the Security page and find "App passwords" (under "Signing in to Google").
   
   d. Create a new app password:
      - Select "Mail" for the app
      - Choose "Other (Custom name)" for the device
      - Enter a name like "WestWeld Website"
      - Click "Generate"
   
   e. Google will display a 16-character password. **Copy this password** as it will only be shown once.

2. **Set Up Environment Variables:**

   a. Copy the `.env.local.example` file to `.env.local`:
   ```bash
   cp .env.local.example .env.local
   ```
   
   b. Edit the `.env.local` file and add your Gmail credentials:
   ```
   GMAIL_USER=your-email@gmail.com
   GMAIL_APP_PASSWORD=your-16-character-app-password
   EMAIL_RECIPIENT=recipient-email@example.com
   ```
   
   Note: If `EMAIL_RECIPIENT` is not specified, the `GMAIL_USER` will be used as the recipient.

3. **Restart Your Development Server:**

   After setting up the environment variables, restart your development server:
   ```bash
   npm run dev
   ```

4. **For Production Deployment:**

   When deploying to Vercel, add these same environment variables in the Vercel project settings:
   
   - Go to your project on the Vercel dashboard
   - Click on "Settings" → "Environment Variables"
   - Add each variable (`GMAIL_USER`, `GMAIL_APP_PASSWORD`, and optionally `EMAIL_RECIPIENT`)
   - Deploy or redeploy your application

## Customizing the Quick Contact Form

The contact form appears on the right side of all pages using the `TwoColumnLayout` component. You can customize the appearance of the form in the `src/components/forms/QuickContactForm.tsx` file.

If you want to adjust the size or positioning of the form vs. the main content, you can modify the column proportions in the `TwoColumnLayout` component: `src/components/layout/TwoColumnLayout.tsx`.
