import React, { useEffect, useState, useCallback } from "react";
import Loading from "../components/Loading";
import { useParams, Link } from "react-router-dom";
import { useGlobalContext } from "../context";
const url = "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=";

const SingleCocktail = () => {
  const { loading, setLoading } = useGlobalContext();
  const [selectedDrink, setSelectedDrink] = useState(null);
  const { cocktailId } = useParams();

  const fetchData = useCallback(async () => {
    setLoading(true);
    try {
      const response = await fetch(`${url}${cocktailId}`);
      const { drinks } = await response.json();
      if (drinks) {
        const {
          strDrink,
          strAlcoholic,
          strCategory,
          strDrinkThumb,
          strGlass,
          strInstructions,
          strIngredient1,
          strIngredient2,
          strIngredient3,
          strIngredient4,
        } = drinks[0];
        const newDrink = {
          name: strDrink,
          category: strCategory,
          image: strDrinkThumb,
          glass: strGlass,
          info: strAlcoholic,
          instruction: strInstructions,
          ingredients: [
            strIngredient1,
            strIngredient2,
            strIngredient3,
            strIngredient4,
          ],
        };
        setSelectedDrink(newDrink);
      } else {
        setSelectedDrink(null);
      }
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  }, [cocktailId, setLoading]);

  useEffect(() => {
    fetchData();
  }, [cocktailId, fetchData]);

  if (loading) {
    return <Loading />;
  }

  if (!selectedDrink) {
    return <h2 className="section-title">no cocktail to display</h2>;
  }
  const { name, category, image, glass, info, instruction, ingredients } =
    selectedDrink;
  return (
    <section className="section cocktail-section">
      <Link className="btn btn-primary" to="/">
        back home
      </Link>
      <h2 className="section-title">{name}</h2>
      <div className="drink">
        <img src={image} alt={name} />
        <div className="drink-info">
          <p>
            <span className="drink-data">Name: </span>
            {name}
          </p>
          <p>
            <span className="drink-data">category: </span>
            {category}
          </p>
          <p>
            <span className="drink-data">info: </span>
            {info}
          </p>
          <p>
            <span className="drink-data">glass: </span>
            {glass}
          </p>
          <p>
            <span className="drink-data">instruction: </span>
            {instruction}
          </p>
          <p>
            <span className="drink-data">ingredients: </span>
            {ingredients.map((ingredient, index) => {
              return ingredient ? <span key={index}>{ingredient}</span> : null;
            })}
          </p>
        </div>
      </div>
    </section>
  );
};

export default SingleCocktail;
