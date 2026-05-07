# Detailed Guide: Gmail App Password + Vercel Setup

This guide walks you through the complete process of:
1. Creating a Gmail app password
2. Adding that password to Vercel environment variables
3. Testing the contact form functionality

## Step 1: Create a Gmail App Password

### Access Your Google Account Security Settings
1. Visit [https://myaccount.google.com/security](https://myaccount.google.com/security)
2. Sign in with your Gmail account (aaron@zygur.com)

### Enable 2-Step Verification (if not already enabled)
1. In the "Signing in to Google" section, find "2-Step Verification"
2. Click on it and follow the prompts to enable it
3. This typically involves verifying your phone number and receiving verification codes via text

### Generate the App Password
1. Return to the security page after enabling 2-Step Verification
2. Scroll down to find "App passwords" (it appears after 2-Step Verification is enabled)
3. Click on "App passwords"
4. You may need to verify your password again
5. On the App passwords page:
   - Select "Mail" from the "Select app" dropdown
   - Select "Other (Custom name)" from the "Select device" dropdown
   - Enter "WestWeld Website" as the name
   - Click "Generate"
6. Google will display a 16-character password (with spaces)
7. **IMPORTANT**: Copy this password immediately - it will only be shown once!

![Google App Password Example](https://i.imgur.com/example.png)

## Step 2: Add Environment Variables to Vercel

### Log in to Vercel
1. Visit [https://vercel.com/dashboard](https://vercel.com/dashboard)
2. Sign in with your account credentials

### Access Your Project
1. From the dashboard, click on the "westweld" project
2. This takes you to the project overview page

### Navigate to Environment Variables
1. Click on the "Settings" tab at the top of the page
2. In the left sidebar, click on "Environment Variables"

### Add the Required Variables
Add each of these variables one by one:

#### GMAIL_USER Variable
1. Click the "Add New" button
2. For "Name" enter: `GMAIL_USER`
3. For "Value" enter: `aaron@zygur.com`
4. Under "Environments" select all environments (Production, Preview, Development)
5. Click "Add"

#### GMAIL_APP_PASSWORD Variable
1. Click the "Add New" button again
2. For "Name" enter: `GMAIL_APP_PASSWORD`
3. For "Value" enter the app password you generated (without spaces)
4. Under "Environments" select all environments
5. Click "Add"

#### EMAIL_RECIPIENT Variable
1. Click the "Add New" button once more
2. For "Name" enter: `EMAIL_RECIPIENT`
3. For "Value" enter: `aaron@zygur.com`
4. Under "Environments" select all environments
5. Click "Add"

Your environment variables section should look something like this (with values hidden):

![Vercel Environment Variables Example](https://i.imgur.com/example2.png)

## Step 3: Redeploy Your Application

### Trigger a New Deployment
1. Go to the "Deployments" tab in your project
2. Find your latest deployment
3. Click the three dots menu (⋯) next to it
4. Select "Redeploy"
5. Confirm the redeployment

### Monitor the Deployment
1. Vercel will show the deployment process in real-time
2. Wait for it to complete (typically takes 1-2 minutes)
3. Look for any error messages in the build logs

## Step 4: Test the Contact Form

### Visit Your Live Website
1. Once deployment is complete, click on "Visit" to open your site
2. Navigate to the Contact page

### Submit a Test Form
1. Fill out the contact form with test information:
   - Name: Test User
   - Email: your-email@example.com (use an email you can access)
   - Message: This is a test message
2. Click "Submit"
3. You should see a success message

### Verify Email Delivery
1. Check your inbox at aaron@zygur.com
2. You should receive an email with the test submission
3. Verify that all form fields are correctly included in the email

## Troubleshooting

### If Emails Are Not Being Received:
1. Check Vercel logs for any errors during form submission
2. Verify that all environment variables are correctly set
3. Make sure the Gmail app password was entered correctly (no spaces)
4. Check your Gmail spam folder
5. Ensure that your Gmail account hasn't revoked the app password

### Common Issues:
- **Authentication Error**: The app password may be incorrect or expired
- **Gmail Security Settings**: Gmail might be blocking the connection
- **Rate Limiting**: Gmail limits the number of emails you can send per day
- **Server Errors**: Check Vercel function logs for detailed error messages

## Security Notes

- The app password gives limited access to your Gmail account for sending emails only
- It's good practice to regenerate your app password periodically
- Your credentials are encrypted and securely stored by Vercel
- Never share your app password or include it in client-side code
