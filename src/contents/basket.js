import React from "react";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import "./index.css";
import fire from "../JS files/Fire";
import BasketItem from "./basketItem.js";
import { Link } from "react-router-dom";
import lcoLogo from "../contents/IcoLogo.png";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import Footer from './Footer'

class Basket extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 1,
      discount: false,
      editedItem: this.props,
      showEditModal: false,
      totalPrice: 0,
      basketItems: [],
      check: true,
      idBase: "",
      user: null
    };
  }

  authListener = () => {
    fire.auth().onAuthStateChanged(user => {
      if (user) {
        this.setState({ user });
        localStorage.setItem("user", user.uid);
        this.getBasketItems();
      } else {
        this.setState({ user: null });
        localStorage.removeItem("user");
      }
    });
  };

  getBasketItems = () => {
    const db = fire.firestore();
    db.collection("users")
      .doc(fire.auth().currentUser.uid)
      .collection("basket")
      .get()
      .then(querySnapshot => {
        querySnapshot.forEach(doc => {
          let { totalPrice } = this.state;
          this.setState({
            basketItems: [...this.state.basketItems, { ...doc.data() }],
            totalPrice:
              parseInt(totalPrice) +
              parseInt(doc.data().price) * parseInt(doc.data().count),
            idBase: doc.id,
            check: false
          });
        });
      });
  };

  componentDidMount() {
    this.authListener();
  }

  RemoveItem = price => {
    const { totalPrice } = this.state;
    const checki = totalPrice - price === 0 ? true : false;
    this.setState({
      totalPrice: totalPrice - price,
      check: checki
    });
  };

  TotalChange = price => {
    const { totalPrice } = this.state;
    this.setState({
      totalPrice: totalPrice + price
    });
  };

  handleCheckout = () => {
    const messaging = fire.messaging();
    messaging
      .requestPermission()
      .then(() => {
        console.log("permission");
    return messaging.getToken()}).then((token) => console.log(token))
      .catch(() => console.log("error"));
  };

  render() {
    const { basketItems, totalPrice, check } = this.state;
    return (
      <div className="main-wrap">
        <AppBar position="static" className="HeaderContainerAppBar">
          <Toolbar>
            <div className="LogoForAlcoStoreContainer1">
              <Link to="/">
                <img
                  src={lcoLogo}
                  alt={lcoLogo}
                  className="ImageForAlcoStoreContainer"
                />
              </Link>
            </div>
          </Toolbar>
        </AppBar>
        <Toolbar />
        <div>
          {basketItems.map((item, index) => {
            return (
              <BasketItem
                key={index}
                {...item}
                onRemove={this.RemoveItem}
                onTotalChange={this.TotalChange}
              />
            );
          })}
        </div>
        <div className="EmptyBasket">
          <Grid className="EmptyBasketGrid">
            <Grid>
              <Paper className="EmptyBasketText">
                {" "}
                {check
                  ? "Your basket is empty."
                  : "Total Price: AMD " + totalPrice}
              </Paper>
            </Grid>
          </Grid>
          {check ? null : <Button
            variant="contained"
            color="primary"
            style={{marginLeft: '66%'}}
            onClick={this.handleCheckout}
          >
            Checkout
          </Button>}
        </div>
        <div className="checkoutBtn">
        </div>
        <Footer/>
      </div>
    );
  }
}

export default Basket;