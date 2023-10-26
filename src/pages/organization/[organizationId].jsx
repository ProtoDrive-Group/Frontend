import { useBoardDetailQuery } from "@/store/pushNoteApi";
import { useRouter } from "next/router";


export default function OrganizationDetail() {
    const router = useRouter();
    const { data } = useBoardDetailQuery({ organizationId: router.query.organizationId });

    
}