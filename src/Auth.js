import React from 'react'
import { Box, Button, TextField, Typography } from '@mui/material'
import InputAdornment from '@mui/material/InputAdornment';
import EmailIcon from '@mui/icons-material/Email';
import PasswordIcon from '@mui/icons-material/Password';
const Auth = () => {
  return (
    <div>
      <form>
        <Box display="flex"
          flexDirection={"column"}
          maxWidth={350}
          alignItems="center"
          justifyContent={"center"}
          margin="auto"
          marginTop={5}
          padding={3}
          boxShadow={'0px 0px 10px #7D7D7E'}>

          <Typography variant='h5' padding={1}>ĐĂNG NHẬP</Typography>
          <TextField
            fullWidth
            size='small' margin="normal" type={'email'} variant='outlined' placeholder='Email'
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <EmailIcon sx={{ color: "#89D5C9" }} />
                </InputAdornment>
              ),
            }}></TextField>
          <TextField
            fullWidth
            size='small' margin="normal" type={'password'} variant='outlined' placeholder='Mật khẩu'
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <PasswordIcon sx={{ color: "#89D5C9" }} />
                </InputAdornment>
              ),
            }}></TextField>
          <Button sx={{ marginTop: 2, borderRadius: 5, backgroundColor: "#89D5C9", fontSize: 16, fontStyle: "bold" }} variant="contained" >ĐĂNG NHẬP</Button>
        </Box>
      </form>
    </div>
  )
}

export default Auth
