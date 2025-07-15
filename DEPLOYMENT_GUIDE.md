# Deployment Guide for NextCGG

## Current Status
✅ GitHub repository created: https://github.com/chernikov/nextcgg  
✅ Code pushed to repository  
❌ Firebase project needs to be created  
❌ GitHub Actions workflow needs to be uploaded  

## Next Steps

### 1. Create Firebase Project
```bash
# Login to Firebase (you'll need to do this interactively)
firebase login

# Create Firebase project
firebase projects:create nextcgg --display-name "NextCGG"

# Enable hosting
firebase hosting:enable

# Initialize Firebase in the project
firebase init hosting
```

### 2. Upload GitHub Actions Workflow
The workflow file couldn't be pushed due to OAuth scope limitations. You need to:
1. Go to https://github.com/chernikov/nextcgg
2. Create a new file `.github/workflows/deploy.yml` manually
3. Copy the content from the local file

### 3. Set up GitHub Secrets
Add these secrets to your GitHub repository (Settings > Secrets and variables > Actions):
- `FIREBASE_SERVICE_ACCOUNT`: Firebase service account JSON
- `MY_SECRET`: Your custom secret to display

### 4. Get Firebase Service Account
```bash
# Generate service account key
firebase projects:list
firebase projects:use nextcgg
# Go to Firebase Console > Project Settings > Service accounts > Generate new private key
```

### 5. Deploy
```bash
# Install dependencies
npm install

# Build project
npm run build

# Deploy to Firebase
firebase deploy
```

## Manual Commands to Run
```bash
cd /mnt/c/projects/uss/nextcgg
firebase login
firebase projects:create nextcgg --display-name "NextCGG"
firebase use nextcgg
firebase deploy
```