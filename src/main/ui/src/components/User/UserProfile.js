import OneUser from "../../lib/OneUser";
import AuthService from "../../Service/Auth/AuthService";
import { ProductsContext } from "../../contexts/ProductsContext";
import { useContext } from "react";
import { Grid, Container, Typography, ThemeProvider } from "@material-ui/core";
import CardProduct from "../CardProduct/CardProduct";



const UserProfile = () => {
  const currentUser = AuthService.getCurrentUser();
  const { products } = useContext(ProductsContext);

  return (
    <div style={{maxWidth:"550px",margin:"0px auto"}}>
        <div style={{
           margin:"18px 0px",
            borderBottom:"1px solid grey"
        }}>

      
        <div style={{
            display:"flex",
            justifyContent:"space-around",
           
        }}>
            <div>
                <img style={{width:"160px",height:"160px",borderRadius:"80px"}}
                src={currentUser.avatar}
                />
              
            </div>
            <div>
                <h4 style={{paddingLeft:"30px"}}>UserName: {currentUser.name}</h4>
                <h5 style={{paddingLeft:"30px"}}>First Name: {currentUser.name}</h5>
                <h5 style={{paddingLeft:"30px"}}>First Name: {currentUser.name}</h5>
                <div style={{display:"flex",width:"108%"}}>
                    <h6 style={{paddingLeft:"30px"}}>Email:  {currentUser.name} </h6>
                    <h6 style={{paddingLeft:"30px"}}>Last Name: {currentUser.name} </h6>
                    <h6 style={{paddingLeft:"30px"}}>Phone Number: {currentUser.name} </h6>
                    <h6 style={{paddingLeft:"30px"}}>City: {currentUser.name} </h6>
                </div>

            </div>
        </div>
     
         <div className="file-field input-field" style={{margin:"10px"}}>
         </div>
         </div>      
        
        <Grid container spacing={2}>
            {products
              .map((product) => {
                return (
                  <Grid key={product.id} item sm={6} md={3}>
                    <CardProduct product={product} />
                  </Grid>
                );
              })}
          </Grid>
        
    </div>
);
};

export default UserProfile;