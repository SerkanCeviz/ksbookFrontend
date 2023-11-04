import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import HomeIcon from "@mui/icons-material/Home";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Typography from "@mui/material/Typography";
import ClearAllIcon from "@mui/icons-material/ClearAll";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="sticky">
        <Toolbar>
          <Link to="">
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
              startIcon={<MenuBookIcon />}
            >
              <HomeIcon />
              <Typography fontSize={"2rem"} sx={{ ml: 1 }}>
                K&SBook
              </Typography>
            </IconButton>
          </Link>

          <Link to="/categories">
            <Button
              sx={{ mr: 2 }}
              startIcon={<ClearAllIcon />}
              variant="contained"
            >
              Categories
            </Button>
          </Link>
          <Link to="/book">
            <Button
              sx={{ mr: 2 }}
              startIcon={<MenuBookIcon />}
              variant="contained"
            >
              Books
            </Button>
          </Link>
          <Button
            edge="e"
            startIcon={<ShoppingBasketIcon />}
            variant="contained"
            onClick={handleOpen}
          >
            Cart
          </Button>
        </Toolbar>
      </AppBar>
      <Modal open={open} onClose={handleClose} closeAfterTransition>
        <Box sx={style}>
          <Typography variant="h6" component="h2">
            Text in a modal
          </Typography>
          <Typography sx={{ mt: 2 }}>
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
          </Typography>
        </Box>
      </Modal>
    </Box>
  );
}
