import { useState } from "react";
import { UserResponse } from '../UserResponse.ts';

export default function useFetchUser() {
    const [user, setUser]: [UserResponse, any] = useState(() => {
        let u: any;
        return u;
    });
    async function fetchUser(username: string) {
        try {
            const response = await fetch(`https://api.github.com/users/${username}`).then(res => res.json());
            setUser(response);
            console.log(response);
        } catch (error: any) {
            console.error(error);
        }
    }
    return { user, setUser, fetchUser};
}