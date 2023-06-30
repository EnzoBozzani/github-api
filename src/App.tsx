import useFetchUser from './hooks/useFetchUser.ts';
import Header from './components/Header/index.tsx';
import MainSection from './components/MainSection/index.tsx';
import ProfileCard from './components/ProfileCard/index.tsx';
import SocialSection from './components/ReposSection/index.tsx';
import FollowSection from './components/FollowSection/index.tsx';
import Footer from "./components/Footer/index.tsx";


export default function App() {
    const { user, fetchUser, validUsername } = useFetchUser();

    return (
        <>
            <Header fetchUser={fetchUser} valid={validUsername} />
            <MainSection>
            {user ?
                !Object.hasOwn(user, `message`) ? 
                    (
                        <>
                            <ProfileCard user={user} />
                            <SocialSection user={user} />
                            <FollowSection user={user}/>
                        </>
                    )
                    :
                    (   
                        <>  
                            <div className="tip-div">
                                <img src="/arrow.png" alt="" />
                                <p className="display-5 white-color text-center">Oops... Nothing here yet! <span className='tip-text'>Try searching a GitHub user!</span></p>
                            </div>
                        </>
                    )
                :
                (   
                    <div className="tip-div">
                        <img src="/arrow.png" alt="" />
                        <p className="display-5 white-color text-center">Oops... Nothing here yet! <span className='tip-text'>Try searching a GitHub user!</span></p>
                    </div>
                )
            }
            </MainSection>
            <Footer/>
        </>
    )
}



