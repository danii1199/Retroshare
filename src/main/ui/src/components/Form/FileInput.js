import React from 'react'
import { Controller } from "react-hook-form"
import Dropzone from 'react-dropzone'
import {Paper} from '@material-ui/core'
import {List} from '@material-ui/core'
import {ListItem} from '@material-ui/core'
import ListItemText from '@material-ui/core/ListItemText'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import CloudUpload from '@material-ui/icons/CloudUpload'
import { InsertDriveFile } from '@material-ui/icons'




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
export  const FileInput =({control,name})=>{


   

    return(
        <Controller
            control={control}
            name={name}
            defaultValue={[]}
            render={(onChange,onBlur,value)=>(<>
                <Dropzone onDrop={onChange}>
                {({getRootProps,getInputProps})=>(
                    <Paper variant="outlined" {...getRootProps()}>
                    <CloudUpload/>
                    <input {...getInputProps()} name={name} onBlur={onBlur}/>
                    <p>Drag and drop files here, or click to select files.</p>
                    </Paper>
                )}
                </Dropzone>
                <List>
                    {value.map((f,index)=>{
                        <ListItem>
                            <ListItemIcon>
                                <InsertDriveFile/>
                            </ListItemIcon>
                            <ListItemText primary={f.name} secondary={f.size}></ListItemText>
                        </ListItem>
                    })}
                </List>
               </> )}
        />
    )
}
export default FileInput;