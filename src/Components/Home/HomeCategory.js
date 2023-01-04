import React from "react";
import { Container, Row } from "react-bootstrap";
import CategoryCard from "../Category/CategoryCard";
import SubTiltle from "../Utility/Subtitle";
import sale from "../../images/sale.png";
import laptop from "../../images/labtop.png";
import clothe from "../../images/clothe.png";
import mobile from "../../images/mobile.png";
import prod3 from "../../images/prod3.png";
import item from "../../images/item.png";

const HomeCategory = () => {
  return (
    <Container>
      <Row className="my-2 d-flex justify-content-between">
        <SubTiltle title="Categorys" btntitle="more" />
        <CategoryCard title="Sale" background="#fd4ad5" img={sale} />
        <CategoryCard title="Devices" background="#efdcab" img={laptop} />
        <CategoryCard title="Clothe" background="#7bccdc" img={clothe} />
        <CategoryCard title="mobile" background="#915970" img={mobile} />
        <CategoryCard title="Pans" background="blue" img={prod3} />
        <CategoryCard title="Electronics" background="green" img={item} />
      </Row>
    </Container>
  );
};

export default HomeCategory;
