import { Container, Grid, Slider, TextField } from '@material-ui/core';
import React, { useEffect, useState } from 'react'
import ProductAPI from '../../lib/ProductAPI';
import Product from './Product';
import RetroshareService from '../../Service/RetroshareService';
import './StyleProductView.css'
import Card from '../CardSlider/card/Card';
const ProductView = ()=>{
 
    
    const [product, setProduct] = useState([]);

    useEffect(() => {
      obtenerDatos();
    }, []);
  
    const obtenerDatos = async () => {
      const id=(window.location.pathname.split("/")[2]);
      RetroshareService.getOneProduct(id).then((response) => {
        const { data } = response;
        setProduct(data);
      })};
     console.log(product.name);
    return (
        <>
          <div>
            <Container id="products">
                <Grid container >
                        <Grid key={product.id} item>
                            <Product product={product} />
                            <Card />
                        
                         
                        </Grid>
                </Grid>
            </Container>
          </div>
        </>
      );
}
export default ProductView;