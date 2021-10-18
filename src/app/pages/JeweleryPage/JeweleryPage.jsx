import { useEffect } from "react";
import { useState } from "react";
import { Container, Row } from "react-bootstrap";
import { getJewelery } from "../../../services/JeweleryService";
import ProductCard from "../../components/ProductCard/ProductCard";

const JeweleryPage = () => {
  const [jeweleryProducts, setJeweleryProduct] = useState([]);

  useEffect(() => {
    getJewelery().then((res) => setJeweleryProduct(res));
  }, []);

  return (
    <Container className="py-5">
      <Row className="g-3">
        {jeweleryProducts.map((product) => (
          <ProductCard product={product} key={product.id} link={`/products/${product.id}`} />
        ))}
      </Row>
    </Container>
  );
};

export default JeweleryPage;
