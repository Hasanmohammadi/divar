import { Box } from "@material-ui/core";
import Card from "./Card";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import { useContext } from "react";
import Context from "../../context";
import InfiniteScroll from "react-infinite-scroll-component";

import { v4 as uuidv4 } from "uuid";

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
export interface DataType {
  category: string;
  city: string;
  description: string;
  has_chat: boolean;
  image: string;
  image_overlay_tag: any;
  image_top_left_tag: any;
  index: number;
  normal_text: string;
  red_text: string;
  title: string;
  token: string;
  web_image: any;
  widget_type: string;
}
export interface InfoType {
  widget_type: string;
  data: DataType;
}

const Cards: React.FC<CardsProps> = () => {
  const context = useContext(Context);
  const classes = useStyles();
  //@ts-ignore
  const cardInformation = context.data.widget_list;

  return (
    //@ts-ignore
    <InfiniteScroll
      dataLength={cardInformation.length}
      next={context.goToNextPage}
      hasMore={true}
    >
      <Box>
        <hr className={classes.line} />
        <Box className={classes.cardsContainer}>
          {cardInformation.map((info: InfoType) => {
            return <Card data={info.data} key={uuidv4()} />;
          })}
        </Box>
      </Box>
    </InfiniteScroll>
  );
};

export default Cards;
