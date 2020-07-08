import React, { Component } from "react";

import { Link } from "react-router-dom";
import { Jumbotron, Container, Button } from "react-bootstrap";

import slika1 from "./slika1.png";
import slika2 from "./slika2.png";

export default class home extends Component {
  render() {
    return (
      <Container>
        <h2 class="text-center p-3">Napravite svoj raspored</h2>

        <Jumbotron>
          <h1>Kako koristiti raspored ?</h1>
          <p>
            Aplikacija služi za pomoć pri rasporedu vremena. Ako ne znate kako
            rasporediti vrijeme i imate puno obveza, ova aplikacija je prava za
            vas. Ako ste dogovorili popodnevnu šetnju s prijateljem jednostavno
            postavite u aplikaciju vrijeme kada krećete i očekivano vrijeme
            dolaska. Grafički će biti prikazano zauzeto vrijeme kako bi lakše
            mogli rasporediti svoje aktivnosti i planirati svoj dan.
          </p>
          <br />
          <div class="text-center">
            <p>Ukoliko vas zanima više o stranici kliklinte na dugme.</p>
            <Link to="/about">
              <Button bsStyle="primary">O nama</Button>
            </Link>
          </div>
        </Jumbotron>
        <div class="row text-center p-3">
          <div class="col-lg-6 col-md-6 col-xs-6 thumb">
            <img
              class="img-responsive"
              src={slika1}
              style={{ width: "50%" }}
              alt="scheduler"
            />
            <h3>Organizirajte svoje vrijeme.</h3>
          </div>
          <div class="col-lg-6 col-md-6 col-xs-6 thumb">
            <img
              class="img-responsive"
              src={slika2}
              style={{ width: "50%" }}
              alt="scheduler2"
            />
            <h3>Pregled raspreda na dlanu.</h3>
          </div>
        </div>
      </Container>
    );
  }
}
