import { useEffect } from "react";
import { useState } from "react";
import { Container, Row } from "react-bootstrap";
import { getMensClothing } from "../../../services/MensClothingService";
import ProductCard from "../../components/ProductCard/ProductCard";

const MensClothingPage = () => {
  const [mensClothingProducts, setMensClothingProducts] = useState([]);

  useEffect(() => {
    getMensClothing().then((res) => setMensClothingProducts(res));
  }, []);

  return (
    <Container className="py-5">
      <Row className="g-3">
        {mensClothingProducts.map((product) => (
          <ProductCard product={product} key={product.id} link={`/products/${product.id}`} />
        ))}
      </Row>
    </Container>
  );
};

export default MensClothingPage;
