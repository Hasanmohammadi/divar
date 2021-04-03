import { useContext } from "react";
import { NavLink, Route } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import Context from "../../context";
import SecondLevel from "./SecondLevel";

export interface FirstLevelProps {
  data: any;
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
      transition: "0.4s",
      "&:hover": {
        color: "black",
      },
    },

    pLink: {
      margin: "1em 1em 0 0",
      fontSize: "14px",
    },
    icons: {
      marginLeft: "6px",
    },
  })
);

const FirstLevel: React.FC<FirstLevelProps> = ({ data }) => {
  const classes = useStyles();
  const context = useContext(Context);
  
  return (
    <>
      <h4 className={classes.title}>دسته بندی ها</h4>
      {/*@ts-ignore*/}
      {data.children.map((item) => {
        return (
          <div key={uuidv4()}>
            <Route path={`/${context.locationValue}`} exact>
              <p
                className={classes.pLink}
               
              >
                <NavLink
                  to={`/${context.locationValue}/${item.slug}`}
                  className={classes.link}
                  onClick={() => context.setDataFromSugg(item.slug)}
                >
                  <item.icon style={classes.icons} />
                  {item.name}
                </NavLink>
              </p>
            </Route>
            <Route path={`/${context.locationValue}/${item.slug}`} exact>
              {console.log(`/${context.locationValue}/${item.slug}`)
              }
              <SecondLevel parent={item} child={item.children} />
            </Route>
          </div>
        );
      })}
    </>
  );
};

export default FirstLevel;
