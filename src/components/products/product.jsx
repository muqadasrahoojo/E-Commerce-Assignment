import React, { useEffect, useState } from 'react'
import Product1 from "../../assests/Product-1.jpg";
import Product2 from "../../assests/product-2.jpg";
import Product3 from "../../assests/product-3.jpg";
import { Box, Card, Divider, Snackbar, SnackbarContent, Typography } from '@mui/material';
import ShareIcon from '@mui/icons-material/Share';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import "./product.css";
import CloseIcon from '@mui/icons-material/Close';



const dummyProducts = [
  {
    id: 1,
    img: Product1,
    name: "Product 1",
    price: "10"
  },
  {
    id: 2,
    img: Product2,
    name: "Product 2",
    price: "11"
  },
  {
    id: 3,
    img: Product3,
    name: "Product 3",
    price: "12"
  }
]

const Product = () => {

  const [cartList, setCartList] = useState([]);
  const [openAlert, setOpenAlert] = useState(false)

  // console.log(cartList);

  const cartHandler = (product) => {
    const isExist = cartList.find((cart) => cart.id === product.id);



    if (!isExist) {
      setCartList((prev) => [...prev, product]);

      let strCartList = JSON.stringify(cartList);

      localStorage.setItem("cartList", strCartList);

    } else {
      setOpenAlert(true);
    }


  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpenAlert(false);
  };

  return (

    <>
      <Snackbar
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
        open={openAlert}
        autoHideDuration={6000}
        onClose={handleClose}
        className='mt-5'
      >
        <SnackbarContent style={{
          backgroundColor: '#ff6362',
        }}
          message={
            <Box sx={{ display: "flex", gap: "90px", alignItems: "center" }}>

              <span id="client-snackbar">Product Already exist</span>
              < CloseIcon onClick={handleClose} />
            </Box>
          }
        />
      </Snackbar>
      <Box sx={{ display: "flex", gap: "30px" }} className="container mt-4">
        {dummyProducts?.map((product, index) => {

          return (


            <Card key={index} sx={{ padding: "40px", cursor: "pointer", width: "250px" }} >
              <Box>
                <Box className="text-center">
                  <img className='product-image' width={100} src={product.img} alt={`${product.name}`} />
                </Box>
                <Typography variant="h5" className='mt-3'>{product.name}</Typography>

                <Divider sx={{ borderColor: "#333" }} className='mt-2' variant='fullWidth' />

                <Box className="d-flex justify-content-between mt-3">
                  < ShareIcon />
                  < FavoriteBorderIcon />
                  < AddShoppingCartIcon onClick={() => { cartHandler(product); }
                  } />
                </Box>

              </Box>
            </Card>


          );
        })}

      </Box>

    </>
  );
};

export default Product
