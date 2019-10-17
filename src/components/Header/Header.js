import React, { useState, useEffect } from "react";
import { Row, Col, Affix } from "antd";
import SearchBox from "../SearchBox/SearchBox";
import "./Header.css";
import snap from "../../media/snap.svg";
import snap2 from "../../media/snap2.svg";
import useHeader from './useHeader'

const imgStyle = { width: "25px", transform: "rotate(15deg) rotateY(180deg)" };
const imgStyleActive = { width: "25px", transform: "rotateY(180deg)" };

const Header = props => {
  const { logo, title, subTitle } = props;
  const {activeIcon} = useHeader()

  return (
    <Affix>
      <header>
        <Row gutter={12}>
          <Col md={1} sm={8}>
            <img alt="logo" src={logo} id="logo" data-testid="header-logo" />
          </Col>
          <Col md={9} sm={16}>
            <h1>{title}</h1>
            <h2>{subTitle}</h2>
            <span>
              <img
                src={activeIcon ? snap : snap2}
                alt="snap"
                style={activeIcon ? imgStyle : imgStyleActive}
              />
            </span>
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
