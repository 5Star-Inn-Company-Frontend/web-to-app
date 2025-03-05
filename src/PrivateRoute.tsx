import { Navigate } from "react-router-dom";
import { ReactNode } from "react";
import { useSelector } from "react-redux";
import { RootState } from "./redux/store";

function PrivateRoute({ children }: { children: ReactNode }) {
    const { token, user } = useSelector((state: RootState) => state.auth);

    // If no user is logged in, redirect to the sign-in page
    if (!user || !token) {
        return <Navigate to="/auth/signin" replace />;
    }

    // If the user is logged in, render the children components (protected routes)
    return children;
}

export default PrivateRoute;
