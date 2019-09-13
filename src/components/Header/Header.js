import React from "react";
import { Row, Col , Affix } from "antd";
import SearchBox from "../SearchBox/SearchBox";
import "./Header.css";

const Header = props => {
  const { logo, title } = props;
  return (
    <Affix>
      <header>
        <Row className="d-flex align-items-center">
          <Col span={1}>
            <img alt="logo" src={logo} id="logo" />
          </Col>
          <Col span={9}>
            <h1>{title}</h1>
          </Col>
          <Col span={14}>
            <SearchBox placeholder="Enter Question..." />
          </Col>
        </Row>
      </header>
    </Affix>
  );
};

export default Header;
