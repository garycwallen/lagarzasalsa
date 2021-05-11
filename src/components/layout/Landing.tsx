import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { Box } from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    hero: {
      backgroundImage: `linear-gradient(rgba(0,0,0, 0.5), rgba(0,0,0,0.5)), url('https://images.unsplash.com/photo-1593759608136-45eb2ad9507d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&w=1041&q=80')`,
      height: '500px',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      position: 'relative',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      color: '#fff',
      fontSize: '4rem',
      [theme.breakpoints.down('sm')]: {
        height: 300,
        fontSize: '3em',
      },
    },
  }),
);

function Landing() {
  const classes = useStyles();

  return (
    <Box className={classes.hero}>
      <Box>La Garza Salsa</Box>
    </Box>
  );
}

export default Landing;
