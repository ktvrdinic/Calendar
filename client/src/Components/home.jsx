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
            Lorem Ipsum je jednostavno probni tekst koji se koristi u tiskarskoj
            i slovoslagarskoj industriji. Lorem Ipsum postoji kao industrijski
            standard još od 16-og stoljeća, kada je nepoznati tiskar uzeo
            tiskarsku galiju slova i posložio ih da bi napravio knjigu s uzorkom
            tiska. Taj je tekst ne samo preživio pet stoljeća, već se i vinuo u
            svijet elektronskog slovoslagarstva, ostajući u suštini
            nepromijenjen. Postao je popularan tijekom 1960-ih s pojavom
            Letraset listova s odlomcima Lorem Ipsum-a, a u skorije vrijeme sa
            software-om za stolno izdavaštvo kao što je Aldus PageMaker koji
            također sadrži varijante Lorem Ipsum-a.
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
