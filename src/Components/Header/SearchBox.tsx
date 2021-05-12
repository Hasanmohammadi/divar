import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import { Box } from "@material-ui/core";
import BtnCategory from "./SuggestionList";
import Cards from "../Cards/Cards";
import { useContext } from "react";
import Context from "../../context";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      width: "77%",
    },
    formControl: {},
    selectEmpty: {
      border: " 1px solid #c7c7c7",
      width: "10.6em",
      height: "3.3em",
      margin: " 1.8em 0 0 0",
      borderRadius: "0px 3px 3px 0px",
      background: "#ededed",
      fontFamily: "inherit",

      fontSize: "15px",
      cursor: "pointer",
      transition: "2s",
    },
    searchBox: {
      display: "flex",
      width: "100%",
      height: "5em",
    },

    SearchInput: {
      width: " 48%",
      height: "60%",
      margin: " 1.66em 0 0 0",
      border: "1px solid #c7c7c7",
      borderRadius: "2px 0 0 2px",
      fontSize: "medium",
      padding: "0 5px",
    },
  })
);

export interface DropDownProps {}

const SearchBox: React.FC<DropDownProps> = () => {
  const classes = useStyles();
  const { setSearchWord } = useContext(Context);

  return (
    <Box className={classes.container}>
      <Box className={classes.searchBox}>
        <select name="cars" className={classes.selectEmpty}>
          <option value="volvo">همهٔ آگهی‌ها</option>
          <option value="saab">املاک</option>
          <option value="mercedes">لوازم الکترونیکی</option>
          <option>مربوط به خانه</option>
          <option>خدمات</option>
          <option>وسایل شخصی</option>
          <option>سرگرمی و فراغت</option>
          <option>اجتماعی</option>
          <option>برای کسب و کار</option>
          <option>استخدام و کاریابی</option>
        </select>

        <form onSubmit={(e: React.ChangeEvent<HTMLInputElement> |  any) => setSearchWord(e)} style={{ width: "100%" }}>
          <input
            className={classes.SearchInput}
            placeholder="جستجو در همهٔ آگهی‌ها"
          />
        </form>
      </Box>

      <BtnCategory />
      <Cards />
    </Box>
  );
};

export default SearchBox;
function e(
  e: any
): import("react").ChangeEventHandler<HTMLInputElement> | undefined {
  throw new Error("Function not implemented.");
}
