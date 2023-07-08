import { Container, IconButton, InputBase, Paper, Button, Box,Typography, Grid, Fab, } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import NotificationAddOutlinedIcon from '@mui/icons-material/NotificationAddOutlined';
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



export default function App() {
  return (
   <Container maxWidth="sm" sx={{bgcolor: '#f5f5f5' }}>
    
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

    <Box component="span" sx={{pt: 6, ml: 3}}>
    < NotificationAddOutlinedIcon />
    </Box>
    </Box>

    <Box sx={{mt:4,display: 'flex', justifyContent: 'space-between', color:'white'}}>
      <Button >
        all
      </Button>
      <Button sx={{ml:4}}>
        Outdoors
      </Button>
      <Button sx={{ml:4}}>
        Indoors
      </Button>
      <Button sx={{ml:4}}>
        Garden
      </Button>
    </Box>

<Box sx={{ width: '100%', mt:6, }}>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid item xs={6}>
          <Item>
          <Typography sx={{ fontWeight: 'medium' }} paragraph>Monstera</Typography>
          
          <Typography paragraph>Monstera is a type of tropical,
          plant that is popular</Typography>
          <Typography endIcon={<AddIcon />}>$ 50.25</Typography>

          <Fab size="small" color="secondary" aria-label="add">
        <AddIcon />
      </Fab>

          </Item>
        </Grid>
        <Grid item xs={6}>
          <Item >
          <Typography sx={{ fontWeight: 'medium' }} paragraph>Aloe Vera</Typography>
          
          <Typography paragraph>Aloe Vera is a type of tropical,
          plant that is popular</Typography>
          <Typography endIcon={<AddIcon />}>$ 32.10</Typography>

          <Fab size="small" color="secondary" aria-label="add">
        <AddIcon />
      </Fab>
          </Item>
        </Grid>
       
      </Grid>
    </Box>

    <Typography sx={{mt:4,fontWeight: 'medium' }}>
      Featured plants
    </Typography>


    <Paper
      sx={{
        p: 2,
        margin: 'auto',
        maxWidth: 500,
        flexGrow: 1,
        mt: 2,
        backgroundColor: (theme) =>
          theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
      }}
    >
      <Grid container spacing={2}>
        
        <Grid item xs={12} sm container>
          <Grid item xs container direction="column" spacing={2}>
            <Grid item xs>
              <Typography gutterBottom variant="subtitle1" component="div" sx={{ fontWeight: 'medium', }} paragraph>
                Pinus Strobus
              </Typography>
              <Typography variant="body2" gutterBottom>
              $50.25
              </Typography>
              <Typography variant="body2" color="text.secondary">
                the strobus pine is found in nearctic broadleaf climates
              </Typography>
            </Grid>
            
          </Grid>
          <Grid item>
          <Fab size="small" color="secondary" aria-label="add">
        <AddIcon />
      </Fab>
          </Grid>
          
        </Grid>
      </Grid>
      
    </Paper>

    <Paper
      sx={{
        p: 2,
        margin: 'auto',
        maxWidth: 500,
        flexGrow: 1,
        mt: 4,
        backgroundColor: (theme) =>
          theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
          
      }}
    >
      <Grid container spacing={2} >
        
        <Grid item xs={12} sm container >
          <Grid item xs container direction="column" spacing={2} >
            <Grid item xs>
              <Typography gutterBottom variant="subtitle1" component="div" sx={{ fontWeight: 'medium' }} paragraph>
                Pinus Strobus
              </Typography>
              <Typography variant="body2" gutterBottom>
              $50.25
              </Typography>
              <Typography variant="body2" color="text.secondary">
                the strobus pine is found in nearctic broadleaf climates
              </Typography>
            </Grid>
            
          </Grid>
          <Grid item>
          <Fab size="small" color="secondary" aria-label="add">
        <AddIcon />
      </Fab>
          </Grid>
          
        </Grid>
      </Grid>
      
    </Paper>

    <SimpleBottomNavigation/>
   </Container>
    
    
  );
}


