import { Container, Row } from "react-bootstrap";
import ProductCard from "../../components/ProductCard/ProductCard";

const HomePage = ({ searchedProduct }) => {

  return (
    <Container className="py-5">
      <Row className="g-3">
        {searchedProduct.map((product) => (
          <ProductCard product={product} key={product.id} link={`/products/${product.id}`} />
        ))}
      </Row>
    </Container>
  );
};

export default HomePage;
