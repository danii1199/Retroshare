import { Button, Container, Grid, Typography } from '@material-ui/core';
import { ShoppingCart } from '@material-ui/icons';
import * as React from 'react'
import './StyleProductView.css'

const createMarkup=(text)=>{
  return{__html: text};
}

const ProductView = (addProduct) => {
    const [product, setProduct] = React.useState([]);
   
  React.useEffect(() => {

    const id=window.location.pathname.split("/");
    obtenerDatos(id[2]);

  }, []);

  const obtenerDatos = async (id) => {
  
    const data = await fetch( `http://localhost:8080/retroshare/pr/${id}`);
    const product= await data.json();
    setProduct(product);
   
  };
 console.log(product.name)

      return(
        
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
            </Grid>
            <Grid item xs={12}>
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
      );
 
}
export default ProductView;