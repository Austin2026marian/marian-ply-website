# Troubleshooting Git Issues

## Problem: Git Command Not Found

Your repository is initialized, but Git command isn't working in PowerShell.

---

## Solution 1: Restart PowerShell (Most Common Fix)

1. **Close PowerShell completely**
2. **Open a NEW PowerShell window**
3. **Try again:**
   ```powershell
   git --version
   ```

If this works, continue with the push commands.

---

## Solution 2: Use Git Bash Instead

If PowerShell still doesn't work, use Git Bash:

1. **Search for "Git Bash"** in Start menu
2. **Open Git Bash**
3. **Navigate to your project:**
   ```bash
   cd "/c/Tony/acer backup/Main work files/marian-ply-pulluvazhy"
   ```
4. **Run the commands** (same as PowerShell)

---

## Solution 3: Check Git Installation Path

1. **Check if Git is installed:**
   - Look for "Git" folder in: `C:\Program Files\Git\`
   - Or: `C:\Program Files (x86)\Git\`

2. **If Git exists but not working:**
   - Restart your computer
   - Or manually add Git to PATH (advanced)

---

## Solution 4: Use GitHub Desktop (Easiest - No Command Line!)

If Git command line is too complicated:

### Download GitHub Desktop:
1. **Go to:** https://desktop.github.com
2. **Download and install GitHub Desktop**
3. **Sign in with GitHub** (use your GitHub account)

### Push Your Code:
1. **Open GitHub Desktop**
2. **File → Add Local Repository**
3. **Browse to:** `c:\Tony\acer backup\Main work files\marian-ply-pulluvazhy`
4. **Click "Add Repository"**
5. **Click "Publish repository"** (top right)
6. **Select:** `Austin2026marian/marian-ply-website`
7. **Click "Publish Repository"**

**Done!** Your code will be on GitHub.

---

## Solution 5: Manual Upload via GitHub Website

If nothing else works:

1. **Go to:** https://github.com/Austin2026marian/marian-ply-website
2. **Click "uploading an existing file"** (if repository is empty)
3. **Drag and drop your project folder** OR
4. **Click "choose your files"** and select all files
5. **Scroll down, add commit message:** "Initial commit"
6. **Click "Commit changes"**

**Note:** This method uploads files but doesn't preserve Git history.

---

## Quick Test Commands

Try these one by one to see what works:

```powershell
# Test 1: Check Git version
git --version

# Test 2: Check if in project folder
pwd

# Test 3: Check Git status
git status

# Test 4: Check remote
git remote -v
```

---

## What Step Are You Stuck On?

Tell me which step:
- [ ] Installing Git
- [ ] Git command not found
- [ ] Creating Personal Access Token
- [ ] Pushing code
- [ ] Something else?

I can help with the specific issue!
