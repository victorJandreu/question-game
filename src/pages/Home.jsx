import { Link} from "react-router-dom";

export default function Home(){
    return(
        <main className="home">
            <h1>Question game: can you leave the house?</h1>
            <Link className="easy" to={"game/easy"} >Easy</Link>
            <Link className="normal" to={"game/normal"} >Normal</Link>
            <Link className="hard" to={"game/hard"} >Hard</Link>
        </main>
    )
}