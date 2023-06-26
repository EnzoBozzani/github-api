import { useState } from "react";
import { UserResponse } from '../UserResponse.ts';

export default function useFetchUser() {
    const [user, setUser]: [UserResponse, any] = useState<any>();
    const [validUsername, setValidUsername] = useState(true);
    async function fetchUser(username: string) {
        try {
            const response = await fetch(`https://api.github.com/users/${username}`).then(res => res.json());
            if (response.message){
                setValidUsername(false);
            } 
            else {
                setValidUsername(true);
            }
            setUser(response);
        } catch (error: any) {
            console.error(error);
        }
    }
    return { user, fetchUser, validUsername};
}