import { useEffect } from "react";
import { useState } from "react";
import { Container, Row } from "react-bootstrap";
import { getAllProducts } from "../../../services/AllProductsService";
import ProductCard from "./ProductCard";

const HomePage = () => {
  const [allProducts, setAllProducts] = useState([]);

  useEffect(() => {
    getAllProducts().then((res) => setAllProducts(res));
  }, []);

  return (
    <Container className="py-5">
      <Row className="g-3">
        {allProducts.map((product) => (
          <ProductCard product={product} key={product.id} />
        ))}
      </Row>
    </Container>
  );
};

export default HomePage;
