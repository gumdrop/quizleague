import fb from "firebase/app"
import "firebase/firestore"
import "firebase/auth"

export const firebase = () => fb

export const googleAuth = () => new fb.auth.GoogleAuthProvider()
