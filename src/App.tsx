import { useState } from 'react';
import Header from './components/Header/Header.tsx';
import MainSection from './components/MainSection/index.tsx';
import ProfileCard from './components/ProfileCard/index.tsx';
import { UserResponse } from './UserResponse.ts';

export default function App(){
    const [user, setUser]: [UserResponse, any] = useState(() => {
        let u: any;
        return u;
    });
    async function fetchUser(username: string) {
        try {
            const response = await fetch(`https://api.github.com/users/${username}`).then(res => res.json());
            setUser(response);
            console.log(response);
        } catch (error: any){
            console.error(error);
        }
    }
    return (
        <>
            <Header fetchUser={fetchUser}/>
            <MainSection>
                {user ? 
                (
                    <ProfileCard user={user}/>
                ) 
                : 
                (
                    <div className="tip-div">
                        <p className="display-5 white-color text-center">Oops... Nothing here yet! <span className='tip-text'>Try searching a GitHub user!</span></p>
                    </div>
                )}
            </MainSection>
        </>
    )
}



//saber como integrar a lógica dos arquivos ts com o tsx