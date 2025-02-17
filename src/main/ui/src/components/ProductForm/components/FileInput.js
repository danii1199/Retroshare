import Dropzone from "react-dropzone";
import { Controller } from "react-hook-form";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import CloudUpload from "@material-ui/icons/CloudUpload";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import InsertDriveFile from "@material-ui/icons/InsertDriveFile";

const useStyles = makeStyles((theme) => ({
    root: {
      background: theme.palette.secondary.main,
      textAlign: "center",
      cursor: "pointer",
      color: "#ffffff",
      padding: "10px",
      marginTop: "20px",
    },
    icon: {
      marginTop: "16px",
      color: theme.palette.primary.light,
      fontSize: "42px",
    },
  }));
  
  export const FileInput = ({ control, name }) => {
    const styles = useStyles();
  
    return (
      <Controller
        control={control}
        name={name}
        defaultValue={[]}
        render={({ onChange, onBlur, value }) => (
          <>
            <Dropzone onDrop={onChange}>
              {({ getRootProps, getInputProps }) => (
                <Paper
                  variant="outlined"
                  className={styles.root}
                  {...getRootProps()}
                >
                  <CloudUpload className={styles.icon} />
                  <input type="file" {...getInputProps()} name={name} onBlur={onBlur} />
                  <p>Arrastra una foto de tu producto</p>
                </Paper>
              )}
            </Dropzone>
            <List>
              {value.map((f, index) => (
                <ListItem key={index}>
                  <ListItemIcon>
                    <InsertDriveFile />
                  </ListItemIcon>
                  <ListItemText primary={f.name} secondary={f.size} />
                </ListItem>
              ))}
            </List>
          </>
        )}
      />
    );
  };