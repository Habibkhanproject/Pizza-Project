import "../../../style/component/UI/Pizzastyle/Pizza.css";

export const Pizza = (props) => {
  console.log(props);
  // if (props.soldOut) return <p>this is sold out </p>; //this is called multiple condition rendering

  return (
    <li className={`pizza ${props.soldOut ? "sold-out" : ""}`}>
      <img src={props.photoName} alt={props.name} />

      <div>
        <h3>{props.name}</h3>
        <p>{props.ingredients}</p>
        <span>{props.soldOut ? "Sold Out" : props.price}</span>
      </div>
    </li>
  );
};
