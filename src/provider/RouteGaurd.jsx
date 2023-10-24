import { AUTH } from "@/constants/main";
import { useSelfUserQuery } from "@/store/pushNoteApi";
import Cookies from "universal-cookie";

export default function RouteGaurd({ children }) {
    const { data: user, isLoading, isError } = useSelfUserQuery();
    const cookies = new Cookies(null, { path: '/' })
    
    if (isError) {
        cookies.remove(AUTH.SESSION_TOKEN)
    }

    if (isLoading) return (
        <div>Loading...</div>
    )

    
    if (user) return children

    return <div>Not Authenticated</div>
}