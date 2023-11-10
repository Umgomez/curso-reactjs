import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard'
export function App() {
    const format = (userName) => `@${userName}`
    return (
        <section className='App'>
            <TwitterFollowCard formatUsername={format} userName='umgomez' name='Ubaldin Gomez' isFollowing />
            <TwitterFollowCard formatUsername={format} userName='mariadsd' name='Maria Gonzalez' isFollowing />
        </section>
    )
}