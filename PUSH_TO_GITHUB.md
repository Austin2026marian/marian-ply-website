# Push Your Code to GitHub - Step by Step

You've created a GitHub repository! Follow these steps to upload your code.

## Step 1: Install Git (If Not Already Installed)

1. **Download Git:**
   - Go to: https://git-scm.com/download/win
   - Download and install Git for Windows
   - Use default settings during installation

2. **Restart Your Computer** (after installation)

3. **Verify Installation:**
   - Open PowerShell or Command Prompt
   - Type: `git --version`
   - You should see the Git version number

---

## Step 2: Get Your GitHub Repository URL

1. **Go to your GitHub repository** (the one you just created)
2. **Click the green "Code" button**
3. **Copy the HTTPS URL** (looks like: `https://github.com/yourusername/repository-name.git`)
4. **Save this URL** - you'll need it in the next steps

---

## Step 3: Open PowerShell in Your Project Folder

1. **Press `Windows Key + X`**
2. **Select "Windows PowerShell"** or **"Terminal"**
3. **Navigate to your project:**
   ```powershell
   cd "c:\Tony\acer backup\Main work files\marian-ply-pulluvazhy"
   ```

---

## Step 4: Initialize Git and Push Code

Run these commands one by one (press Enter after each):

### 4.1: Initialize Git (if not already done)
```powershell
git init
```

### 4.2: Configure Git (First Time Only)
```powershell
git config user.name "Marian Ply"
git config user.email "Marianply123@gmail.com"
```

### 4.3: Add All Files
```powershell
git add .
```

### 4.4: Create First Commit
```powershell
git commit -m "Initial commit - Marian Ply website"
```

### 4.5: Add GitHub Repository
```powershell
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPOSITORY_NAME.git
```
**Replace:**
- `YOUR_USERNAME` with your GitHub username
- `YOUR_REPOSITORY_NAME` with your repository name

**Example:**
```powershell
git remote add origin https://github.com/marianply/marian-ply-website.git
```

### 4.6: Set Main Branch
```powershell
git branch -M main
```

### 4.7: Push to GitHub
```powershell
git push -u origin main
```

---

## Step 5: Enter GitHub Credentials

When you run `git push`, GitHub will ask for:

1. **Username:** Your GitHub username
2. **Password:** Use a **Personal Access Token** (NOT your GitHub password)

### How to Create Personal Access Token:

1. **GitHub Settings:**
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

## Step 6: Verify Upload

1. **Go to your GitHub repository page**
2. **Refresh the page**
3. **You should see all your files!**

---

## Quick Command Reference

```powershell
# Navigate to project
cd "c:\Tony\acer backup\Main work files\marian-ply-pulluvazhy"

# Initialize Git
git init

# Configure (first time only)
git config user.name "Marian Ply"
git config user.email "Marianply123@gmail.com"

# Add files
git add .

# Commit
git commit -m "Initial commit - Marian Ply website"

# Add remote (replace with your repository URL)
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git

# Push
git branch -M main
git push -u origin main
```

---

## Troubleshooting

### "git: command not found"
- Git is not installed or not in PATH
- Install Git from https://git-scm.com/download/win
- Restart computer after installation

### "remote origin already exists"
```powershell
git remote remove origin
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git
```

### "Authentication failed"
- Make sure you're using Personal Access Token, not password
- Token needs `repo` scope checked
- Try generating a new token

### "Permission denied"
- Check repository name matches
- Verify you have access to the repository
- Make sure you're using the correct GitHub username

---

## After Pushing to GitHub

Once your code is on GitHub, you can:

1. **Deploy to Vercel:**
   - Go to https://vercel.com
   - Sign up with GitHub
   - Import your repository
   - Deploy automatically!

2. **Deploy to Netlify:**
   - Go to https://netlify.com
   - Sign up with GitHub
   - Import your repository
   - Deploy!

---

## Need Help?

If you get stuck:
1. Check the error message carefully
2. Make sure Git is installed and restarted your computer
3. Verify your repository URL is correct
4. Ensure you're using Personal Access Token (not password)

Good luck! 🚀
