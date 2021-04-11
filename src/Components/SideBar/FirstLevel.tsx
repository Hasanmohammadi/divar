import { useContext } from "react";
import { NavLink, Route } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import Context from "../../context";
import SecondLevel from "./SecondLevel";
import MenuHeader from "./MenuHeader";

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
    nestedLink: {
      textDecoration: "none",
      color: "grey",
      borderRight: "1px solid ",
      paddingRight: "10px",
      fontWeight: 500,
      fontSize: "11px",
      transition: "0.4s",
      "&:hover": {
        color: "black",
      },
    },
    nestedLinkActive: {
      textDecoration: "none",
      color: "#a50303",
      borderRight: "1px solid #a50303",
      paddingRight: "10px",
      fontWeight: 500,
      fontSize: "11px",
      transition: "0.4s",
      "&:hover": {
        color: "black",
      },
    },

    pLink: {
      margin: "1em 1em 0 0",
      fontSize: "14px",
    },
    pLinkNested: {
      margin: "1em 6em 0 0",
      fontSize: "14px",
    },
    pLinkTitle: {
      margin: "1em 5em 0 0",
      fontSize: "14px",
      fontWeight: 500,
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
              <p className={classes.pLink}>
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
              <MenuHeader parent={item} />

              {item.children.map((second: any) => {
                return (
                  <>
                    <div key={uuidv4()}>
                      <p className={classes.pLinkNested}>
                        <NavLink
                          to={`/${context.locationValue}/${second.slug}`}
                          className={classes.link}
                          onClick={() => context.setDataFromSugg(second.slug)}
                        >
                          {second.name}
                        </NavLink>
                      </p>
                    </div>
                  </>
                );
              })}
            </Route>

            
            {item.children.map((thirdLevel: any) => {

              // console.log(`/${context.locationValue}/${thirdLevel.slug}`);
              console.log(thirdLevel);

              return (
                <>
                  <Route path={`/${context.locationValue}/${thirdLevel.slug}`}>
                   <MenuHeader parent={item} />
                   <p className={classes.pLinkTitle}>{thirdLevel.name}</p>

                    {thirdLevel.children.map((thirdLevelLink:any) => {
                      console.log(thirdLevelLink);
                      return(<>
                      <div key={uuidv4()}>

                        <p className={classes.pLinkNested}>
                          <NavLink
                            to={`/${context.locationValue}/${thirdLevelLink.slug}`}
                            className={classes.nestedLink}
                            activeClassName={classes.nestedLinkActive}
                            // onClick={() => context.setDataFromSugg(thirdLevel.slug)}
                            >
                            {thirdLevelLink.name}
                          </NavLink>
                        </p>
                      </div>
                      </>)
                    })}
                  </Route>
                </>
              );
            })}
          </div>
        );
      })}
    </>
  );
};

export default FirstLevel;
