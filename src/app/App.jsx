import "./App.css";
import { Route, Switch } from "react-router";
import HomePage from "./pages/HomePage/HomePage";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import SingleProductPage from "./pages/SingleProductPage/SingleProductPage";
import ElectronicsPage from "./pages/ElectronicsPage/ElectronicsPage";
import JeweleryPage from "./pages/JeweleryPage/JeweleryPage";
import { Fragment, useEffect, useState } from "react";
import MensClothingPage from "./pages/MensClothingPage/MensClothingPage";
import WomensClothingPage from "./pages/WomensClothingPage/WomensClothingPage";
import { getAllProducts } from "../services/AllProductsService";

function App() {
  const [allProducts, setAllProducts] = useState([]);
  const [searchedProduct, setSearchedProduct] = useState([]);

  useEffect(() => {
    getAllProducts().then((res) => {
      setAllProducts(res);
      setSearchedProduct(res);
    });
  }, []);

  const onTypingHandler = (e) => {
    const searchString = e.target.value.trim().toLowerCase();
    setSearchedProduct(allProducts.filter((product) => product.title.toLowerCase().includes(searchString)));
  };

  return (
    <Fragment>
      <Header onTypingHandler={onTypingHandler} />
      <Switch>
        <Route exact path="/">
          <HomePage searchedProduct={searchedProduct} />
        </Route>
        <Route exact path="/products/:id" component={SingleProductPage} />
        <Route exact path="/products/category/electronics" component={ElectronicsPage} />
        <Route exact path="/products/category/jewelery" component={JeweleryPage} />
        <Route exact path="/products/category/men's clothing" component={MensClothingPage} />
        <Route exact path="/products/category/women's clothing" component={WomensClothingPage} />
      </Switch>
      <Footer />
    </Fragment>
  );
}

export default App;
