import "./App.css";
import { Route, Switch } from "react-router";
import HomePage from "./pages/HomePage/HomePage";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import SingleProductPage from "./pages/SingleProductPage/SingleProductPage";
import ElectronicsPage from "./pages/ElectronicsPage/ElectronicsPage";
import JeweleryPage from "./pages/JeweleryPage/JeweleryPage";
import { Fragment } from "react";
import MensClothingPage from "./pages/MensClothingPage/MensClothingPage";

function App() {
  return (
    <Fragment>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/products/:id" component={SingleProductPage} />
        <Route exact path="/products/category/electronics" component={ElectronicsPage} />
        <Route exact path="/products/category/jewelery" component={JeweleryPage} />
        <Route exact path="/products/category/men's clothing" component={MensClothingPage} />
      </Switch>
      <Footer />
    </Fragment>
  );
}

export default App;
