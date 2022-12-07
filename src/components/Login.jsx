import { Grid, TextField, Button,Paper} from '@material-ui/core';


function Login()
{
    const inp={
        margin:'5px 0px'
    }
    const btn={
        margin:'20px 0px',
        backgroundColor:'purple',
        color:'white'
    } 
     
   return(
       <div align='center' style={{margin:'50px auto'}}>
      <Grid ><h1>B/S/H/</h1></Grid> 
      <Paper component="form" align='center'  elevation={3} style={{width:'380px',padding:'10px 20px'}} >
       <Grid >
        <div >
        <h2 align='left' style={{marginBottom:'5px'}}><strong>Sign in to account</strong></h2>
        <p align='left'style={{color:'GrayText',marginTop:'0px'}}>Enter your official email and password to login</p>
        </div>
        <div align='left' style={{padding:'10px 0px',}}>
        <label><strong>Email</strong></label>
       <TextField style={inp}  variant="outlined" placeholder="your-email@bshg.com" fullWidth name="email"/>
       <label><strong>Password</strong></label>
       <TextField style={inp}   variant="outlined" placeholder="********" fullWidth name="password" type="password"/>
       <Button style={btn} type="submit" variant="contained" fullWidth >Login</Button>
       </div>
   </Grid>
   </Paper>
   </div>
   )
}

export default Login;