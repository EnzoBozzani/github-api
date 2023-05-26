import User from './ts/User.ts';
import Header from './components/Header/Header.tsx';

const usernameInput: HTMLInputElement | null = document.querySelector('#username-input');

async function fetchData(username: string){
    try {
        const response = await fetch(`https://api.github.com/users/${username}`);        
        const resJson = await response.json();
        const user = new User(resJson); 
    } catch (error){
        console.log(error);
    }
}

document.querySelector('#search-button')?.addEventListener('click', () => {
    if (usernameInput === null){
        alert('infomre um nome de usuário valido');
    } else {
        fetchData(usernameInput.value);
    }
})

export default function App(){
    return (
        <>
            <Header/>
        </>
    )
}



//saber como integrar a lógica dos arquivos ts com o tsx