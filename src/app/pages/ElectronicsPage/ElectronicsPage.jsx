import { useEffect } from "react";
import { useState } from "react";
import { Container, Row } from "react-bootstrap";
import { getElectronics } from "../../../services/ElectronicsService";
import ProductCard from "../../components/ProductCard/ProductCard";

const ElectronicsPage = () => {
  const [electronicsProducts, setElectronicsProduct] = useState([]);

  useEffect(() => {
    getElectronics().then((res) => setElectronicsProduct(res));
  }, []);

  return (
    <Container className="py-5">
      <Row className="g-3">
        {electronicsProducts.map((product) => (
          <ProductCard product={product} key={product.id} link={`/products/${product.id}`} />
        ))}
      </Row>
    </Container>
  );
};

export default ElectronicsPage;
