import getConversations from "../actions/getConversations"
import Sidebar from "../components/sidebar/Sidebar"
import ConversationList from "./components/ConversationList"

export default async function ConversationLayout({
    children
}: {
    children:React.ReactNode
}) {
    const Conversations = await getConversations();
    return(
        <Sidebar>
            <div className="h-full">
                <ConversationList 
                initialItems= {Conversations}
                />
                {children}
            </div>
        </Sidebar>
    )
}