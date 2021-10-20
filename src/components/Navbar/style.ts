import {  makeStyles } from "@material-ui/core";

const navbarStyle = makeStyles((theme) => ({
  AppBar: {
    backgroundColor: '#283593'
  },
  navlinks: {
    display: "flex",
    marginLeft: theme.spacing(5)
  },
  logo: {
    flexGrow: 1,
    cursor: "pointer"
  },
  link: {
    textDecoration: "none",
    color: "white",
    fontSize: "20px",
    marginLeft: theme.spacing(5),
    "&:hover": {
      color: "#c4e8ff",
    },
  }
}));

export default navbarStyle;