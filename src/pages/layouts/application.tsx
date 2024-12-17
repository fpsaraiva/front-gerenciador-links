import { Outlet } from "react-router-dom";
import { AppSidebar } from "@/components/app-sidebar"
import { SidebarProvider } from "@/components/ui/sidebar";

function ApplicationLayout() {
    return (
        <SidebarProvider>
            <AppSidebar />
            <div>
                <Outlet />
            </div>
        </SidebarProvider>
    )
}

export default ApplicationLayout