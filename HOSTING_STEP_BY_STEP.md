# Complete Step-by-Step Guide: Hosting Your Marian Ply Website

This guide will take you from zero to having your website live on the internet.

---

## 🎯 Overview

We'll use **Vercel** (recommended) because it's:
- ✅ Free
- ✅ Easy to use
- ✅ Automatic SSL certificate
- ✅ Fast CDN
- ✅ Automatic deployments from GitHub

---

## PART 1: Set Up GitHub (Required First Step)

### Step 1: Install Git

1. **Download Git for Windows:**
   - Visit: https://git-scm.com/download/win
   - Click the download button
   - Run the installer
   - Use **default settings** throughout installation
   - Click "Next" and "Install" until finished

2. **Verify Installation:**
   - Close and reopen PowerShell/Command Prompt
   - Type: `git --version`
   - You should see something like: `git version 2.xx.x`
   - If you see an error, restart your computer and try again

---

### Step 2: Create GitHub Account

1. **Go to GitHub:**
   - Visit: https://github.com
   - Click **"Sign up"** (top right)

2. **Create Account:**
   - Enter your email address
   - Create a password
   - Choose a username (e.g., "johnsmith" or "marianply")
   - Solve the puzzle/verification
   - Click **"Create account"**

3. **Verify Email:**
   - Check your email inbox
   - Click the verification link from GitHub
   - Choose your plan: **Free** is fine
   - Skip any additional setup questions (you can do them later)

---

### Step 3: Create GitHub Repository

1. **Login to GitHub:**
   - Go to: https://github.com
   - Login with your account

2. **Create New Repository:**
   - Click the **"+"** icon (top right corner)
   - Select **"New repository"**

3. **Repository Settings:**
   - **Repository name:** `marian-ply-website` (or any name you like)
   - **Description:** (Optional) "Marian Ply - Premium Plywood Manufacturer Website"
   - **Visibility:**
     - ✅ **Public** (free, anyone can see code but not edit)
     - OR **Private** (free, only you can see)
   - **DO NOT CHECK:**
     - ❌ "Add a README file"
     - ❌ "Add .gitignore"
     - ❌ "Choose a license"
   - Click **"Create repository"** (green button)

4. **Save the Repository URL:**
   - You'll see a page with setup instructions
   - Copy the HTTPS URL (looks like: `https://github.com/yourusername/marian-ply-website.git`)
   - You'll need this in the next step

---

### Step 4: Create Personal Access Token (GitHub Password)

GitHub requires a token instead of your password for security:

1. **Go to GitHub Settings:**
   - Click your **profile picture** (top right)
   - Click **"Settings"**

2. **Navigate to Tokens:**
   - Scroll down in the left sidebar
   - Click **"Developer settings"**
   - Click **"Personal access tokens"**
   - Click **"Tokens (classic)"**

3. **Generate New Token:**
   - Click **"Generate new token"** dropdown
   - Click **"Generate new token (classic)"**
   - **Note:** Type "Marian Ply Website"
   - **Expiration:** Choose "90 days" or "No expiration"
   - **Select scopes:** Check the box ✅ **"repo"** (this selects all repo permissions)
   - Scroll down and click **"Generate token"** (green button)

4. **Copy the Token:**
   - ⚠️ **IMPORTANT:** Copy the token NOW (looks like: `ghp_xxxxxxxxxxxxxx`)
   - You won't be able to see it again!
   - Save it in a text file temporarily
   - This is your "password" for Git operations

---

### Step 5: Upload Your Code to GitHub

Now we'll upload your website code to GitHub:

1. **Open PowerShell:**
   - Press `Windows Key + X`
   - Select **"Windows PowerShell"** or **"Terminal"**
   - OR search "PowerShell" in Start menu

2. **Navigate to Your Project:**
   ```powershell
   cd "c:\Tony\acer backup\Main work files\marian-ply-pulluvazhy"
   ```
   (Press Enter)

3. **Initialize Git:**
   ```powershell
   git init
   ```
   (Press Enter)

4. **Configure Git (First Time Only):**
   ```powershell
   git config user.name "Marian Ply"
   git config user.email "Marianply123@gmail.com"
   ```
   (Press Enter after each command)

5. **Add All Files:**
   ```powershell
   git add .
   ```
   (Press Enter)

6. **Create First Commit:**
   ```powershell
   git commit -m "Initial commit - Marian Ply website"
   ```
   (Press Enter)

7. **Add GitHub Remote:**
   ```powershell
   git remote add origin https://github.com/YOUR_USERNAME/marian-ply-website.git
   ```
   (Replace `YOUR_USERNAME` with your GitHub username, and `marian-ply-website` with your repository name)

8. **Set Main Branch:**
   ```powershell
   git branch -M main
   ```
   (Press Enter)

9. **Push to GitHub:**
   ```powershell
   git push -u origin main
   ```
   (Press Enter)

