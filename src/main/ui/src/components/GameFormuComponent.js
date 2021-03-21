import React from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import FolderSharpIcon from "@material-ui/icons/FolderSharp";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import { useForm } from "react-hook-form";

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="/">
        retroshare
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

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


export default function GameFormuComponent() {
  const classes = useStyles();
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    
    fetch("http://localhost:8080/retroshare/g-save/2/2", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      
      body: JSON.stringify(data)
    }
    )
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <FolderSharpIcon />
        </Avatar>
        <Typography component="h1" variant="h5" color="textPrimary">
          Subir un juego
        </Typography>
    
   
                <form
                  className={classes.form}
                  noValidate
                  onSubmit={handleSubmit( onSubmit)}
                >
               
                    <Grid item xs={12} >
                      <TextField
                        autoComplete="name"
                        name="name"
                        variant="outlined"
                        required
                        fullWidth
                        id="name"
                        label="Name"
                        autoFocus
                        inputRef={register}
                      />
                    </Grid>
        <br/>
                    <Grid item xs={12}>
                      <TextField
                        variant="outlined"
                        inputRef={register}
                        required
                        multiline
                          rows={4}
                        fullWidth
                        id="description"
                        label="Description"
                        name="description"
                        autoComplete="description"
                      />
                    </Grid>
                    <br/>
                    <Grid items  xs={12}>
                    
                        <input
                          type="file"
                      name="imagen" id="imagen"
                      multiple
                      onchange={register}/>
                     
                    </Grid> <br></br>
                    <Grid>
                    <TextField
                        autoComplete="developer"
                        name="developer"
                        variant="outlined"
                        required
                        fullWidth
                        id="developer"
                        label="Developer"
                        
                        inputRef={register}
                      />
                      
                    </Grid>  
                    <br/> 
                    <Grid>
                    <TextField
                        autoComplete="gender"
                        name="gender"
                        variant="outlined"
                        required
                        fullWidth
                        id="gender"
                        label="Gender"
                        inputRef={register}
                      />
                      
                    </Grid>  
                    <br/> 
                    <Grid>
                    <TextField
                        autoComplete="price"
                        name="price"
                        variant="outlined"
                        required
                        fullWidth
                        id="price"
                        label="Price"
                        
                        inputRef={register}
                      />
                      
                    </Grid>  
                    <br/> 
                    
                  <Button 
                    type="submit"
                    fullWidth
                    variant="contained"
                    color="primary"
                   
                    className={classes.submit}
                  >
                  Subir producto
                  </Button>
                  
                </form> 
              </div>
              <Box mt={5}>
               
              </Box>
            </Container>
          );
        
    }