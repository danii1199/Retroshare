import CardProduct from "../CardProduct/CardProduct";

const Product = ({ product, basket , addProduct, RemoveItemFromBasket}) => (
  
  <CardProduct
    basket={basket}
    product={product}
    addProduct={addProduct}
    RemoveItemFromBasket={RemoveItemFromBasket}
  />
);
export default Product;
