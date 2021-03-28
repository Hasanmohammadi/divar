import { Box } from "@material-ui/core";
import { createStyles, Theme, makeStyles } from "@material-ui/core/styles";
import { useContext } from "react";
import { NavLink } from "react-router-dom";
import Context from "../../context";

export interface ModalCityProps {
  city: any;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    title: {
      margin: "14px 0 0 0",
    },
    cityContainre: {
      display: "grid",
      gridTemplateColumns: "repeat(5, 1fr)",
      gridTemplateRows: "repeat(1, 1fr)",
      gridColumnGap: "10px",
      gridRowGap: "10px",
    },
    link: {
      color: " #a50303",
      border: " 1px solid #a50303",
      margin: "10px 0px 10px 15px",
      padding: "4px 0px",
      borderRadius: "3px",
      textDecoration: "none",
      textAlign: "center",
      transition: "0.4s",
      "&:hover": {
        background: "#fff4f4",
      },
    },
    linkActive: {
      color: "white",
      background: "#a50303",
      "&:hover": {
        background: "#a50303",
      },
    },
  })
);

const ModalCity: React.FC<ModalCityProps> = ({ city }) => {
  const classes = useStyles();
  const context = useContext(Context)


  return (
    <Box>
      <p className={classes.title}>شهرهای پربازدید</p>
      <Box className={classes.cityContainre}>
        {city.popularCity.map((city: any) => {
          return (
            <NavLink
              to={`/${city.value}/${context.suggestionUrl}`}
              key={city.value}
              className={classes.link}
              activeClassName={classes.linkActive}
              onClick={() => context.addCityToLocalStorage(city)}
            >
              {`${city.name} `}
            </NavLink>
          );
        })}
      </Box>
      <p className={classes.title}>همهٔ شهرها</p>
      <Box className={classes.cityContainre}>
        {city.allCity.map((city: any) => {
          return (
            <NavLink
              to={`/${city}`}
              key={city}
              className={classes.link}
              activeClassName={classes.linkActive}
            >
              {`${city} `}
            </NavLink>
          );
        })}
      </Box>
    </Box>
  );
};

export default ModalCity;
