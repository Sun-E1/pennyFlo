import {initializeApp} from 'firebase/app'
import {getAuth, GoogleAuthProvider} from 'firebase/auth'

const firebaseConfig = {
  apiKey: 'AIzaSyB75Zy2zeQeX9tiwcoFV2JTlseyw7EbCCc',
  authDomain: 'chatapp-b8e4a.firebaseapp.com',
  projectId: 'chatapp-b8e4a',
  storageBucket: 'chatapp-b8e4a.appspot.com',
  messagingSenderId: '59109685339',
  appId: '1:59109685339:web:fa9022deb7976776d2a77e',
  measurementId: 'G-M2QFYWZFYD',
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const auth = getAuth(app)
const provider = new GoogleAuthProvider()

export {auth, provider}
