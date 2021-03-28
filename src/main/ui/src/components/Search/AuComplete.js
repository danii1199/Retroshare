import { Grid, InputAdornment, makeStyles, TextField ,withStyles,} from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search'
import Autocomplete from '@material-ui/lab/Autocomplete';
import React, { useEffect, useState } from 'react'
import RetroshareService from '../../Service/RetroshareService';

import './style.css'

const CssTextField = withStyles({
    root: {
      '& label.Mui-focused': {
        color: 'white',
      },
      '& .MuiInput-underline:after': {
        borderBottomColor: 'white',
      },
      '& .MuiFilledInput-root': {
        '& fieldset': {
          borderColor: 'white',
          width:200
        },
        '&:hover fieldset': {
          borderColor: 'white',
        },
        '&.Mui-focused fieldset': {
          borderColor: 'white',
        },
      },
    },
  })(TextField);
  const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
    },
    margin: {
      margin: theme.spacing(1),
    },
  }));
 const  AuComplete =()=>{
    
        const [option, setOption] = useState([]);

        useEffect(() => {
          obtenerDatos();
        }, []);
      
        const obtenerDatos = async () => {
          RetroshareService.getProduct().then((response) => {
            const { data } = response;
            setOption(data);
          })};
          const classes = useStyles();
        
    return(
        
        <Autocomplete 
        
       freeSolo
        options={option}  
        renderOption={(option) => (
          <React.Fragment>
            <span
              style={{ cursor: "pointer" }}
              onClick={() => {
                window.location.href =`pr/${option.id}`;
              }}
            >
            {option.name}
            </span>
          </React.Fragment>
        )}
        getOptionLabel={option => option.name}                                
        style={{color: "white"}}                                      
        renderInput={params => (
            <Grid container spacing={1} alignItems="center" >
                <Grid item>
                
                <SearchIcon style={{color: "white"}} />
                
                </Grid>
                <Grid item>
                <CssTextField  
                    className={classes.margin}
                    id="custom-css-filled-input"
                    color="secondary"
                    {...params}
                    style={{ width: 200 ,color: "white"}}
                    label="Search..."
                    variant="standard"
                    fullWidth 
                />
                </Grid>
            </Grid>
            )}  
            

      /> 
    
        )

}
export default AuComplete;