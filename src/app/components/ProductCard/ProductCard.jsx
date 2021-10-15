import { Card, Button, Col } from "react-bootstrap";
import { GiShoppingCart } from "react-icons/gi";
import { Link } from "react-router-dom";
import "./ProductCard.css";

const ProductCard = ({ product, link }) => {
  return (
    <Col xs={12} md={6} lg={4} xl={3} className="d-flex">
      <Card className="">
        <Link className="text-decoration-none text-dark" to={link}>
          <div className="crop text-center">
            <img src={product.image} className="pt-2 product-img" alt="product" />
          </div>
        </Link>
        <Card.Body className="d-flex flex-column justify-content-end text-center">
          <Link className="text-decoration-none text-dark" to={link}>
            <h5 className="product-title">{product.title.slice(0, 18) + "..."}</h5>
          </Link>
          <p>{product.category}</p>
          <h4>${product.price}</h4>

          <Button variant="dark" className="w-100 product-card-button">
            Add to <GiShoppingCart size="25px" />
          </Button>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default ProductCard;
