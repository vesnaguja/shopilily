import { useEffect } from "react";
import { useState } from "react";
import { Container, Row } from "react-bootstrap";
import { getWomensClothing } from "../../../services/WomensClothingService";
import ProductCard from "../../components/ProductCard/ProductCard";

const WomensClothingPage = () => {
  const [womensClothingProducts, setWomensClothingProducts] = useState([]);

  useEffect(() => {
    getWomensClothing().then((res) => setWomensClothingProducts(res));
  }, []);

  return (
    <Container className="py-5">
      <Row className="g-3">
        {womensClothingProducts.map((product) => (
          <ProductCard product={product} key={product.id} link={`/products/${product.id}`} />
        ))}
      </Row>
    </Container>
  );
};

export default WomensClothingPage;
