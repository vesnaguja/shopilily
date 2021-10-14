import { useEffect, useState } from "react";
import { Col, Container, Row, Button } from "react-bootstrap";
import { GiShoppingCart } from "react-icons/gi";
import { useParams } from "react-router";
import { getProduct } from "../../../services/ProductService";

const SingleProductPage = () => {
  let { id } = useParams("id");
  const [product, setProduct] = useState({});

  useEffect(() => {
    getProduct(id).then((res) => setProduct(res));
  }, [id]);

  return (
    <Container className="py-5">
      <Row>
        <Col sm={12} md={4}>
          <img src={product.image} alt="product-details" className="w-50" />
        </Col>

        <Col sm={12} md={8}>
          <h2>{product.title}</h2>
          <p>Category: {product.category}</p>
          <h4>Price: ${product.price}</h4>
          <p>Description: {product.description}</p>
          <Button variant="dark" className="w-100 product-card-button">
            Add to <GiShoppingCart size="25px" />
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default SingleProductPage;
