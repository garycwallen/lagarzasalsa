import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import {
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  CardActions,
  Container,
  Grid,
  Typography,
} from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    blogsContainer: {
      paddingTop: theme.spacing(3),
    },
    blogTitle: {
      fontWeight: 800,
      paddingBottom: theme.spacing(3),
    },
    card: {
      maxWidth: '100%',
    },
    media: {
      height: 240,
    },
  }),
);

function Articles() {
  const classes = useStyles();

  return (
    <Container maxWidth='lg' className={classes.blogsContainer}>
      <Typography variant='h4' className={classes.blogTitle}>
        Articles
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6} md={4}>
          <Card className={classes.card}>
            <CardActionArea>
              <CardMedia
                className={classes.media}
                image='https://images.unsplash.com/photo-1504544750208-dc0358e63f7f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=675&q=80'
                title='Contemplative Reptile'
              />
              <CardContent>
                <Typography gutterBottom variant='h5' component='h2'>
                  Salsa
                </Typography>
                <Typography variant='body2' color='textSecondary' component='p'>
                  Salsa is good!
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions></CardActions>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={4}></Grid>
        <Grid item xs={12} sm={6} md={4}></Grid>
        <Grid item xs={12} sm={6} md={4}></Grid>
      </Grid>
    </Container>
  );
}

export default Articles;
