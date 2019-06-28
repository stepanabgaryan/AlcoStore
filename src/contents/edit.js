import React from "react";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContentText from "@material-ui/core/DialogContentText";
import Button from "@material-ui/core/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Divider from "@material-ui/core/Divider";

class EditModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: props.item.id,
      name: props.item.name,
      category: props.item.category,
      price: props.item.price,
      description: props.item.description,
      volume: props.item.volume,
      count: props.count,
      image: props.item.image,
    };
  }

  handleMinusButtonClick = () => {
    this.setState({
      count: this.state.count > 1 ? this.state.count - 1 : 1
    });
  };

  handlePlusButtonClick = () => {
    this.setState({
      count: this.state.count + 1
    });
  };

  handleItemCountChange = event => {
    this.setState({
      count: event.target.value > 1 ? parseInt(event.target.value) : 1
    });
  };

  handleSave = () => {
    const { onSave } = this.props;
    onSave(this.state);
  };

  render() {
    const { name, category, price, description, volume, image, count } = this.state;
    const { onClose } = this.props;
    return (
      <Dialog
        open={true}
        onClose={this.handleClose}
        aria-labelledby="scroll-dialog-title"
      >
        <DialogTitle id="scroll-dialog-title" className="DialogTitle">
          {name}
        </DialogTitle>
        <DialogContent dividers={true}>
          <div className="DialogContent">
            <div className="DialogContent1">
              <img alt={category} src={image} className="DialogImage" />
            </div>
            <div className="DialogContent2">
              <DialogContentText>{description}</DialogContentText>
              <Divider variant="middle" />
              <div className="DialogContent3">
                <h4 className="ContentName">AMD {price * count}</h4>
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
              </div>
            </div>
          </div>
        </DialogContent>
        <DialogActions>
          <Button onClick={onClose} color="primary">
            Close
          </Button>
          <Button onClick={this.handleSave} color="primary">
            <span className="ContentAddToCartSpan"> Add </span>
            <FontAwesomeIcon icon="cart-plus" />
          </Button>
        </DialogActions>
      </Dialog>
    );
  }
}

export default EditModal;