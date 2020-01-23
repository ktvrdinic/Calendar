import React, { Component } from "react";
import "./about.css";
import { Container, Row, Col } from "reactstrap";

import unipu from "./unipu.png";

export default class about extends Component {
  render() {
    return (
      <div>
        <section id="two" className="wrapper style3">
          <div className="inner">
            <header className="align-center text-center">
              <p>Korišteni alati MongoDB(NoSQL), React.js, Node.js, Redux</p>
              <p>
                Projekt je napravljen u svrhu diplomskog rada 2019/2020 godine
                na Sveučilištu Juraj Dobrila u Puli.
              </p>
              <h3>
                Student: Karlo Tvrdinić
                <br />
                Mentor: doc. dr. sc. Tihomir Orehovački
              </h3>
            </header>
          </div>
        </section>

        <section id="two" className="wrapper style3">
          <Row>
            <Col xs="auto">
              <div className="inner">
                <header className="align-center text-center">
                  <p>Used tools is MongoDB(NoSQL), React.js, Node.js, Redux</p>
                  <p>
                    The project was designed for the purpose of graduating in
                    2019/2020 at Juraj Dobrila University of Pula.
                  </p>
                </header>
              </div>
            </Col>
          </Row>
        </section>

        <Container>
          <Row>
            <Col xs={6} md={4}></Col>
            <Col xs={6} md={4}>
              <div className="image mt-5">
                <img src={unipu} alt="Pic 01" width="495" height="170" />
              </div>
              <p>Fakultet informatike u Puli 2. godina diplomskog studja</p>
              <footer>
                <a href="/#" class="button">
                  Learn More
                </a>
              </footer>
            </Col>
            <Col xs={6} md={4}></Col>
          </Row>
        </Container>
      </div>
    );
  }
}
