import OneProduct from "./OneProduct";

const Product = ({ basket, product, addProduct, RemoveItemFromBasket }) => (
  <OneProduct
    basket={basket}
    product={product}
    addProduct={addProduct}
    RemoveItemFromBasket={RemoveItemFromBasket}
  />
);
export default Product;
