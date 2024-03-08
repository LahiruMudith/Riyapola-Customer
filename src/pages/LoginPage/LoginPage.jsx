import {Box, Button, TextField} from "@mui/material";

export default function LoginPage() {
    return (
        <>
            <Box sx={{width:'60vw', height:'70vh', backgroundColor:'#FF7200', margin:'auto', marginTop:'10vh', borderRadius:'2vw', }}>
                <h1 style={{fontFamily:'sans-serif', paddingLeft:'7vw', paddingTop:'5vh'}}>Login To Your Account</h1>
                <Box sx={{width:'30vw'}}>
                    <TextField sx={{width:'30vw', position:'relative', left:'3vw', top:'7vh', color:'white'}} id="outlined-basic" label="NIC Number" variant="outlined" />
                    <TextField sx={{width:'30vw', position:'relative', left:'3vw', top:'9vh'}} id="outlined-basic" label="Password" variant="outlined" />
                    <Button sx={{ position:'relative', left:'14vw', top:'13vh'}}
                        variant="contained"
                    >
                        Login
                    </Button>
                </Box>
                <Box sx={{width:'23vw', height:'55vh', backgroundColor:'white', position:'relative', marginLeft:'34vw', marginTop:'-29vh', borderRadius:'1vw', padding:'1vw'}}>
                    <p style={{fontSize:'2.5vw', fontWeight:'bold', marginLeft:'5vw', marginTop:'18vh'}}>New Here ?</p>
                    <Button sx={{ position:'relative', left:'8vw'}}
                            variant="contained"
                    >
                        Register
                    </Button>
                </Box>

            </Box>
        </>
    )
}