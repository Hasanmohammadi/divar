/* eslint-disable jsx-a11y/anchor-is-valid */
import { Hidden } from "@material-ui/core/";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";

export interface NavbarLinksProps {}

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
    navbarLinksList: {
      display: "flex",
      justifyContent: "flex-end",
      listStyle: "none",
      margin: " 0 0 0 6px",
      alignSelf: "center",
    },

    links: {
      textDecoration: "none",
      color: "#000000d1",
      fontSize: " 0.9rem",
      fontWeight: 500,
      margin: "0px 10px 0 18px",
      "&:hover": {
        color: "#909090",
      },
    },
  })
);

const NavbarLinks: React.FC<NavbarLinksProps> = () => {
  const classes = useStyles();
  return (
    <>
      <Hidden smDown>
        <ul className={classes.navbarLinksList}>
          <li>
            <a className={classes.links} href="#">
              دیوار من
            </a>
          </li>
          <li>
            <a className={classes.links} href="#">
              چت
            </a>
          </li>
          <li>
            <a className={classes.links} href="#">
              دربارهٔ دیوار
            </a>
          </li>
          <li>
            <a className={classes.links} href="#">
              بلاگ
            </a>
          </li>
          <li>
            <a className={classes.links} href="#">
              پشتیبانی
            </a>
          </li>
        </ul>
      </Hidden>
    </>
  );
};

export default NavbarLinks;
