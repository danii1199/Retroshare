import CardProduct from "../CardProduct/CardProduct";

const Product = ({ basket, product, addProduct, RemoveItemFromBasket }) => (
  <CardProduct
    basket={basket}
    product={product}
    addProduct={addProduct}
    RemoveItemFromBasket={RemoveItemFromBasket}
  />
);
export default Product;
