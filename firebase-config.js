// Firebase Configuration File
// Replace the values below with your own Firebase project configuration

const firebaseConfig = {
    apiKey: "YOUR_API_KEY",
    authDomain: "YOUR_PROJECT_ID.firebaseapp.com",
    projectId: "YOUR_PROJECT_ID",
    storageBucket: "YOUR_PROJECT_ID.appspot.com",
    messagingSenderId: "YOUR_SENDER_ID",
    appId: "YOUR_APP_ID"
};

// Instructions to get these values:
// 1. Go to https://console.firebase.google.com/
// 2. Create a new project or select existing one
// 3. Click on the gear icon (⚙️) next to "Project Overview"
// 4. Select "Project settings"
// 5. Scroll down to "Your apps" section
// 6. Click "Add app" and choose "Web" (</>)
// 7. Register your app and copy the config values
// 8. Replace the values above with your actual config

// After setting up Firebase:
// 1. Go to Firestore Database in the Firebase Console
// 2. Create a database in test mode
// 3. The collections 'loveLetters' and 'quizScores' will be created automatically

export { firebaseConfig }; 