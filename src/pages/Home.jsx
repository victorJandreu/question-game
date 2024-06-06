import { Link} from "react-router-dom";

export default function Home(){
    return(
        <main className="home">
            <Link className="easy" to={"easy"} >Easy</Link>
            <Link className="normal" to={"normal"} >Normal</Link>
            <Link className="hard" to={"hard"} >Hard</Link>
        </main>
    )
}