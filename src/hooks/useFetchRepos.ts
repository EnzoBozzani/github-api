import { useState } from "react";
import RepoResponse from "../types/RepoResponse";
import { UserResponse } from "../types/UserResponse";

export default function useFetchRepos() {
    const [repos, setRepos] = useState<RepoResponse[]>([])
    async function fetchRepos(u: UserResponse){
        const response = await fetch(u.repos_url).then(res => res.json());
        setRepos(response);
    }

    return { repos, fetchRepos };
}