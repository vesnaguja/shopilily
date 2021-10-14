import { useEffect, useState } from "react";
import { Container, Image, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import { getAllCategories } from "../../../services/CategoriesService";
import "./Header.css";

const Header = () => {
  const [allCategories, setAllCategories] = useState([]);

  useEffect(() => {
    getAllCategories().then((res) => setAllCategories(res));
  }, []);

  return (
    <Navbar expand="lg" id="prodzica-header" className="p-0 fs-5 bg-white border-bottom border-2 shop-navbar">
      <Container>
        <Link to="/">
          <Image src="./images/shop5.png" className="logo-img" />
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="">
            <Link to="/" className="nav-link">
              {" "}
              home
            </Link>

            {allCategories.map((category) => (
              <Nav.Link href="#link" className="nav-link">
                {category}
              </Nav.Link>
            ))}

            <NavDropdown title="login" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
