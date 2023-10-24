import { AUTH } from "@/constants/main";
import { useSelfUserQuery } from "@/store/pushNoteApi";
import { usePathname, useRouter } from "next/navigation";
import Cookies from "universal-cookie";

const unauthenticatedPaths = ['/login', '/auth']

export default function RouteGaurd({ children }) {
    const pathname = usePathname();
    const { data: user, isLoading, isError } = useSelfUserQuery(null, {
        skip: unauthenticatedPaths.includes(pathname)
    });
    
    const cookies = new Cookies(null, { path: '/' })
    const router = useRouter();

    if (unauthenticatedPaths.includes(pathname)) return children;

    if (isError) {
        cookies.remove(AUTH.SESSION_TOKEN)
        router.push('/login')
    }

    if (isLoading) return (
        <div>Loading...</div>
    )

    
    if (user) return children

    return <div>Not Authenticated</div>
}