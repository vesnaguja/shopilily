import { useEffect } from "react";
import { useState } from "react";
import { Container, Row } from "react-bootstrap";
import { getJewelery } from "../../../services/JeweleryService";
import Loader from "../../components/Loader/Loader";
import ProductCard from "../../components/ProductCard/ProductCard";

const JeweleryPage = () => {
  const [loading, setLoading] = useState(true);
  const [jeweleryProducts, setJeweleryProduct] = useState([]);

  useEffect(() => {
    getJewelery().then((res) => {
      setJeweleryProduct(res);
      setLoading(false);
    });
  }, []);

  return (
    <Container className="py-5">
      <Row className="g-3">
        {jeweleryProducts.map((product) =>
          loading ? <Loader /> : <ProductCard product={product} key={product.id} link={`/products/${product.id}`} />
        )}
      </Row>
    </Container>
  );
};

export default JeweleryPage;
