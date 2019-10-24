import React from "react";
import { Row, Col, Icon } from "antd";
import profile from "../../media/mm.jpg";
import "./About.css";

const style = {
  border: "none",
  background: "#101427"
};
const iconStyle = {
  fontSize: "24px"
};
const About = props => {
  return (
    <div className="question--block" style={style}>
      <Row>
        <Col span={24}>
          <img className="img--profile" src={profile} alt="profile" />
          <p style={{ marginTop: "10px" }}>
            I'm a ​Front-end​ ​developer​ ​with​ a strong passion for SPA React
            & Redux based applications,​ always looking​ ​for​ new ​challenges,​
            ​cultures​ ​and​ ​environments.
            <br />
            <br />
            <span style={{opacity:'.5'}}>Tech Stack</span>
            <br />
            ECMA 6, JSX, Javascript, HTML5 & CSS3
            <br />
            ReactJs, Redux (thunk), jQuery, KendoUI, AngularJs, Restful APIs,
            Node, Webpack
            <br />
            <span style={{opacity:'.5'}}>UI & UX</span>
            <br />
            Sass, Less, BEM, Bootstrap, Foundation, Ant design, Material UI, Semantic UI
            <br />
            Responsive, mobile first and adaptive web design.
            <br />
            Accesibility, retina ready, pixel perfect, crossbrowsing
            compatibility. Semantic & w3c compliant.
          </p>
        </Col>
      </Row>
      <Row>
        <Col span={8} className="text-center">
          <a
            href="https://www.linkedin.com/in/manuelbaronetti/"
            target="_blank"
          >
            <Icon style={iconStyle} type="linkedin" />
          </a>
        </Col>
        <Col span={8} className="text-center">
          <a href="https://twitter.com/manursio" target="_blank">
            <Icon style={iconStyle} type="twitter" />
          </a>
        </Col>
        <Col span={8} className="text-center">
          <a href="http://github.com/mbaronetti" target="_blank">
            <Icon style={iconStyle} type="github" />
          </a>
        </Col>
      </Row>
    </div>
  );
};

export default About;
