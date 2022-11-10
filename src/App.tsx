import { Container, CssBaseline, Grid } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import Detail from './Components/Detail';
import Header from './Components/Header';
import Master from './Components/Master';
import theme from './theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container maxWidth={false} disableGutters>
        <Grid
          container
          direction="row"
          justifyContent='flex-start'
          alignItems='flex-start'
          sx={{
            height: '100vh',
          }}
        >
          <Header/>
          <Master/>
          <Detail/>
        </Grid>
      </Container>
    </ThemeProvider>
  );
}

export default App;

