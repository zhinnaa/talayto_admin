import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { BackgroundImage } from '../StyleComponent/Logout';
import x from "../Image/Logout.png"
export default function AlertDialog({ handleClose }) {
  return (
    <BackgroundImage >
    <Dialog
      open={true} // The dialog is always open when triggered
      onClose={handleClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title">Logout Confirmation</DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          Are you sure you want to logout?
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} color="primary">
          Cancel
        </Button>
        <Button onClick={handleLogout} color="primary">
          Logout
        </Button>
      </DialogActions>
    </Dialog>
    </BackgroundImage>
  );

  // Implement the logout logic in this function
  function handleLogout() {
    // You can add your logout logic here
    // For example, you can make an API request to log the user out
    // Once the logout is successful, you can close the dialog and perform any additional actions (e.g., redirect)
    handleClose(); // Close the dialog
  }
}
