import heart from "../assets/heart.svg";

export default function Heart({life, floor}) {

  //display heart you have
    let heartArray = []
    for(let i = 0; i < life; i++) {
        heartArray.push( <img className="heart" key={i} src={heart} alt="heart" />)
    }
//
  return (
    <div className="heart-container">
     {heartArray}
    { floor !== 0 ? <p className="floor-text">Floor {floor}</p> : null  }
    </div>
  );
}
