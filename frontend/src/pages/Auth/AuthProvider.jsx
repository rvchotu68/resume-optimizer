import React from "react";

import { authWithProvider } from "../../services/fireAuth";
import { useNavigate } from "react-router-dom";

function AuthProvider({ to }) {
  const navigate = useNavigate();
  return (
    <>
      <div className="flex flex-col mt-10 w-full">
        <button
          onClick={async () => {
            try {
              await authWithProvider("google");
              navigate(to);
            } catch (err) {
              console.log(err.message);
            }
          }}
          className="cursor-pointer flex items-center gap-4 border py-2 justify-center rounded-xl border-neutral-400 mb-4"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 48 48"
            width="25"
            height="25"
          >
            <path
              fill="#FFC107"
              d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8
         c-6.627,0-12-5.373-12-12s5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657
         C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24s8.955,20,20,20c11.045,0,20-8.955,20-20
         C44,22.659,43.862,21.35,43.611,20.083z"
            />
            <path
              fill="#FF3D00"
              d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12
         c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4
         C16.318,4,9.656,8.337,6.306,14.691z"
            />
            <path
              fill="#4CAF50"
              d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238
         C29.211,35.091,26.715,36,24,36
         c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"
            />
            <path
              fill="#1976D2"
              d="M43.611,20.083H42V20H24v8h11.303
         c-0.792,2.237-2.231,4.166-4.087,5.571l6.19,5.238
         C36.971,39.205,44,34,44,24
         C44,22.659,43.862,21.35,43.611,20.083z"
            />
          </svg>
          <span className="font-semibold text-sm">Continue with Google</span>
        </button>
        <button
          onClick={async () => {
            try {
              await authWithProvider("github");
              navigate(to);
            } catch (err) {
              console.log(err.message);
            }
          }}
          className="cursor-pointer flex items-center gap-4 border py-2 justify-center rounded-xl border-neutral-400"
        >
          <svg
            width="25"
            height="25"
            viewBox="0 0 100 100"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M50 10C27.909 10 10 27.909 10 50c0 17.696 11.472 32.7 27.394 38.015 2.003.369 2.734-.87 2.734-1.934 0-.954-.035-3.487-.053-6.835-11.138 2.422-13.487-5.367-13.487-5.367-1.823-4.632-4.451-5.867-4.451-5.867-3.64-2.488.275-2.437.275-2.437 4.025.285 6.146 4.133 6.146 4.133 3.576 6.125 9.384 4.354 11.666 3.329.362-2.588 1.399-4.354 2.544-5.356-8.908-1.012-18.27-4.454-18.27-19.829 0-4.38 1.565-7.966 4.133-10.766-.414-1.013-1.792-5.091.393-10.613 0 0 3.367-1.078 11.033 4.114 3.2-.89 6.636-1.336 10.05-1.351 3.414.015 6.85.461 10.06 1.351 7.656-5.192 11.02-4.114 11.02-4.114 2.19 5.522.81 9.6.396 10.613 2.573 2.8 4.129 6.386 4.129 10.766 0 15.419-9.38 18.807-18.316 19.803 1.44 1.241 2.724 3.685 2.724 7.431 0 5.367-.049 9.697-.049 11.015 0 1.072.724 2.32 2.748 1.928C78.544 82.686 90 67.692 90 50 90 27.909 72.091 10 50 10z"
              fill="#333"
            />
          </svg>
          <span className="font-semibold text-sm">Continue with Github</span>
        </button>
      </div>
    </>
  );
}

export default AuthProvider;
