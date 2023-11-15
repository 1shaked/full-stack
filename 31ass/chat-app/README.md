
### creating the chat app
1. ``` npm install firebase ```
2. create a new file name firebase_connection.ts that will connect to the firebase server
``` // Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "",
  authDomain: "",
  projectId: "",
  storageBucket: "",
  messagingSenderId: "",
  appId: ""
};

// Initialize Firebase
const appFirebase = initializeApp(firebaseConfig);

```

#### install firebase tools 
1. ``` npm install -g firebase-tools ```

