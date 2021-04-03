/* eslint-disable jsx-a11y/anchor-is-valid */
import { Link } from "react-router-dom";

import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import { Box, Hidden } from "@material-ui/core";
//@ts-ignore
import LOGO from "../../Image/divar-logo.PNG";
import MenuIcon from "@material-ui/icons/Menu";
import NavbarModal from "./Modal";
import NavbarLinks from "./Links";
import { useContext } from "react";
import Context from "../../context";

export interface NavbarProps {}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    paper: {
      position: "absolute",
      width: "58%",
      backgroundColor: theme.palette.background.paper,
      borderRadius: "3px",
      border: "none",
      boxShadow: theme.shadows[5],
      padding: "18px 18px",
    },

    root: {
      "& > *": {
        margin: theme.spacing(1),
      },
    },

    navbarContainer: {
      width: "99.8%",
      height: " 4em",
      border: "1px solid rgb(34 36 38 / 8%)",
      display: "flex",
      position:"fixed",
      backgroundColor:"white",
      //@ts-ignore
      //@ts-ignore
      zIndex:"1",
    },

    rightSide: {
      width: "50%",
      display: "flex",
      padding: "1rem 0",
      alignSelf: "center",
    },

    leftSide: {
      width: "50%",
      display: "flex",
      justifyContent: "flex-end",
      alignSelf: "center",
    },

    navbarBtn: {
      width: "6rem",
      height: "2.5rem",
      backgroundColor: "#a62626",
      color: "white",
      fontWeight: 500,
      border: "1px solid #a62626",
      borderRadius: "4px",
      fontSize: "inherit",
      margin: "0px 0px 0px 20px",
      cursor: "pointer",
      transition: "0.5s",
      "&:hover":{
        backgroundColor: "#cc4545"
      }
    },

    image: {
      margin: "7px 7px 0 0",
    },
    menuIconDiv: {
      alignSelf: "flex-end",
      margin: "0 0px 0 1em",
      cursor: "pointer",
    },
  })
);

const Navbar: React.FC<NavbarProps> = () => {
  const classes = useStyles();
const {setDataHomePage , locationValue} = useContext(Context)
  return (
    <Box className={classes.navbarContainer}>
      <Box className={classes.rightSide}>
        <Link to={`/${locationValue}`} onClick={setDataHomePage}>
          <img src={LOGO} alt="logo" className={classes.image} />
        </Link>
        <NavbarModal />
      </Box>

      <Box className={classes.leftSide}>
        <NavbarLinks />
        <Box>
          <button className={classes.navbarBtn}>ثبت آگهی</button>
        </Box>
        <Hidden mdUp>
          <Box className={classes.menuIconDiv}>
            <MenuIcon />
          </Box>
        </Hidden>
      </Box>
    </Box>
  );
};

export default Navbar;
