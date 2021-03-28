import { useContext } from "react";
import Context from "../../context";

import { Box } from "@material-ui/core";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    Container: {
      margin: "10px 0px 0 0px",
    },
    link: {

      margin: "0 0 0 12px",
      padding: "3px 10px",
      borderRadius: "3em",
      fontSize: "12px",
      color: "#a50303",
      background: "white" ,
      border: "1px solid #a50303",
      textDecoration: "none",
      '&:hover': {
        background: "#a50303",
        color: "white",

     },
    },
  })
);

export interface BtnCategoryProps {}

const SuggestionList: React.FC<BtnCategoryProps> = () => {
  const classes = useStyles();
  const context = useContext(Context);
  const { data  } = context;
  //@ts-ignore
  const list = data.suggestion_list;

  //@ts-ignore
  const btns = list.map((suggestion) => {
    return (
      <Link
        key={suggestion.value.category.value}
        to={`/${context.locationValue}/${suggestion.value.category.value}`}
        className={classes.link}
        onClick={()=>context.setSugg(suggestion.value.category.value)}
      >
        {`${suggestion.displayed_text} `}
      </Link>
    );
  });

  return <Box className={classes.Container}>{btns}</Box>;
};

export default SuggestionList;
