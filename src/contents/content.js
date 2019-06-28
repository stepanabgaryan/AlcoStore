import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Divider from "@material-ui/core/Divider";
import EditModal from "./edit";
import fire from "../JS files/Fire";
import LoginPopup from './Login_dialog';

class Content extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 1,
      showEditModal: false,
      editedItem: this.props,
      user: null,
      item: [],
      idBase: this.props,
      basket: [],
      showLogin: false,
    };
  }

  handleMinusButtonClick = () => {
    const {item} = this.state;
    this.setState({
      count: this.state.count > 1 ? this.state.count - 1 : 1,
      item: {...item, count: this.state.count > 1 ? this.state.count - 1 : 1}
    });
  };

  handlePlusButtonClick = () => {
    const {item} = this.state;
    this.setState({
      count: this.state.count + 1,
      item: {...item, count: this.state.count + 1}
    });
  };

  handleItemCountChange = event => {
    const {item} = this.state;
    this.setState({
      count: event.target.value > 1 ? parseInt(event.target.value) : 1,
      item: {...item, count: event.target.value > 1 ? parseInt(event.target.value) : 1}
    });
  };

  handleOpenDialogClick = () => {
    this.setState({
      showEditModal: true
    });
  };

  onEditModalClose = () => {
    this.setState({
      showEditModal: false
    });
  };

  onSave = (item) => {
    this.setState({
      showEditModal: false,
      count: item.count,
      editedItem: { ...item },
      item: { ...item },
    });

    this.handleAddToCartClicked();
  };

  handleAddToCartClicked = () => {
    const { onBasketClick } = this.props;
    onBasketClick();

    if (this.state.user){
      setTimeout(()=>{
        this.addToBasket();
      },2000)
    } else {
      this.setState({
        showLogin: !this.state.showLogin
      })
    }
  };

  componentDidMount() {
    this.authListener();
    this.getData();
  }

  authListener() {
    fire.auth().onAuthStateChanged(user => {
      if (user) {
        this.setState({ user });
        localStorage.setItem("user", user.uid);
      } else {
        this.setState({ user: null });
        localStorage.removeItem("user");
      }
    });
  }

  getData = () => {
    const db = fire.firestore();
    db.collection("beverages")
    .get()
    .then(querySnapshot => {
      querySnapshot.forEach(doc => {
        if (doc.id === this.state.editedItem.id) {
          this.setState({ item: {count: this.state.count, id: this.state.editedItem.id, ...doc.data() }});
        }
      });
    });
  };

  addToBasket = () => {
    const db = fire.firestore();
    const item = this.state.item;

    let docRef = db
    .collection("users")
    .doc(fire.auth().currentUser.uid)
    .collection("basket");

    docRef.get().then(querySnapshot => {
        let bool = false;
      querySnapshot.forEach((doc) => {
        if (doc.data().id === this.state.editedItem.id) {
          docRef.doc(doc.id).update({ count: this.state.count });
          bool = true;
        }
      })
        if(bool=== false) {
            docRef.add({...item});
        }
    })
  };

  render() {
    const {
      id,
      name,
      category,
      price,
      image,
      volume
    } = this.state.editedItem;
    const { count, showEditModal, editedItem, showLogin } = this.state;
    return (
      <Card className="ContentItem">
        <CardContent
          className="ContentImageDiv"
          onClick={() => {
            this.handleOpenDialogClick(id);
          }}
        >
          <img alt={category} src={image} className="ContentImage" />
        </CardContent>
        <CardContent>
          <Divider variant="middle" />
          <h3 className="ContentName">{name}</h3>
          <Divider variant="middle" />
          <h3 className="ContentName">AMD {price * count}</h3>
          <div className="ContentButtonDiv">
            <button onClick={this.handleMinusButtonClick}>
              <FontAwesomeIcon icon="minus" />
            </button>
            <input
              type="number"
              value={count}
              className="ContentCountItem"
              onChange={this.handleItemCountChange}
              min="1"
            />
            <button onClick={this.handlePlusButtonClick}>
              <FontAwesomeIcon icon="plus" />
            </button>
          </div>
          <h4 className="ContentName">{volume} l</h4>
        </CardContent>
        <Divider variant="middle" />
        <CardActions>
          <label
            className="ContentAddToCart"
            onClick={this.handleAddToCartClicked}
          >
            <span className="ContentAddToCartSpan"> Add </span>
            <FontAwesomeIcon icon="cart-plus" />
          </label>
        </CardActions>
        {showLogin ? (<LoginPopup show = {true} />) : null}
        {showEditModal && (
          <EditModal
            item={editedItem}
            count={count}
            onClose={this.onEditModalClose}
            onSave={this.onSave}
          />
        )}
      </Card>
    );
  }
}

export default Content;