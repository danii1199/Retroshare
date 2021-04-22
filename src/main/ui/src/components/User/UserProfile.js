import OneUser from "../../lib/OneUser";
import AuthService from "../../Service/Auth/AuthService";




const UserProfile = () => {
  const currentUser = AuthService.getCurrentUser();

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
                <h4>{currentUser.name}</h4>
                <h5>{currentUser.name}</h5>
                <div style={{display:"flex",width:"108%"}}>
                    <h6 style={{paddingLeft:"30px"}}>First Name:  {currentUser.name} </h6>
                    <h6 style={{paddingLeft:"30px"}}>{currentUser.name} </h6>
                    <h6 style={{paddingLeft:"30px"}}>{currentUser.name} </h6>
                </div>

            </div>
        </div>
     
         <div className="file-field input-field" style={{margin:"10px"}}>
         </div>
         </div>      
        <div className="gallery">
           {/*  {
                mypics.map(item=>{
                    return(
                     <img key={item._id} className="item" src={item.photo} alt={item.title}/>  
                    )
                })
            }
 */}
        
        </div>
    </div>
);
};

export default UserProfile;