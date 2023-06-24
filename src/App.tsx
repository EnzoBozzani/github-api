import useFetchUser from './hooks/useFetchUser.ts';
import Header from './components/Header/index.tsx';
import MainSection from './components/MainSection/index.tsx';
import ProfileCard from './components/ProfileCard/index.tsx';
import SocialSection from './components/SocialSection/index.tsx';


export default function App() {
    const { user, fetchUser } = useFetchUser();

    return (
        <>
            <Header fetchUser={fetchUser} />
            <MainSection>
                {user ?
                    (
                        <>
                            <div className='w-100'>
                                <ProfileCard user={user} />
                                <SocialSection user={user} />
                            </div>
                        </>
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


