import "../../../style/component/UI/Pizzastyle/Footer.css";
export const Footer = () => {
  const hour = new Date().getHours();
  const openHour = 12;
  const closeHour = 22;
  const isopen = hour >= openHour && hour <= closeHour;
  //   if (hour >= openHour && hour <= closeHour) alert("We are currently Open");
  //   else alert("Soory we are closed.");
  //   console.log(hour);
  return (
    <footer className="footer">
      {/* {new Date().toLocaleTimeString()} We are currently Open */}
      {isopen && (
        <div className="order">
          <p>We are open until {closeHour}:00. come visit us or order online</p>
          <button className="btn">Order</button>
        </div>
      )}
    </footer>
  );
};
