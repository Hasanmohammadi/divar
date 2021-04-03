import { Box } from "@material-ui/core";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";

import { allCategories } from "../../DATA/SubMenu-data";
import { NavLink } from "react-router-dom";
import FirstLevel from "./FirstLevel";
export interface SideBarProps {}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
     
      width: "23%",
    },
  })
);

const SideBar: React.FC<SideBarProps> = () => {
  const classes = useStyles();

  return (
    <Box className={classes.container}>
      <FirstLevel data={allCategories}/>
     
    </Box>
  );
};

export default SideBar;
