import React from 'react';
import { Box, Stack, Typography } from '@mui/material';
import Logo from '../assets/images/logo.png';

const Footer = () => (
  <Box mt="80px" bgcolor="#D7C3a5">
    <Stack gap="40px" sx={{ alignItems: 'center' }} flexWrap="wrap" px="40px" pt="24px">
      <img src={Logo} alt="logo" style={{ width: '200px', margin:"40px"}} />
    </Stack>
    
  </Box>
);

export default Footer;
