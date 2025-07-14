import { onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";
import auth from "../services/fireAuth";
import { useDispatch } from "react-redux";
import { setUser, signout } from "../store/userSlice";

export const useAuth = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        console.log("User logged in");
        console.log(
          setUser({
            uuid: user.uid,
            displayName: user.displayName,
            email: user.email,
            photoURL: user.photoURL,
          })
        );
        dispatch(
          setUser({
            uid: user.uid,
            displayName: user.displayName,
            email: user.email,
            photoURL: user.photoURL,
          })
        );
      } else {
        console.log("User logged out");
        dispatch(signout());
      }
    });

    return () => {
      unsubscribe();
    };
  }, []);
};
