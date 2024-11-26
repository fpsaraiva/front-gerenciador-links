import { Outlet } from "react-router-dom";

function AuthLayout() {
    return (
        <>
        <h1>Header da página</h1>
        <div>
            <Outlet />
        </div>
        </>
    )
}

export default AuthLayout