import { useNavigate } from "react-router-dom";

export const Home = () => {
  const navigate = useNavigate();
  const navigateToRecipe = () => {
    navigate("/allrecipes/65969c1ad138c6142cab0500");
  };

  return (
    <div>
      <section className="front-picture-wrapper">
        <div className="title-wrapper">
          <span className="title-wrapper-text">
            Välkommen till alla Sveriges olika bakningsrecept
          </span>
        </div>
      </section>
      <section className="front-recipe-wrapper">
        <div className="front-recipe-week">
          <p className="front-recipe-title">Veckans recept</p>
          <div className="front-recipe-text-wrapper">
            <span className="front-recipe-text">
              Crossaint med glasyr och walnöt, riktig festlig bakelse att bjuda
              på!
            </span>
          </div>
          <div className="front-recipe-button-wrapper">
            <button className="front-recipe-button" onClick={navigateToRecipe}>
              till receptet
            </button>
          </div>
        </div>
        <div className="front-recipe-container">
          <img
            className="front-recipe-img"
            src="https://res.cloudinary.com/dwzwqnpmn/image/upload/v1704369177/recipe-images/758dc96e-5c5c-48e7-9c0c-158eeb282ca9.jpg"
            alt="bild på kaka"
          />
        </div>
      </section>
    </div>
  );
};
