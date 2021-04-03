
import { useContext } from "react";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import Context from "../../context";
import { NavLink } from 'react-router-dom';


export interface MenuHeaderProps {
    parent:any;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({

    link: {
      textDecoration: "none",
      color: "grey",
      transition: "0.5s",
      "&:hover": {
        color: "black",
      },
    },

    backToAll: {
      margin: "1em 1em 0 0",
      fontSize: "14px",
    },
    arrowIcon: {
      fontSize: "1em",
      color: "#1f1f1f",
      margin: " 0px 0px -3px 10px",
    },
    parent: {
      fontWeight: 500,
      color: "black",
      textDecoration: "none",
    },
  })
);

 
const MenuHeader: React.FC<MenuHeaderProps> = ({parent}) => {
    const classes = useStyles();
    const context = useContext(Context);
    return ( <> 
          <p className={classes.backToAll}>
        <ArrowForwardIcon className={classes.arrowIcon} />
        <NavLink to={`/${context.locationValue}`} className={classes.link} onClick={context.setDataHomePage}>
          همه آگهی ها
        </NavLink>
      </p>

      <p className={classes.backToAll}>
        <NavLink
          to={`/${context.locationValue}/${parent.slug}`}
          className={classes.parent}
        >
          <parent.icon />
          {parent.name}
        </NavLink>
      </p>
    
    
    
    </> );
}
 
export default MenuHeader;