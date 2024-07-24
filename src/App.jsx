/* eslint-disable no-unused-vars */
import React, { Component } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { NavbarComponen, ListCategories, Hasil, Menus } from "./components";

import { API_URL } from "./utils/constans";
import axios from "axios";

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      menus: [],
    };
  }
  componentDidMount() {
    axios
      .get(API_URL + "products")
      .then((res) => {
        const menus = res.data;
        this.setState({ menus });
      })
      .catch((error) => {
        console.log(error);
      });
  }
  render() {
    const { menus } = this.state;
    return (
      <div>
        <div>
          <NavbarComponen />
          <div className="mt-3">
            <Container>
              <Row>
                <ListCategories />
                <Col>
                  <h5>
                    <strong>Daftar Produk</strong>
                  </h5>
                  <hr />
                  <Row>{menus && menus.map((menu) => <Menus key={menu.id} menu={menu} />)}</Row>
                </Col>
                <Hasil />
              </Row>
            </Container>
          </div>
        </div>
      </div>
    );
  }
}
