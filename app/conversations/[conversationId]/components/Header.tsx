'use client';

import useOtherUsers from "@/app/hooks/useOtherUsers";
import { Conversation, User } from "@prisma/client";
import { useMemo } from "react";

interface HeaderProps{
    conversation:Conversation & {
    users: User[]
    }
};

const Header:React.FC<HeaderProps> = ({
    conversation
}) => {

    const otherUser = useOtherUsers(conversation);
    const statusText = useMemo(()=>{
        if(conversation.isGroup){
            return `${conversation.users.length} members`;
        }

        return 'Active';
    },[conversation])

    return ( 
        <div>
            Header!
        </div>
     );
}
 
export default Header;