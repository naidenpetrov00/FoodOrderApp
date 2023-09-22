import CartProvider from "./store/CartProvider";
import Header from "./components/Layout/Header";
import MealsSummary from "./components/Layout/MealsSummary";
import AvailableMeals from "./components/Meals/AvailableMeals";

function App() {
  return (
    <CartProvider>
      <Header />
      <main>
        <MealsSummary />
        <AvailableMeals />
      </main>
    </CartProvider>
  );
}

export default App;
