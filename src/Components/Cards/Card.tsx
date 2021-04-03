import React from "react";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

import Typography from "@material-ui/core/Typography";
import ButtonBase from "@material-ui/core/ButtonBase";
import { Box } from "@material-ui/core";
import { Link } from "react-router-dom";
import InfiniteScroll from "react-infinite-scroll-component";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    paper: {
      width: "18.5em",
      height: "8.3em",
      padding: "16px",
      border: "1px solid #e4e4e4",
      borderRadius: "4px",
      margin: " 8px 0 0 0",
    },

    image: {
      borderRadius: "5px",
    },
    img: {
      margin: "0 0 0 0",
      display: "block",
      width: "10em",
      height: "10em",
      borderRadius: "5px",
    },

    line: {
      width: " 97%",
      border: "0px",
      borderBottom: "1px solid rgb(214, 214, 214)",
    },
    link: {
      textDecoration: "none",
      color: "black",
      fontSize: "17px",
    },
    priceText :{

    }
  })
);

export interface CardProps {
  data: any;
  // title?: string;
  // image?: string;
  // description?: string;
  // normal_text?: string;
  // city?: string;
  // district?: string;
  // category?: string;
}

const Card: React.FC<CardProps> = ({data , data:{
  title,
  image,
  description,
  normal_text,
  city,
  district,
  category,
}}) => {

  


  
  const classes = useStyles();
  return (
    // <InfiniteScroll> 
    <Box className={classes.root}>
      <Box className={classes.paper}>
        <Link to="/" className={classes.link}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm container>
              <Grid item xs container direction="column" spacing={2}>
                <Grid item xs>
                  <p>{title.slice(0,35)}</p>
                </Grid>
                <Grid item>
                  <Typography variant="body2" color="textSecondary">
                    {description}
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    {normal_text}
                  </Typography>
                </Grid>
              </Grid>
              <Grid item>
                <ButtonBase className={classes.image}>
                  <img
                    className={classes.img}
                    alt="card's img"
                    src={image}
                  />
                </ButtonBase>
              </Grid>
            </Grid>
          </Grid>
        </Link>
      </Box>
    </Box>
    // </InfiniteScroll>
  );
};

export default Card;
