import { Box } from "@material-ui/core";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";

export interface SideBarProps {}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      border: "1px solid black",
      width: "23%",
      height: "30em",
    },
  })
);

const SideBar: React.FC<SideBarProps> = () => {
  const classes = useStyles();
  return <Box className={classes.container}></Box>;
};

export default SideBar;
