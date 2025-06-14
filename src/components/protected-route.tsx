import { useAppSelector } from "@/redux/hook";
import { RootState } from "@/redux/store";
import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoute = () => {
    const user = useAppSelector((state: RootState) => state.auth.user);

    if (!user) {
        return <Navigate to="auth/signin" replace />;
    }

    return <Outlet />;
};

export default ProtectedRoute;
