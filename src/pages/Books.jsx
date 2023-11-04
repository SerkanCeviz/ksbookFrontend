import React, { useEffect, useState } from "react";
import { Avatar, Card, CardHeader, Grid, CardMedia } from "@mui/material";
import BookIcon from "@mui/icons-material/Book";

function Book({ id }) {
  const [book, setBook] = useState([]);
  useEffect(() => {
    getAllBooks();
  }, []);

  async function getAllBooks() {
    const response = await fetch(`http://localhost:8080/book/getAll`);
    const jsonData = await response.json();
    setBook(jsonData);
  }

  async function getBooksWithCategoryId() {
    console.log("Selam");
  }

  return (
    <div>
      <Grid container spacing={2} justifyContent={"center"} marginTop={"2rem"}>
        {book.map((item) => {
          return (
            <Grid xs={2} marginRight={2}>
              <Card>
                <CardHeader
                  avatar={
                    <Avatar aria-label="recipe">
                      <BookIcon />
                    </Avatar>
                  }
                  title={item.name}
                />
                <CardMedia component="img" image={item.imagePath} />
              </Card>
            </Grid>
          );
        })}
      </Grid>
    </div>
  );
}

export default Book;
