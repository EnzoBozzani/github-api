import User from './User';

const usernameInput: HTMLInputElement | null = document.querySelector('#username-input');

async function fetchData(username: string){
    try {
        const response = await fetch(`https://api.github.com/users/${username}`);        
        const resJson = await response.json();
        const user = new User(resJson);
        user.renderUserCard(document.querySelector('#main'));  
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


