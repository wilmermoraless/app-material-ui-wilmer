import { Box, Container, Typography, IconButton, Button, } from "@mui/material";
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ShareIcon from '@mui/icons-material/Share';

import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';


const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));


export default function plantas() {
 

  return (
   <Container maxWidth="sm" sx={{bgcolor: '#aed581', height:500 }}>

<Box sx={{display:'flex',  justifyContent: 'space-between', }}>
   <Box sx={{mt: 2}}>
   <ArrowBackIosNewIcon/>
   </Box>
   <Box sx={{mt: 2}}>
    <ShareIcon/>
    </Box>
    </Box>

    <Box align='right' sx={{mt:6}}>
      <Typography color="initial" gutterBottom  sx={{ fontSize: 14 }}> size</Typography>
      <Typography color="initial" paragraph sx={{ fontWeight: 'medium' }}>Small</Typography>
      <Typography color="initial" gutterBottom sx={{ fontSize: 14 }}> Humidity</Typography>
      <Typography color="initial" paragraph sx={{ fontWeight: 'medium' }}> 64%</Typography>
      <Typography color="initial" gutterBottom sx={{ fontSize: 14 }}> Light</Typography>
      <Typography color="initial" paragraph sx={{ fontWeight: 'medium' }}> Diffuse</Typography>
      <Typography color="initial" gutterBottom sx={{ fontSize: 14 }}> Temperature</Typography>
      <Typography color="initial" sx={{ fontWeight: 'medium' }}> 18-24 C</Typography>

    </Box>
    
    <Box sx={{bgcolor:'#f5f5f5', mt: 8, p:4, width: 600, ml: -3,  borderRadius: '16px'}}>
    <Box sx={{display:'flex', justifyContent: 'space-between'}}>
      <Typography color="initial" paragraph sx={{ fontWeight: 'medium'}}>
        Dracena Fragrans
      </Typography>
      <Typography color="initial" sx={{ fontWeight: 'medium'}}>
        $65.00
      </Typography>

      </Box>
      <Typography color="initial">
        one type of Dracaena that has an export value is Dracaena fragans. D. Fragans is actually a shrub
        native to the African continent, from South Sudan, Mozambique to Angola.
      </Typography>

      <Typography color="initial" sx={{mt: 4, fontWeight: 'medium' }}>
       Phothos
      </Typography>

      <div>
      <Stack direction="row" spacing={2} sx={{mt: 2}} >
        <Item sx={{height: 80, width: 60, bgcolor: '#9e9e9e'}}></Item>
        <Item sx={{height: 80, width: 60, bgcolor: '#9e9e9e'}}></Item>
        <Item sx={{height: 80, width: 60, bgcolor: '#9e9e9e'}}></Item>
        <Item sx={{height: 80, width: 60, bgcolor: '#9e9e9e'}}></Item>
        <Item sx={{height: 80, width: 60, bgcolor: '#9e9e9e'}}></Item>
      </Stack>
    </div>
    <Box sx={{display:'flex', mt: 4}}>
      <IconButton sx={{ color: '#1b5e20'}}>
      <FavoriteBorderOutlinedIcon/>
      </IconButton>
      <Button sx={{px: 6, ml: 2, bgcolor: '#1b5e20', color: 'white'}} >Buy Now</Button>
    </Box>

    
    </Box>

   </Container> 
  );
}


