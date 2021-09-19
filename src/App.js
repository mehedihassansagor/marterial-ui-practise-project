import { PhotoCamera } from "@mui/icons-material";
import {
  AppBar,
  CssBaseline,
  Typography,
  Toolbar,
  Container,
  Grid,
  Button,
  Card,
  CardMedia,
  CardContent,
  CardActions,
} from "@mui/material";
import "./App.css";
import useStyles from "./styles";

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function App() {
  const styles = useStyles();
  return (
    <>
      <CssBaseline />
      <AppBar position="relative">
        <Toolbar>
          <PhotoCamera className={styles.icon} />
          <Typography variant="h6">Photo world</Typography>
        </Toolbar>
      </AppBar>
      <main>
        <div className={styles.topPart}>
          <Container maxWidth="sm">
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
              className="styles.bgStyle"
            >
              Hello people i am just tryng how can i use material ui in my
              project thats why i need to practis more and this web site is one
              of my practise projcet
            </Typography>
            <div className={styles.button}>
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
        <Container className={styles.cardGrid} maxWidth="md">
          <Grid container spacing={4}>
            {cards.map((card) => (
              <Grid item key={card} xs={12} md={4} sm={6}>
                <Card className={styles.card}>
                  <CardMedia
                    className={styles.cardMedia}
                    image="https://source.unsplash.com/random"
                    title="image title"
                  />
                  <CardContent className={styles.cardContent}>
                    <Typography variant="h5" gutterBottom>
                      this is the card
                    </Typography>
                    <Typography>this is media card i am using</Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small" color="primary">
                      View{" "}
                    </Button>
                    <Button size="small" color="primary">
                      more{" "}
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
    </>
  );
}

export default App;
