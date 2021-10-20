import { useEffect } from "react";
import { useState } from "react";
import { Container, Row } from "react-bootstrap";
import { getMensClothing } from "../../../services/MensClothingService";
import Loader from "../../components/Loader/Loader";
import ProductCard from "../../components/ProductCard/ProductCard";

const MensClothingPage = () => {
  const [loading, setLoading] = useState(true);
  const [mensClothingProducts, setMensClothingProducts] = useState([]);

  useEffect(() => {
    getMensClothing().then((res) => {
      setMensClothingProducts(res);
      setLoading(false);
    });
  }, []);

  return (
    <Container className="py-5">
      <Row className="g-3">
        {mensClothingProducts.map((product) =>
          loading ? <Loader /> : <ProductCard product={product} key={product.id} link={`/products/${product.id}`} />
        )}
      </Row>
    </Container>
  );
};

export default MensClothingPage;
