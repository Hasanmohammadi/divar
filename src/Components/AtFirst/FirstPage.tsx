import { createStyles, Theme, makeStyles } from "@material-ui/core/styles";
import cityDivar from "../../DATA/divar_city.json";
import ModalCity from "../Navbar/ModalCity";

import { BrowserRouter } from 'react-router-dom';
export interface FirstPageProps {}
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
     padding:"0 10em",
    },

  })
);

const FirstPage: React.FC<FirstPageProps> = () => {
  const classes = useStyles();

  return (
      <BrowserRouter> 
    <div className={classes.container}>
      <div >
        {/*@ts-ignore */}
        <h1>لطفا شهر خود را انتخاب کنید</h1>
        <ModalCity city={cityDivar} />
      </div>
    </div>
    </BrowserRouter>
  );
};

export default FirstPage;
