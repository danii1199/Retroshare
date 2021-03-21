import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import FolderSharpIcon from "@material-ui/icons/FolderSharp";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import React, {Component} from "react";
import GameService from "../services/GameService";
import { Paper } from '@material-ui/core';
import { Avatar } from '@material-ui/core';

export default class GameFormu extends Component{
    constructor(props){
        super(props)
        this.state={
            name:''
        }
        this.changeNameHandler=this.changeNameHandler.bind(this);
        this.saveGames=this.saveGames.bind(this);
    }
    changeNameHandler=(event)=>{this.setState({name:event.target.value})};
    saveGames = (e) => {
        e.preventDefault();
        let game={name:this.state.name};
    
        console.log("games=>"+ JSON.stringify(game));
        GameService.createGame(game).then(res=>{
          this.props.history.push("/g-all");
        });
        }
    fetchUsers = () => {
          fetch("http://localhost:8080/retroshare/all", {
            method: "GET",
          })
            .then((res) => res.json())
            .then((result) => this.setData(result.rows))
            .catch((err) => console.log("error"));
    };
   
    useStyles = makeStyles((theme) => ({
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
    
    render(){
      const { classes } = this.props;
        return (
            <Container component="main" maxWidth="xs">
              <CssBaseline />
              <div className={Paper}>
                <Avatar className={Avatar}>
                  <FolderSharpIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                 Save Game
                </Typography>
                <form
                  className={classes.form}
                  noValidate
                  onSubmit={this.saveGames}
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
                        defaultvalue={this.formData}
                        onChange={this.changeNameHandler}
                      />
                    </Grid>
        <br/>
                    <Grid item xs={12}>
                      <TextField
                        variant="outlined"
                        onChange={this.handleChange}
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
                      onchange={(e)=>this.onChange(e)}/>
                    
                    </Grid><br></br>
                    <Grid>
                    <TextField
                        autoComplete="developer"
                        name="developer"
                        variant="outlined"
                        required
                        fullWidth
                        id="developer"
                        label="Developer"
                        
                        defaultvalue={this.formData}
                        onChange={this.handleChange}
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
                        
                        defaultvalue={this.formData}
                        onChange={this.handleChange}
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
                        
                        defaultvalue={this.formData}
                        onChange={this.handleChange}
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
}
/*
function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://material-ui.com/">
        retroshare
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const

  const fetchUsers = () => {
    fetch("http://localhost:8080/retroshare/all", {
      method: "GET",
    })
      .then((res) => res.json())
      .then((result) => setData(result.rows))
      .catch((err) => console.log("error"));
  };

  
  
*/