import { useEffect, useState } from "react";

import Card from "../UI/Card";
import MealItem from "./MealItem";

import styles from "./AvailableMeals.module.css";

const AvailableMeals = () => {
  const [meals, setMeals] = useState([]);
  const [isloading, setIsLoading] = useState(true);

  const fetchMealsHandler = async () => {
    try {
      const response = await fetch(
        "https://react-http-cf2f1-default-rtdb.firebaseio.com/meals.json"
      );
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
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchMealsHandler();
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
      </Card>
    </section>
  );
};

export default AvailableMeals;
