# Next.js Firebase Deployment with GitHub Actions Secret

This project demonstrates how to deploy a Next.js application to Firebase Hosting using GitHub Actions, with the ability to display a secret value passed from GitHub Actions.

## Setup Instructions

### 1. Firebase Project Setup
1. Create a new Firebase project at https://console.firebase.google.com
2. Enable Firebase Hosting
3. Update `.firebaserc` with your project ID
4. Update `deploy.yml` with your project ID

### 2. GitHub Secrets Configuration
Add these secrets to your GitHub repository (Settings > Secrets and variables > Actions):

- `FIREBASE_SERVICE_ACCOUNT`: Your Firebase service account JSON key
- `MY_SECRET`: The secret value you want to display in the app

### 3. Getting Firebase Service Account Key
1. Go to Firebase Console > Project Settings > Service accounts
2. Click "Generate new private key"
3. Copy the entire JSON content and paste it as the `FIREBASE_SERVICE_ACCOUNT` secret

### 4. Local Development
```bash
npm install
npm run dev
```

### 5. Deployment
Push to the `main` branch and GitHub Actions will automatically:
1. Build the Next.js app with your secret
2. Deploy to Firebase Hosting
3. Display the secret on the live site

## Files Structure
- `pages/index.js` - Main page that displays the secret
- `next.config.js` - Next.js configuration for static export
- `firebase.json` - Firebase Hosting configuration
- `.firebaserc` - Firebase project configuration
- `.github/workflows/deploy.yml` - GitHub Actions workflow

## Security Note
The secret will be visible in the client-side JavaScript bundle since it's prefixed with `NEXT_PUBLIC_`. This is intentional for demonstration purposes, but in production, sensitive secrets should be handled server-side.