import { Outlet } from "react-router-dom";

function ApplicationLayout() {
    return (
        <>
        <h1>Header da aplicação</h1>
        <div>
            <Outlet />
        </div>
        </>
    )
}

export default ApplicationLayout