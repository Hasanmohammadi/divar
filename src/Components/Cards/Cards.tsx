import { Box } from "@material-ui/core";
import Card from "./Card";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import { useContext } from "react";
import Context from "../../context";
import InfiniteScroll from "react-infinite-scroll-component";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    line: {
      width: " 97%",
      border: "0px",
      borderBottom: "1px solid rgb(214, 214, 214)",
      margin: "4em 0 0 0",
    },
    cardsContainer: {
      display: "grid",
      gridTemplateColumns: "repeat(3, 1fr)",
      gridTemplateRows: "repeat(3, 1fr)",
      gridRowGap: "7px",
    },
  })
);

export interface CardsProps {}

const Cards: React.FC<CardsProps> = () => {
  const context = useContext(Context);
  const classes = useStyles();
  //@ts-ignore
  const cardInformation = context.data.widget_list;

  // console.log(cardInformation);
  return (
    //@ts-ignore
     <InfiniteScroll dataLength={cardInformation.length} next={context.goToNextPage} hasMore={true}> 
    <Box>
      <hr className={classes.line} />
      <Box className={classes.cardsContainer}>
        {cardInformation.map((info: any) => {
          return <Card data={info.data} key={info.data.token} />;
        })}
      </Box>
    </Box>
  </InfiniteScroll>
  );
};

export default Cards;
