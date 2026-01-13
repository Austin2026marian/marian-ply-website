# Formspree Setup Instructions

Your contact form is now configured to use Formspree. Follow these steps to complete the setup:

## Step 1: Create a Formspree Account

1. Go to: https://formspree.io
2. Click **"Sign Up"** (top right)
3. Sign up with your email: **Marianply123@gmail.com**
4. Verify your email address

## Step 2: Create a New Form

1. After logging in, click **"New Form"** button
2. **Form Name:** "Marian Ply Contact Form" (or any name you prefer)
3. **Email to send to:** Marianply123@gmail.com
4. Click **"Create Form"**

## Step 3: Get Your Form ID

1. After creating the form, you'll see a form endpoint URL
2. It looks like: `https://formspree.io/f/xxxxxxxxxx`
3. Copy the **form ID** (the part after `/f/`)
   - Example: If URL is `https://formspree.io/f/xjvqkpzn`, the ID is `xjvqkpzn`

## Step 4: Update Your Code

1. Open: `app/contact/page.tsx`
2. Find this line (around line 18):
   ```typescript
   const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
   ```
3. Replace `YOUR_FORM_ID` with your actual Formspree form ID
   - Example: `https://formspree.io/f/xjvqkpzn`

## Step 5: Test the Form

1. Go to your contact page
2. Fill out and submit the form
3. Check your email: **Marianply123@gmail.com**
4. You should receive the form submission!

## Free Plan Limits

- **50 submissions/month** (free plan)
- **Email notifications** included
- **Spam protection** included
- Upgrade to paid plans for more submissions

## Additional Settings (Optional)

In Formspree dashboard, you can:
- Customize email template
- Add redirect after submission
- Enable email notifications
- Set up custom thank you messages
- Add webhooks for integrations

## Troubleshooting

**Form not sending:**
- Make sure you replaced `YOUR_FORM_ID` with your actual form ID
- Check that your Formspree account is verified
- Verify the form endpoint URL is correct

**Not receiving emails:**
- Check spam folder
- Verify email address in Formspree settings
- Check Formspree dashboard for submission logs

## Security Note

The form ID is visible in your code (client-side), which is normal for Formspree. 
They have built-in spam protection. For production, you can also set up additional security features in Formspree dashboard.
