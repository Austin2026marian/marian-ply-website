# Push Your Code to GitHub - Exact Commands

## Your Repository Details:
- **Repository URL:** https://github.com/Austin2026marian/marian-ply-website.git
- **Username:** Austin2026marian
- **Repository Name:** marian-ply-website

---

## Step 1: Install Git (If Not Installed)

1. **Download Git:**
   - Go to: https://git-scm.com/download/win
   - Download and install Git for Windows
   - Use default settings during installation

2. **Restart Your Computer** (after installation)

3. **Verify Installation:**
   - Open PowerShell
   - Type: `git --version`
   - You should see the Git version number

---

## Step 2: Open PowerShell

1. **Press `Windows Key + X`**
2. **Select "Windows PowerShell"** or **"Terminal"**

---

## Step 3: Run These Commands (Copy & Paste One by One)

### Navigate to Your Project:
```powershell
cd "c:\Tony\acer backup\Main work files\marian-ply-pulluvazhy"
```

### Initialize Git:
```powershell
git init
```

### Configure Git (First Time Only):
```powershell
git config user.name "Marian Ply"
git config user.email "Marianply123@gmail.com"
```

### Add All Files:
```powershell
git add .
```

### Create First Commit:
```powershell
git commit -m "Initial commit - Marian Ply website"
```

### Add Your GitHub Repository:
```powershell
git remote add origin https://github.com/Austin2026marian/marian-ply-website.git
```

### Set Main Branch:
```powershell
git branch -M main
```

### Push to GitHub:
```powershell
git push -u origin main
```

---

## Step 4: Enter GitHub Credentials

When you run `git push`, GitHub will ask for:

1. **Username:** `Austin2026marian`
2. **Password:** Use a **Personal Access Token** (NOT your GitHub password)

### How to Create Personal Access Token:

1. **Go to GitHub:**
   - Click your profile picture (top right) → **Settings**
   - Scroll down → **Developer settings**
   - Click **Personal access tokens** → **Tokens (classic)**

2. **Generate New Token:**
   - Click **Generate new token** → **Generate new token (classic)**
   - **Note:** "Marian Ply Website"
   - **Expiration:** Choose "90 days" or "No expiration"
   - **Select scopes:** Check ✅ **"repo"** (this selects all repo permissions)
   - Click **Generate token**

3. **Copy the Token:**
   - ⚠️ **IMPORTANT:** Copy the token NOW (looks like: `ghp_xxxxxxxxxxxxxx`)
   - You won't be able to see it again!
   - Use this token as your password when Git asks

---

## Step 5: Verify Upload

1. **Go to:** https://github.com/Austin2026marian/marian-ply-website
2. **Refresh the page**
3. **You should see all your files!**

---

## All Commands in One Block (Copy All):

```powershell
cd "c:\Tony\acer backup\Main work files\marian-ply-pulluvazhy"
git init
git config user.name "Marian Ply"
git config user.email "Marianply123@gmail.com"
git add .
git commit -m "Initial commit - Marian Ply website"
git remote add origin https://github.com/Austin2026marian/marian-ply-website.git
git branch -M main
git push -u origin main
```

---

## After Pushing to GitHub

Once your code is on GitHub, you can deploy to Vercel:

1. **Go to:** https://vercel.com
2. **Sign up/Login with GitHub**
3. **Click "Add New..." → "Project"**
4. **Import:** `Austin2026marian/marian-ply-website`
5. **Click "Deploy"**
6. **Your website will be live in 2 minutes!**

---

## Troubleshooting

### "git: command not found"
- Git is not installed
- Install from https://git-scm.com/download/win
- Restart computer after installation

### "remote origin already exists"
```powershell
git remote remove origin
git remote add origin https://github.com/Austin2026marian/marian-ply-website.git
```

### "Authentication failed"
- Use Personal Access Token, not GitHub password
- Token needs `repo` scope checked

---

## Success! 🎉

After pushing, your repository will be at:
**https://github.com/Austin2026marian/marian-ply-website**

Then deploy to Vercel for free hosting!
