import { PhotoCamera } from "@mui/icons-material";
import {
  AppBar,
  CssBaseline,
  Typography,
  Toolbar,
  Container,
  Grid,
  Button,
} from "@mui/material";
import "./App.css";

function App() {
  return (
    <>
      <CssBaseline />
      <AppBar position="relative">
        <Toolbar>
          <PhotoCamera />
          <Typography variant="h6">Photo world</Typography>
        </Toolbar>
      </AppBar>
      <main>
        <div>
          <Container maxWidth="sm" style={{ marginTop: "100px" }}>
            <Typography
              variant="h2"
              align="center"
              color="textPrimary"
              gutterBottom
            >
              My photo
            </Typography>
            <Typography
              variant="h6"
              align="center"
              color="textSecondary"
              paragraph
            >
              Hello people i am just tryng how can i use material ui in my
              project thats why i need to practis more and this web site is one
              of my practise projcet
            </Typography>
            <div>
              <Grid container spacing={2} justify="center">
                <Grid item xs={6} align="end">
                  <Button variant="contained" color="primary">
                    See my photo
                  </Button>
                </Grid>
                <Grid item xs={6} align="start">
                  <Button variant="outlined" color="primary">
                    Secondary Action
                  </Button>
                </Grid>
              </Grid>
            </div>
          </Container>
        </div>
      </main>
    </>
  );
}

export default App;
