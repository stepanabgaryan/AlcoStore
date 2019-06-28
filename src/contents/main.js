import React from 'react';
import Content from "./content";
import { library } from '@fortawesome/fontawesome-svg-core';
import { faMinus, faPlus, faCartPlus, faSearch, faBars, faUser } from '@fortawesome/free-solid-svg-icons';
import Category from './category';
import fire from "../JS files/Fire.js";
import Header from "./Header";
import Footer from './Footer.js';

library.add(faMinus, faPlus, faCartPlus, faSearch, faBars, faUser);

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchlist: [],
      categories: '',
      itemsobj: [],
      drinks: [],
      basketitemcount: 0
    }
  }

  onCatClick = (name) => {
    this.setState({
      categories: name === 'homepage' ? '' : name
    });
  }

  getData = () => {
    const db = fire.firestore();
    db.collection("beverages").get().then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        let { itemsobj } = this.state;
        this.setState({
          itemsobj: [...itemsobj, {id: doc.id, ...doc.data() }],
        })
      })
    })
  }

  getCategories = () => {
    const db = fire.firestore();
    db.collection("menu").get().then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        let { drinks } = this.state;
        this.setState({
          drinks: [...drinks, { ...doc.data() }]
        })
      })
    })
  }

  authListener = () => {
    fire.auth().onAuthStateChanged(user => {
      if (user) {
        this.setState({ user });
        localStorage.setItem("user", user.uid);
        // setTimeout(() => this.getBasketItem(), 3000);
        this.getBasketItem();
      } else {
        this.setState({ user: null });
        localStorage.removeItem("user");
      }
    });
  }

  getBasketItem = () => {
    const db = fire.firestore();
    db.collection("users")
    .doc(fire.auth().currentUser.uid)
    .collection("basket")
    .get()
    .then(querySnapshot => {
      this.setState({
        basketitemcount: querySnapshot.docs.length
      })
    });
  }

  componentDidMount() {
    this.getData();
    this.getCategories();
    this.authListener();
  }

  onBasketClick = () => {
    let { basketitemcount } = this.state;
    this.setState({
      basketitemcount: parseInt(basketitemcount)+1
    })
  }

  onSearchChanged = (list) => {
    this.setState({
      searchlist: list
    })
  }

  render() {
    const { categories, searchlist, itemsobj, drinks, basketitemcount } = this.state;
    // console.log(searchlist);
    return (
      <div className='HomeMainDiv main-wrap'>
        <Header onCatChanged={this.onCatClick} basketitemcount={basketitemcount} itemsobj={itemsobj} onSearch={this.onSearchChanged}/>
        <div className='HomeCatContDiv'>
          {searchlist.length === 0 && !categories && drinks.map((item, index) => {
            return (
              <Category key={index} {...item} onCatClick={this.onCatClick} />
            );
          })}
          {searchlist.length === 0 && categories && itemsobj.filter((item) => categories.toLowerCase() === 'all' ? itemsobj : item.category.toLowerCase() === categories.toLowerCase()).map((item) => {
            return (
              <Content key={item.id} {...item} onBasketClick={this.onBasketClick}/>
            );
          })}
          {searchlist.length !== 0 && searchlist.map((item) => {
            return (
              <Content key={item.id} {...item} onBasketClick={this.onBasketClick}/>
            );
          })}
        </div>
        <Footer/>
      </div>
    );
  }
}

export default Home;