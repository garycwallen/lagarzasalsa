import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { AppBar, Toolbar, Typography } from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    appBar: {
      backgroundColor: '#fff',
    },
  }),
);

function Navbar() {
  const classes = useStyles();

  return (
    <AppBar className={classes.appBar} position='static'>
      <Toolbar>
        <Typography variant='h6' color='primary'>
          La Garza Salsa
        </Typography>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
