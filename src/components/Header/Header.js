import React from "react";
import { Row, Col , Affix } from "antd";
import SearchBox from "../SearchBox/SearchBox";
import "./Header.css";

const Header = props => {
  const { logo, title } = props;
  return (
    <Affix>
      <header>
        <Row>
          <Col md={1} sm={8}>
            <img alt="logo" src={logo} id="logo" />
          </Col>
          <Col md={9} sm={16}>
            <h1>{title}</h1>
          </Col>
          <Col md={14} sm={24}>
            <SearchBox placeholder="Type here..." />
          </Col>
        </Row>
      </header>
    </Affix>
  );
};

export default Header;
