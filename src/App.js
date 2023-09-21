import { Fragment } from "react";

import Header from "./components/Layout/Header";
import MealsSummary from "./components/Layout/MealsSummary";
import AvailableMeals from "./components/Meals/AvailableMeals";

function App() {
  return (
    <Fragment>
      <Header />
      <main>
        <MealsSummary />
        <AvailableMeals />
      </main>
    </Fragment>
  );
}

export default App;
