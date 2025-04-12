import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';

import './App.css'


function App() {
  
  return (
    <Container maxWidth="sm">
        <Box sx={{ bgcolor: '#1c1c1c', height: '100vh', width: '100vh', alignItems: 'center' }}>
        <Typography variant="h1">
        To do list
      </Typography>
      <Box component="section" sx={{ p: 2, border: '1px dashed grey' }}>
      This Box renders as an HTML section element.
    </Box>
    <Box>
  
    <TextField className='border-color' sx={{width: '100%', }} id="outlined-basic" label="Outlined" variant="outlined" />
    </Box>

          </Box> 
        
        
      </Container>


  )
}

export default App
