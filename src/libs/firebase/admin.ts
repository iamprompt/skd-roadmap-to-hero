import { cert, getApp, getApps, initializeApp } from 'firebase-admin/app'
import { getFirestore } from 'firebase-admin/firestore'

const adminInstance = () => {
  if (getApps().length === 0) {
    return initializeApp({
      credential: cert({
        projectId: process.env.FIREBASE_PROJECT_ID,
        clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
        privateKey: (process.env.FIREBASE_PRIVATE_KEY || '').replace(
          /\\n/g,
          '\n'
        ),
      }),
      projectId: process.env.FIREBASE_PROJECT_ID,
    })
  } else {
    return getApp()
  }
}

export const db = getFirestore(adminInstance())
