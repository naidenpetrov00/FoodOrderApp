import { useEffect, useState } from "react";

import Card from "../UI/Card";
import MealItem from "./MealItem";

import styles from "./AvailableMeals.module.css";

const AvailableMeals = () => {
  const [meals, setMeals] = useState([]);
  const [isloading, setIsLoading] = useState(true);
  const [httpError, setHttpError] = useState();

  const fetchMealsHandler = async () => {
    const response = await fetch(
      "https://react-http-cf2f1-default-rtdb.firebaseio.com/meals.json"
    );
    if (!response.ok) throw new Error("Something went wrong");
    const data = await response.json();

    const loadedMeals = [];
    for (const mealKey in data) {
      loadedMeals.push({
        id: mealKey,
        name: data[mealKey].name,
        description: data[mealKey].description,
        price: data[mealKey].price,
      });
    }

    setMeals(loadedMeals);
    setIsLoading(false);
  };

  useEffect(async () => {
    try {
      await fetchMealsHandler();
    } catch (error) {
      setIsLoading(false);
      setHttpError(error.message);
    }
  }, []);

  return (
    <section className={styles.meals}>
      <Card>
        {isloading ? (
          <p>Loading...</p>
        ) : (
          <ul>
            {meals.map((m) => (
              <MealItem meal={m} key={m.id} />
            ))}
          </ul>
        )}
        {httpError && <p>{httpError}</p>}
      </Card>
    </section>
  );
};

export default AvailableMeals;
