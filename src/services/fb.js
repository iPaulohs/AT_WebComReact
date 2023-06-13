import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBd_6pK5EG-xT_CE9ZLHPuwO26iydOC8Cc",
  authDomain: "at-react-phs.firebaseapp.com",
  projectId: "at-react-phs",
  storageBucket: "at-react-phs.appspot.com",
  messagingSenderId: "245188388766",
  appId: "1:245188388766:web:c5af760f40b0382e6ad88f"
};

const app = initializeApp(firebaseConfig);
const dataBaseFirestore = getFirestore(app);

export default app