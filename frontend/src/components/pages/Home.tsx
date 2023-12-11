export const Home = () => {
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
          <span className="front-recipe-text">
            Crossaint med glasyr och walnöt
          </span>
        </div>
        <div className="front-recipe-container">
          <img className="front-recipe-img" src="" alt="bild på kaka" />
        </div>
      </section>
    </div>
  );
};
