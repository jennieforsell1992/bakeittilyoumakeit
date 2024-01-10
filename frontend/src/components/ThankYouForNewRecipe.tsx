import { GiCupcake } from "react-icons/gi";
import { RiCake3Line } from "react-icons/ri";

export const ThankYouForNewRecipe = () => {
  return (
    <div className="wrapper-container-thankyou">
      <article className="thankyou-wrapper">
        <div className="thankyou-border">
          <h2 className="h2-thankyou">Tack för att du delar ditt recept!</h2>
          <h4 className="h4-thankyou">
            Refresha sidan och därefter hittar du ditt recept under "Alla
            recept"
          </h4>
          <GiCupcake className="cupcake" />
          <RiCake3Line className="cake" />
        </div>
      </article>
    </div>
  );
};