10. **Enter Credentials:**
    - **Username:** Enter your GitHub username
    - **Password:** Paste the Personal Access Token you created (NOT your GitHub password)
    - Press Enter

11. **Success!**
    - You should see: "Enumerating objects...", "Writing objects...", "To https://github.com/..."
    - Go to your GitHub repository page and refresh
    - You should see all your files!

---

## PART 2: Deploy to Vercel (Hosting)

### Step 6: Sign Up for Vercel

1. **Go to Vercel:**
   - Visit: https://vercel.com
   - Click **"Sign Up"** (top right)

2. **Sign Up with GitHub:**
   - Click **"Continue with GitHub"** button
   - Authorize Vercel to access your GitHub account
   - Click **"Authorize Vercel"** (green button)

3. **Complete Setup:**
   - Fill in your name (optional)
   - Choose your role (optional, can skip)
   - Click **"Continue"** or **"Skip"**

---

### Step 7: Deploy Your Website

1. **Import Project:**
   - On Vercel dashboard, click **"Add New..."** (top right)
   - Click **"Project"**

2. **Select Repository:**
   - You'll see a list of your GitHub repositories
   - Find **"marian-ply-website"** (or your repository name)
   - Click **"Import"** next to it

3. **Configure Project:**
   - **Project Name:** `marian-ply-website` (or leave default)
   - **Framework Preset:** Should auto-detect "Next.js" ✅
   - **Root Directory:** Leave as `./` (default)
   - **Build Command:** Should be `npm run build` ✅
   - **Output Directory:** Should be `.next` ✅
   - **Install Command:** Should be `npm install` ✅
   - **DO NOT change anything** - Vercel auto-detects everything for Next.js!

4. **Deploy:**
   - Scroll down
   - Click **"Deploy"** button (bottom)

5. **Wait for Deployment:**
   - You'll see a deployment log
   - It will show: "Building...", "Installing dependencies...", etc.
   - This takes 1-3 minutes
   - Wait until you see: ✅ **"Ready"**

6. **Your Website is Live!**
   - You'll see a success message
   - Your website URL will be: `https://marian-ply-website-xxxxx.vercel.app`
   - Click the URL to see your live website!
   - ⚠️ **Save this URL** - this is your website address!

---

## PART 3: Custom Domain (Optional - Later)

You can add your own domain name later:

1. **In Vercel Dashboard:**
   - Go to your project
   - Click **"Settings"** tab
   - Click **"Domains"** in left sidebar
   - Enter your domain name (e.g., `www.marianply.com`)
   - Follow the DNS setup instructions

---

## ✅ Success Checklist

- [ ] Git installed and verified
- [ ] GitHub account created
- [ ] GitHub repository created
- [ ] Personal Access Token created
- [ ] Code pushed to GitHub
- [ ] Vercel account created
- [ ] Website deployed on Vercel
- [ ] Website is accessible via Vercel URL

---

## 🔄 Making Updates (After Initial Setup)

Whenever you make changes to your website:

1. **Make your changes** to the code

2. **Commit and Push:**
   ```powershell
   cd "c:\Tony\acer backup\Main work files\marian-ply-pulluvazhy"
   git add .
   git commit -m "Description of changes"
   git push
   ```

3. **Vercel Auto-Deploys:**
   - Vercel automatically detects the push
   - Deploys your updates in 1-2 minutes
   - Your live site updates automatically!

---

## 🆘 Troubleshooting

### Git Issues:

**"git: command not found"**
- Git is not installed or not in PATH
- Install Git from https://git-scm.com/download/win
- Restart PowerShell after installation

**"fatal: not a git repository"**
- You're not in the project folder
- Run: `cd "c:\Tony\acer backup\Main work files\marian-ply-pulluvazhy"`

**"remote origin already exists"**
```powershell
git remote remove origin
git remote add origin https://github.com/YOUR_USERNAME/marian-ply-website.git
```

**"Authentication failed"**
- Make sure you're using Personal Access Token, not GitHub password
- Token must have "repo" scope checked
- Try generating a new token

### Vercel Issues:

**Build Failed**
- Check the build logs in Vercel dashboard
- Common issues:
  - Missing dependencies (shouldn't happen)
  - Type errors (check the error message)
  - Make sure you ran `npm run build` successfully locally first

**Website Not Loading**
- Wait 1-2 minutes after deployment
- Check deployment status in Vercel dashboard
- Try the deployment URL again

---

## 📞 Need Help?

If you get stuck:
1. Check the error message carefully
2. Read the troubleshooting section above
3. Check Vercel deployment logs for errors
4. Make sure all steps were completed in order

---

## 🎉 Congratulations!

Once you complete these steps, your website will be:
- ✅ Live on the internet
- ✅ Accessible to anyone
- ✅ Has automatic SSL (secure)
- ✅ Fast loading with CDN
- ✅ Auto-deploys when you update code

**Your website URL will be:** `https://your-project-name.vercel.app`

Share this URL with anyone to view your website!
