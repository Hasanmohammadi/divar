import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import { useContext } from "react";
import { NavLink, Route } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import Context from "../../context";
import MenuHeader from "./MenuHeader";
import ThirdLevel from "./ThirdLevel";

export interface SecondLevelProps {
  child: any;
  parent: any;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    title: {
      color: "rgb(108 108 108)",
      margin: "2em 1em 0 0 ",
    },
    link: {
      textDecoration: "none",
      color: "grey",
      transition: "0.5s",
      "&:hover": {
        color: "black",
      },
    },

    pLink: {
      margin: "1em 4em 0 0",
      fontSize: "14px",
    },
  })
);

const SecondLevel: React.FC<SecondLevelProps> = ({ parent, child }) => {
  const classes = useStyles();
  const context = useContext(Context);

  return (
    <>
      <MenuHeader parent={parent} />
      {child.map((item: any) => {
        return (
          <div key={uuidv4()}>
            <p className={classes.pLink}>
              <NavLink
                to={`/${context.locationValue}/${item.slug}`}
                className={classes.link}
                onClick={() => context.setDataFromSugg(item.slug)}
              >
                {item.name}
              
              </NavLink>
            </p>
            {/* {console.log(`/${context.locationValue}/${item.slug}`)} */}
          

    
            <Route exact path={`/${context.locationValue}/${item.slug}`} >
              {/* {console.log(`/${context.locationValue}/${item.slug}`)} */}
                <p>hi</p>
              <ThirdLevel />
            </Route>
          </div>
        );
      })}
    </>
  );
};

export default SecondLevel;
