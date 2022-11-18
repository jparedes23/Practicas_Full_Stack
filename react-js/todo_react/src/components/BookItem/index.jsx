import {
    Box,
    Button,
    Card,
    CardContent,
    CardMedia,
    Typography,
  } from "@mui/material";
  import { useContext } from "react";
  import { BookContext } from "../../context/BookContext";
  
  const BookItem = (props) => {
    const { book } = props;
    const { addItem, searchBookInArray,deleteItem } = useContext(BookContext);
  
    return (
      <Card>
        <CardMedia
          src={book.volumeInfo?.imageLinks?.thumbnail}
          height={300}
          component="img"
        />
        <CardContent>
          <Typography fontWeight="900" variant="h6">
            {book.volumeInfo.title}
          </Typography>
          <Typography variant="body1">
            {book.volumeInfo?.description?.substring(0, 120)}...
          </Typography>
          <Box my={2}>
          {searchBookInArray(book)? (
            <Button onClick={() => deleteItem(book)} fullWidth color="success">
            Eliminar
          </Button>
          ):(
            <Button onClick={() => addItem(book)} fullWidth color="success">
            Agregar
          </Button>
          )}
          </Box>
        </CardContent>
      </Card>
    );
  };
  
  export default BookItem;