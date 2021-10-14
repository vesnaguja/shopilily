import "./App.css";
import { Route, Switch } from "react-router";
import HomePage from "./pages/HomePage/HomePage";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import SingleProductPage from "./pages/SingleProductPage/SingleProductPage";

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/products/:id" component={SingleProductPage} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
