import Header from './components/Header/index.tsx';
import MainSection from './components/MainSection/index.tsx';
import ProfileCard from './components/ProfileCard/index.tsx';
import useFetchUser from './hooks/useFetchUser.ts';

export default function App(){
    const {user, setUser, fetchUser} = useFetchUser();

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


