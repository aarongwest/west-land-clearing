# Setting Up Environment Variables in Vercel

For the contact forms to work correctly on your deployed site, you need to set up environment variables in Vercel. These variables are used by the contact form API to send emails through your Gmail account.

## Environment Variables to Add

Add the following environment variables in your Vercel project:

1. `GMAIL_USER` - Your Gmail address (aaron@zygur.com)
2. `GMAIL_APP_PASSWORD` - Your Gmail app password (Dagger77!)
3. `EMAIL_RECIPIENT` - The email address where form submissions should be sent (aaron@zygur.com)

## Steps to Add Environment Variables in Vercel

1. **Log in to your Vercel account** at [vercel.com](https://vercel.com)

2. **Select your project** (westweld) from the dashboard

3. **Go to Project Settings**:
   - Click on the "Settings" tab at the top of the project page

4. **Navigate to Environment Variables**:
   - In the left sidebar, click on "Environment Variables"

5. **Add each environment variable**:
   - Click on "Add New"
   - Enter the name (e.g., `GMAIL_USER`) and value (e.g., `aaron@zygur.com`)
   - Under "Environments", select all environments (Production, Preview, Development)
   - Click "Save"
   - Repeat for each environment variable

6. **Redeploy your application**:
   - After adding all environment variables, go to the "Deployments" tab
   - Find your latest deployment
   - Click on the three dots menu (⋯) and select "Redeploy"

## Important Notes

1. **Gmail App Password**: Using a Gmail app password is more secure than your regular Gmail password. If you haven't already created an app password:
   - Go to your Google Account > Security > 2-Step Verification
   - At the bottom, click on "App passwords"
   - Create a new app password for "Mail" and "Other (Custom name)" - name it "WestWeld Website"
   - Use the generated password in place of your regular Gmail password

2. **Environment Variables Security**: Environment variables in Vercel are encrypted and securely stored. However, it's good practice to periodically update your Gmail app password.

3. **Local Development**: Your local development environment will continue to use the .env.local file for environment variables, which we've already set up.
