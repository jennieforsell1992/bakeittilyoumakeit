import { GiCupcake } from "react-icons/gi";
import { RiCake3Line } from "react-icons/ri";

export const ThankYouForNewRecipe = () => {
  return (
    <div className="wrapper-container-thankyou">
      <div className="thankyou-wrapper">
        <h2 className="h2-thankyou">Tack för att du delar ditt recept!</h2>
        <h4 className="h4-thankyou">Nu finns den inlagd under "Alla recept"</h4>
        <GiCupcake className="cupcake" />
        <RiCake3Line className="cake" />
      </div>
    </div>
  );
};
