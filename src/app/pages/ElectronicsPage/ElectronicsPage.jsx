import { useEffect } from "react";
import { useState } from "react";
import { Container, Row } from "react-bootstrap";
import ProductCard from "../../components/ProductCard/ProductCard";
import { getElectronics } from "../../../services/ElectronicsService";
import Loader from "../../components/Loader/Loader";

const ElectronicsPage = () => {
  const [loading, setLoading] = useState(true);
  const [electronicsProducts, setElectronicsProduct] = useState([]);

  useEffect(() => {
    getElectronics().then((res) => {
      setElectronicsProduct(res);
      setLoading(false);
    });
  }, []);

  return (
    <Container className="py-5">
      <Row className="g-3">
        {electronicsProducts.map((product) =>
          loading ? <Loader /> : <ProductCard product={product} key={product.id} link={`/products/${product.id}`} />
        )}
      </Row>
    </Container>
  );
};

export default ElectronicsPage;
