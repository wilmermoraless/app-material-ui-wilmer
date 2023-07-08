import { Container, IconButton, InputBase, Paper,  Box, Typography, Grid, Fab, } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import FormatAlignRightIcon from '@mui/icons-material/FormatAlignRight';
import { styled } from '@mui/material/styles';
import AddIcon from '@mui/icons-material/Add';
import SimpleBottomNavigation from "./components/barra";


const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(4),
  textAlign: 'left',
  color: theme.palette.text.secondary,
}));



export default function popular() {
  return (
   <Container maxWidth="sm" sx={{bgcolor: 'text.disabled' }}>
    
    <Box sx={{display: 'flex'}}>
<Paper
      component="form"
      sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 400, mt: 4, border: 1, borderRadius: 6 }}
    >
      <IconButton sx={{ p: '10px' }} aria-label="menu">
      <SearchIcon />
      </IconButton>
      <InputBase
        sx={{ ml: 1, flex: 1 }}
        placeholder="Search"
        inputProps={{ 'aria-label': 'search ' }}
      />
    
    </Paper> 

    <Box component="span" sx={{pt: 6, ml: 2}}>
    < FormatAlignRightIcon />
    </Box>
    </Box>

    <Box sx={{mt:4,display: 'flex', justifyContent: 'space-between' }}>
     <Typography variant="h4" color="initial"> Popular Plant Among The People</Typography>
    </Box>

<Box sx={{ width: '100%', mt:6 }}>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid item xs={6}>
          <Item>
          <Typography sx={{ fontWeight: 'medium' }} paragraph>Monstera</Typography>
          
          <Typography paragraph>Monstera is a type of tropical,
          plant that is popular</Typography>
          <Typography endIcon={<AddIcon />} >$ 50.25</Typography>

          <Fab size="small" color="secondary" aria-label="add">
        <AddIcon />
      </Fab>

          </Item>
        </Grid>
        <Grid item xs={6}>
          <Item>
          <Typography sx={{ fontWeight: 'medium' }} paragraph>Dracena Fragrans</Typography>
          
          <Typography paragraph>Monstera is a type of tropical,
          plant that is popular</Typography>
          <Typography endIcon={<AddIcon />}>$ 50.25</Typography>

          <Fab size="small" color="secondary" aria-label="add">
        <AddIcon />
      </Fab>
          </Item>
        </Grid>

        <Grid item xs={6} sx={{mt: 4, mb:2}}>
          <Item>
          <Typography sx={{ fontWeight: 'medium' }} paragraph>Aloe Vera</Typography>
          
          <Typography paragraph>Monstera is a type of tropical,
          plant that is popular</Typography>
          <Typography endIcon={<AddIcon />}>$ 50.25</Typography>

          <Fab size="small" color="secondary" aria-label="add">
        <AddIcon />
      </Fab>
          </Item>
        </Grid>

        <Grid item xs={6} sx={{mt: 4, mb:2}}>
          <Item>
          <Typography sx={{ fontWeight: 'medium' }} paragraph>Euphorbia Cactus</Typography>
          
          <Typography paragraph>Monstera is a type of tropical,
          plant that is popular</Typography>
          <Typography endIcon={<AddIcon />}>$ 50.25</Typography>

          <Fab size="small" color="secondary" aria-label="add">
        <AddIcon />
      </Fab>
          </Item>
        </Grid>
       
      </Grid>
    </Box>

    <SimpleBottomNavigation/>
   </Container>
    
    
  );
}


