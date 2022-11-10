import { initializeApp } from 'firebase/app';
import { Analytics, getAnalytics } from 'firebase/analytics';
import { FirebaseStorage, getStorage } from 'firebase/storage';

const firebaseConfig = {
	apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
	authDomain: 'store-base-firebase.firebaseapp.com',
	projectId: 'store-base-firebase',
	storageBucket: 'store-base-firebase.appspot.com',
	messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_SENDER_ID,
	appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
	measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID,
};

export const app = initializeApp(firebaseConfig);
let analytics: Analytics | null = null;
let storage: FirebaseStorage = getStorage(app);

if (app.name && typeof window !== 'undefined') {
	analytics = getAnalytics(app);
}

export { analytics, storage };
