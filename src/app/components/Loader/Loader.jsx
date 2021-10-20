import { Spinner } from "react-bootstrap";

const Loader = () => {
  return (
    <div className="d-flex justify-content-center pt-5">
      <Spinner animation="border" variant="dark" />
    </div>
  );
};

export default Loader;
