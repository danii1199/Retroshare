import React from 'react'
import Button from "@material-ui/core/Button"
import {makeStyles} from "@material-ui/core/styles"

const useStyles = makeStyles((theme) => ({
    paper: {
      marginTop: theme.spacing(8),
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      
    },
    root:{
        width:"100%",
        marginTop: theme.spacing(1)
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
  
export const PrimaryButton=({children, ...props})=>{
    const styles =useStyles();
    return(

        <Button
        type="submit"
        fullWidth
        variant="outlined"
        color="primary"
        className={styles.root}
        {...props}
        >{children}</Button>
    )

}