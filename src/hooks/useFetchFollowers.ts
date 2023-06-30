import { useState } from "react";
import { UserResponse } from "../types/UserResponse";
import { FollowerResponse } from "../types/FollowerResponse";

export default function useFetchFollowers() {
    const [followers, setFollowers] = useState<FollowerResponse[]>([])
    async function fetchFollowers(u: UserResponse){
        const response = await fetch(u.followers_url).then(res => res.json());
        setFollowers(response);
    }

    return { followers, fetchFollowers };
}