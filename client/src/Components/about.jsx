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
              <p>Projekt je napravljen u svrhu vježbe.</p>
              <h3>mag. inf. Karlo Tvrdinić</h3>
            </header>
          </div>
        </section>

        <section id="two" className="wrapper style3">
          <Row>
            <Col xs="auto">
              <div className="inner">
                <header className="align-center text-center">
                  <p>Used tools is MongoDB(NoSQL), React.js, Node.js, Redux</p>
                  <p>The project is designed for the purpose of practice.</p>
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
              <br /> <br />
              <p>Zahvale Fakultet informatike u Puli</p>
              <footer>
                <a href="https://www.unipu.hr/" class="button">
                  Learn More
                </a>
              </footer>
              <br />
            </Col>
            <Col xs={6} md={4}></Col>
          </Row>
        </Container>
      </div>
    );
  }
}
