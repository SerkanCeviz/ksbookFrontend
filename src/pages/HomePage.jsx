import * as React from "react";
import ClearAllIcon from "@mui/icons-material/ClearAll";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Typography from "@mui/material/Typography";
import { Input, InputLabel, MenuItem, Select } from "@mui/material";
import axios from "axios";

export default function Homepage() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [kitapIsmi, setKitapIsmi] = React.useState("");
  const [kitapUrl, setKitapUrl] = React.useState("");
  const [kategoriId, setKategoriId] = React.useState("");

  const [category, setCategory] = React.useState([]);
  React.useEffect(() => {
    getCategories();
  }, []);

  async function getCategories() {
    const response = await fetch("http://localhost:8080/category/getAll");
    const jsonData = await response.json();
    setCategory(jsonData);
  }

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

  const kitapKaydet = () => {
    axios
      .post("http://localhost:8080/book", {
        name: kitapIsmi,
        imagePath: kitapUrl,
        category: {
          id: kategoriId,
        },
      })
      .then((response) => console.log(response.data))
      .then((error) => console.log(error));
  };
  return (
    <div>
      <Button sx={{ mr: 2, mt: 2 }} startIcon={<AddIcon />} variant="contained">
        Add Category
      </Button>
      <Button
        onClick={handleOpen}
        sx={{ mr: 2, mt: 2 }}
        startIcon={<AddIcon />}
        variant="contained"
      >
        <MenuBookIcon style={{ mr: 2 }} />
        Add Book
      </Button>
      <Modal open={open} onClose={handleClose} closeAfterTransition>
        <Box sx={style}>
          <Typography variant="h6" component="h2">
            Kitap İsmi
          </Typography>
          <Input
            onChange={(e) => {
              setKitapIsmi(e.target.value);
            }}
          />
          <Typography variant="h6" component="h2" style={{ mt: 2 }}>
            Kitap Resmi(url)
          </Typography>
          <Input
            onChange={(e) => {
              setKitapUrl(e.target.value);
            }}
          />
          <InputLabel id="demo-simple-select-label">Kategori</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={kategoriId}
            label="Age"
            onChange={(e) => {
              setKategoriId(e.target.value);
            }}
          >
            {category.map((item) => {
              return <MenuItem value={item.id}>{item.name}</MenuItem>;
            })}
          </Select>
          <Button
            style={{ marginTop: "5rem" }}
            onClick={() => {
              kitapKaydet();
            }}
          >
            Kaydet
          </Button>
        </Box>
      </Modal>
    </div>
  );
}
