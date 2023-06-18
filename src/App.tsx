import { useState } from 'react';
import Header from './components/Header/Header.tsx';

export default function App(){
    const [user, setUser] = useState('');
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
        </>
    )
}



//saber como integrar a lógica dos arquivos ts com o tsx