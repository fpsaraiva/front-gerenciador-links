import { Outlet } from "react-router-dom";

function AuthenticationLayout() {
    return (
        <div className="flex flex-col justify-center items-center">
            <div>
                <Outlet />
            </div>
        </div>
    )
}

export default AuthenticationLayout