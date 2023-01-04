import React from "react";
import { Container, Row } from "react-bootstrap";
import SubTiltle from "../Utility/Subtitle";
import ProductCard from "../Products/ProductsCard";

const CardProductsContainer = ({ title, btntitle }) => {
  return (
    <Container>
      <Row className="my-2 d-flex justify-content-between">
        <SubTiltle title={title} btntitle={btntitle} />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </Row>
    </Container>
  );
};

export default CardProductsContainer;
