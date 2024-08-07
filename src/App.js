import './App.css';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Header from './Components/Header/Header';
import Stepper from './Components/Stepper/HorizontalLinearStepper';
function App() {
  return (
    <>
    <Header/>
      <Container>
        <Box sx={{ bgcolor: '#bfe2fd', height: '80vh', padding:'30px'}}>
        <Stepper/>
        </Box>
      </Container>
      
      
    </>
  );
}

export default App;
