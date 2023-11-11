import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard'

const users = [
    {
        id: 1,
        userName: 'midudev',
        name: 'Miguel Angel Duran',
        isFollowing: false
    },
    {
        id: 2,
        userName: 'umgomez',
        name: 'Ubaldin Gomez',
        isFollowing: true
    },
    {
        id: 3,
        userName: 'Google',
        name: 'Google',
        isFollowing: false
    },
    {
        id: 4,
        userName: 'NetflixLAT',
        name: 'Netflix Latinoamerica',
        isFollowing: true
    },
]

export function App() {
    return (
        <section className='App'>
            {
                users.map(({ id, userName, name, isFollowing }) => (
                    <TwitterFollowCard 
                        key={id}
                        userName={userName}
                        initialIsFollowing={isFollowing}>
                        {name}
                    </TwitterFollowCard>
                ))
            }
        </section>
    )
}

/*
    <TwitterFollowCard initialIsFollowing={true} formatUsername={format} userName='umgomez'>
        Ubaldin Gomez
    </TwitterFollowCard>

    <TwitterFollowCard initialIsFollowing={false} formatUsername={format} userName='Google'>
        Google
    </TwitterFollowCard>

    <TwitterFollowCard initialIsFollowing formatUsername={format} userName='NetflixLAT'>
        Netflix Latinoamerica
    </TwitterFollowCard>

    <TwitterFollowCard initialIsFollowing={false} formatUsername={format} userName='midudev'>
        Miguel Angel Duran
    </TwitterFollowCard>
*/