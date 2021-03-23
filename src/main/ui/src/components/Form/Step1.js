import React from "react";
import Avatar from "@material-ui/core/Avatar";
import CssBaseline from "@material-ui/core/CssBaseline";
import {useForm} from 'react-hook-form'
import {useHistory} from 'react-router-dom'
import FolderSharpIcon from "@material-ui/icons/FolderSharp";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import { MainContainer } from "./MainContainer";
import { Form } from "./Form";
import { Input } from "./Input";
import { PrimaryButton } from "./PrimaryButton";
import { useData } from "./DataContext";


const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));




 
export const Step1 = () => {
 
 const history=useHistory();
const { setValues ,data } = useData();
const classes = useStyles();
const { register ,handleSubmit} = useForm({
  defaultValues: { name: data.name, description: data.description, developer: data.developer, price:data.price, gender: data.gender},
    mode: "onBlur"
});
const onSubmit=(data)=>{
  history.push("./step2");
  setValues(data);
}


  return (
    <MainContainer component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <FolderSharpIcon />
        </Avatar>
        <Typography component="h1" variant="h5" color="textPrimary">
          Subir un juego
        </Typography>
    
   
        <Form onSubmit={handleSubmit(onSubmit)}>
               
                    <Input
                        autoComplete="name"
                        name="name"
                        id="name"
                        type="text"
                        label="Name"
                        autoFocus
                        InputRef={register}
                      />
                  
        <br/>
                    <Input
                      InputRef={register}
                      multiline
                      rows={4}

                      type="text"
                      id="description"
                      label="Description"
                      name="description"
                      />
                    
                    <br>
                    <Input
                        autoComplete="developer"
                        name="developer"
                        type="text"
                        id="developer"
                        label="Developer"
                        InputRef={register}
                      />
                      
                   
                    <br/> 
                    <Input
                      name="gender"
                      id="gender"
                      type="text"
                      label="Gender"
                      InputRef={register}
                      />
                      
                    
                    <br/> 
                    <Input
                      autoComplete="price"
                      name="price"
                      id="price"
                      type="text"
                      label="Price"
                      InputRef={register}
                      />
                      
                 
                    <br/> 
                    
                  <PrimaryButton 
                    
                  >
                  Next
                  </PrimaryButton>
                  </br>
                  
      </Form> 
              </div>
              
    </MainContainer>
          );
        
    }
    export default Step1;