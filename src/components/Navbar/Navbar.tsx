import React from "react";
import {
  AppBar,
  Toolbar,
  CssBaseline,
  Typography,
  useTheme,
  useMediaQuery,
} from "@material-ui/core";
import { Link } from "react-router-dom";
import navbarStyle from './style';
import DrawerComponent from "./DrawerComponent";

const Navbar: React.FC = ():JSX.Element => {
  const theme = useTheme();
  const classes = navbarStyle(theme);
  const isMobile:boolean = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <AppBar position="static" className={classes.AppBar}>
      <CssBaseline />
      <Toolbar>
        <Typography variant="h6" className={classes.logo}>
          Covid app
        </Typography>
        {isMobile ? (
          <DrawerComponent />
        ) : (
          <div className={classes.navlinks}>
            <Link to="/" className={classes.link}>
              Global statistics
            </Link>
            <Link to="/country" className={classes.link}>
              Country statistic
            </Link>
            <Link to="/about" className={classes.link}>
              About
            </Link>
          </div>
        )}
      </Toolbar>
    </AppBar>
  );
}
export default Navbar;