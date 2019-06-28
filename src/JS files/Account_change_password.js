import React from "react";
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Button from "@material-ui/core/Button";
import { Redirect } from "react-router";
import fire from "./Fire";
import firebase from "firebase";
import TextField from "@material-ui/core/TextField";


class PasswordChange extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            open: this.props.open,
            password: '',
            passwordConf: '',
            newPassword: '',
            newPasswordConf: '',
            email: '',
            user: null,
            confirmed: false,
            error: '',
        }
    }

    handleInputChange = (event, type) => {
        this.setState({
            [type]: event.target.value
        });
    };

    componentDidMount() {
        this.authListener();
    }

    authListener = () => {
        fire.auth().onAuthStateChanged(user => {
            if (user) {
                this.setState({user});
                localStorage.setItem("user", user.uid);
                this.getUserData();
            } else {
                this.setState({user: null});
                localStorage.removeItem("user");
            }
        });
    }

    getUserData = () => {
        const db = fire.firestore();
        db.collection("users").doc(fire.auth().currentUser.uid).get().then(db =>
            this.setState({
                email: db.data().email,
                password: db.data().password
            })
        )
    }

    changeConfirmed = () => {
        if (this.state.password === this.state.passwordConf){
            this.setState({confirmed: true})
        } else {
            this.setState({error: 'The password you entered is not correct'})
        }
    }

    changePassword = () => {
        const user = fire.auth().currentUser;
        const credential = firebase.auth.EmailAuthProvider.credential(
            user.email,
            this.state.passwordConf
        )
        user.reauthenticateWithCredential(credential).then(() => {
            user.updatePassword(this.state.newPassword);
        })
    }

    handleClose = () => {
        this.props.showNewPassword()
    }

    handleDataUpdate = () => {
        const db = fire.firestore();
        db.collection("users").doc(fire.auth().currentUser.uid).update({password: this.state.newPassword});
        this.changePassword();
        this.handleClose();
    }

    render() {
        const {open, newPassword, passwordConf, newPasswordConf, confirmed, error} = this.state
        return(
            <div>
                <Dialog
                    open={open}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description"
                    onClose={this.handleClose}
                >
                    <DialogTitle id="alert-dialog-title" onClose={this.handleClose}>{"Change Password"}</DialogTitle>
                    <DialogContent>
                        <DialogContentText id="alert-dialog-description">
                            If you want to change your password, please insert your current password below and confirm it
                        </DialogContentText>
                        <div>
                            <TextField
                                disabled={confirmed}
                                id="outlined-input"
                                label="Password"
                                type="password"
                                name="password"
                                autoComplete="password"
                                margin="normal"
                                variant="outlined"
                                onChange={e => this.handleInputChange(e, "passwordConf")}
                                value={passwordConf}
                            />
                        </div>
                        {error ? {error} : null}
                        <Button variant="outlined" disabled={confirmed} onClick={this.changeConfirmed}>Confirm Password</Button>
                        <div>
                            <TextField
                                disabled={!confirmed}
                                id="outlined-input"
                                label="New Password"
                                type="password"
                                name="password"
                                autoComplete="password"
                                margin="normal"
                                variant="outlined"
                                onChange={e => this.handleInputChange(e, "newPassword")}
                                value={newPassword}
                            />
                        </div>
                        <div>
                            <TextField
                                disabled={!confirmed}
                                id="outlined-input"
                                label="Confirm New Password"
                                type="password"
                                name="password"
                                autoComplete="password"
                                margin="normal"
                                variant="outlined"
                                onChange={e => this.handleInputChange(e, "newPasswordConf")}
                                value={newPasswordConf}
                            />
                        </div>
                        <Button variant="outlined" disabled={!(confirmed && newPassword && newPasswordConf && newPassword === newPasswordConf)} onClick={this.handleDataUpdate}>Change Password</Button>
                        <Button variant="outlined" onClick={this.handleClose}>Back</Button>
                    </DialogContent>
                </Dialog>
            </div>
        )
    }
}

export default PasswordChange;