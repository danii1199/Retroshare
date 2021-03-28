import { Button, Container, Grid, Typography } from '@material-ui/core';
import { ShoppingCart } from '@material-ui/icons';
import React from 'react'
import ProductAPI from '../../lib/ProductAPI';
import './StyleProductView.css'
const createMarkup=(text)=>{
    return{__html: text};
  }
const OneProduct = ({
    basket,
    product,
    addProduct,
    updateProduct,
    RemoveItemFromBasket,
  }) => {
    return (
        <Container className="product-view">
        <Grid container spacing={4}>
          <Grid item xs={12} md={8} className="image-wrapper">
            <img

            // onLoad={()=>{
              // setLoading(false);
              //}}
              src={product.imgagen}
              alt={product.name}
            />
          
          
          </Grid>
          <Grid item xs={12} md={4} className="text">
            <Typography variant="h2">{product.name}</Typography>
            <Typography variant="p" dangerouslySetInnerHTML={createMarkup(product.description)}></Typography>
            <Typography variant="h3">Price:{product.price}€</Typography>
            <Button
              size="large"
              className="custom-button"
              onclick={() =>{
               // addProduct(product.id)
              }}
            >
              <ShoppingCart/>Add Product
            </Button>
          </Grid>
         
        </Grid>
      </Container>
    
    )
}

export default OneProduct;