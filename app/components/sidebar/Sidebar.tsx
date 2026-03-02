import getCurrentUsers from "@/app/actions/getCurrentUsers";
import DesktopSidebar from "./DesktopSiderbar";
import MobileFooter from "./MobileFooter";

async function Sidebar({children}: {
    children: React.ReactNode;
}){
    const currentUser = await getCurrentUsers();
    return(
        <div className="h-full">
            <DesktopSidebar currentUser={currentUser!}/>
            <MobileFooter/>
            <main className="lg:pl-20 h-full">
                {children}
            </main>
        </div>
    )
}

export default Sidebar;