import React, { Component , useState} from 'react'
import TextField from '@material-ui/core/TextField';  
import { Autocomplete } from '@material-ui/lab';
import axios from 'axios';  
import {  fade, makeStyles, withStyles } from "@material-ui/core/styles";
import { Link } from '@material-ui/core';
const useStyles = makeStyles((theme) => ({

    searchIcon: {
        padding: theme.spacing(0, 2),
        height: "100%",
        position: "absolute",
        pointerEvents: "none",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        "&:hover": {
         visibility: "hidden",
        },
      },search: {
        
        position: "relative",
        borderRadius: theme.shape.borderRadius,
        backgroundColor: fade(theme.palette.common.white, 0.15),
        "&:hover": {
          backgroundColor: fade(theme.palette.common.white, 0.35),
        },
        marginRight: theme.spacing(2),
        marginLeft: 0,
        width: "100%",
        [theme.breakpoints.up("sm")]: {
          marginLeft: theme.spacing(3),
          width: "auto",
        },
      },
     
    inputRoot: {
        color: "black",
      },
      inputInput: {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
        transition: theme.transitions.create("width"),
        width: "100%",
        [theme.breakpoints.up("md")]: {
          width: "20ch",
        },
      },
}))

export class AComplete extends Component {  
        constructor(props) {  
                super(props)  
                
                this.state = {  
                        ProductData: []  
                }  
        }  
       
        componentDidMount() {  

                axios.get('http://localhost:8080/retroshare/pr-all').then(response => {  
                        console.log(response.data);  
                        this.setState({  
                                ProductData: response.data  
                        });  
                });  
        }  
        
        render() {  
            const { classes } = this.props;
           
                return (  
                    <div className={classes.search} >
                           
                        <div className={classes.searchIcon}> 
                         
                             <Autocomplete 
                                className="pading"  
                               
                                options={this.state.ProductData}  
                                renderOption={(option) => (
                                  <React.Fragment>
                                    <span
                                      style={{ cursor: "pointer" }}
                                      onClick={() => {
                                        window.location.href =`pr/${option.id}`;
                                      }}
                                    >
                                    ·{option.name}
                                    </span>
                                  </React.Fragment>
                                )}
                                getOptionLabel={option => option.name}     
                                getOptionId={option =>option.id}                            
                                style={{ width: 200 }}                                      
                                renderInput={params => (
                                  <TextField  
                                    classes={{
                                      root: classes.inputRoot,
                                      input: classes.inputInput
                                            
                                    }} 
                                    {...params}
                                    label="Search..."
                                    variant="outlined"
                                    fullWidth 
                                     />

                                    )}  

                              /> 
                          
                        </div>
                                
                           
                    </div>  

                )  
        }  
  
}  
export default withStyles(useStyles)(AComplete)