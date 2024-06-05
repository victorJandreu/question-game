import heart from "./assets/heart.svg";

export default function Heart({life, floor}) {

    let heartArray = []
    for(let i = 0; i < life; i++) {
        heartArray.push( <img className="heart" key={i} src={heart} alt="heart" />)
    }

  return (
    <div className="heart-container">
     {heartArray}
    { floor !== 0 ? <p>Floor {floor}</p> : null  }
    </div>
  );
}
