import { Box } from "@material-ui/core";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import SearchBox from "./SearchBox";
import SideBar from "../SideBar/SideBar";


const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    headerContainer: {
      display: "flex",
      position:"relative",
      top:"4em"
    },
  })
);

export interface HeaderProps {}

const Header: React.FC<HeaderProps> = () => {
  const classes = useStyles();
  
  return (
    <Box>
      <Box className={classes.headerContainer}>
        <SideBar />
        <SearchBox />

        {/* <Cards/> */}
      </Box>
    </Box>
  );
};

export default Header;
