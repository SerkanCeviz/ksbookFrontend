import React, { useEffect, useState } from "react";
import { Avatar, Card, CardHeader, Grid, CardMedia } from "@mui/material";
import BookIcon from "@mui/icons-material/Book";

function Category({ setId }) {
  const [category, setCategory] = useState([]);
  useEffect(() => {
    getCategories();
  }, []);

  async function getCategories() {
    const response = await fetch("http://localhost:8080/category/getAll");
    const jsonData = await response.json();
    setCategory(jsonData);
  }
  return (
    <div>
      <Grid container spacing={2} justifyContent={"center"} marginTop={"2rem"}>
        {category.map((item) => {
          return (
            <Grid xs={2} marginRight={2}>
              <Card
                onClick={() => {
                  setId(() => item.id);
                }}
              >
                <CardHeader
                  avatar={
                    <Avatar aria-label="recipe">
                      <BookIcon />
                    </Avatar>
                  }
                  title={item.name}
                />
                <CardMedia
                  component="img"
                  // height="194"
                  image={item.imagePath}
                />
              </Card>
            </Grid>
          );
        })}
      </Grid>
    </div>
  );
}

export default Category;
