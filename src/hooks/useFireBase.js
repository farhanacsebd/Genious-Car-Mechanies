import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthentication from "../Pages/LogIn/FireBase/FireBase.init";

initializeAuthentication();
const useFirebase = () => {
    const [user, setUser] = useState({});
    const [isLoding, SetIsLoding] = useState(true);

    const auth = getAuth();

    const signInUsingGoogle = () => {
        SetIsLoding(true);
        const googleProvider = new GoogleAuthProvider();
        signInWithPopup(auth, googleProvider)
            .then(result => {
                localStorage.setItem("user", JSON.stringify(result.user))
                setUser(JSON.parse(localStorage.getItem('user')))
            })
            .finally(() => SetIsLoding(false));

    }

    useEffect(() => {
        const unsubscribed = onAuthStateChanged(auth, user => {
            if (user) {
                setUser(user);
            }
            else {
                setUser({})
            }
            SetIsLoding(false);
        });
        return () => unsubscribed;
    }, [])

    const logOut = () => {
        SetIsLoding(true);
        signOut(auth)
            .then(() => { })
            .finally(() => SetIsLoding(false));
    }

    return {
        user,
        isLoding,
        signInUsingGoogle,
        logOut
    }
}
export default useFirebase;