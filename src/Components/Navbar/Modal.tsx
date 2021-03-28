import { useContext, useState } from "react";

import { Box, Button, Modal } from "@material-ui/core";
import { createStyles, Theme, makeStyles } from "@material-ui/core/styles";
import CloseIcon from "@material-ui/icons/Close";
import SearchRoundedIcon from "@material-ui/icons/SearchRounded";
import RoomOutlinedIcon from "@material-ui/icons/RoomOutlined";
import ModalCity from "./ModalCity";
import cityDivar from "../../DATA/divar_city.json"
import Context from "../../context";

export interface ModalProps {}

function getModalStyle() {
  const top = 4;
  const left = 20;

  return {
    top: `${top}%`,
    left: `${left}%`,
    // transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    paper: {
      position: "absolute",
      width: "58%",
      backgroundColor: theme.palette.background.paper,
      borderRadius: "3px",
      border: "none",
      boxShadow: theme.shadows[5],
      padding: "18px 18px",
      overflow: "scroll",
      height: "41em",
    },

    root: {
      "& > *": {
        margin: theme.spacing(1),
      },
    },

    location: {
      color: "rgb(34 36 38 / 59%)",
      padding: "7px 1.5em",
      margin: "10px 7px 0 0",
    },

    locationIcon: {
      marginLeft: "4px",
    },
    mudalInput: {
      width: "97%",
      border: "1px solid #dadada",
      height: "2.7em",
      marginTop: "3.3em",
      padding: "0 10px",
      fontSize: " 15px",
      borderRadius: "3px",
    },
    searchIcon: {
      position: "absolute",
      top: "4.5em",
      left: "1.2em",
      color: "#909090",
    },
  })
);

interface modalStyleState {
  top: string;
  left: string;
}

const NavbarModal: React.FC<ModalProps> = () => {
  const classes = useStyles();
  // getModalStyle is not a pure function, we roll the style only on the first render
  const [city , setCity] = useState<any>(cityDivar)
  const [modalStyle] = useState<modalStyleState>(getModalStyle);
  const [open, setOpen] = useState<boolean>(false);
  const context = useContext(Context)
  // const location = city.popularCity.find((c:any) => c.value === context.cityUrl)

  

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setCity(cityDivar)
  };

  const getSearchedCity = (e:any) => {
// console.log(e.target.value);
const inputValue = e.target.value
// // console.log(city.popularCity);
// const filtredCity = cityDivar.popularCity.filter((c:any)=> c.name.includes(e.target.value))


const filtredCity = cityDivar.popularCity.filter((c:any)=> c.name.slice(0, inputValue.length).includes(inputValue))


setCity({...city , popularCity:filtredCity})




  }
  

  const body = (
    <div style={modalStyle} className={classes.paper}>
      <Box component="div" display="flex" justifyContent="space-between">
        <h3 id="simple-modal-title">انتخاب شهر</h3>
        <CloseIcon
          fontSize="small"
          onClick={handleClose}
          style={{ cursor: "pointer" }}
        />
      </Box>
      <Box component="div" display="flex">
        <input
          placeholder= "جست و جوی سریع نام شهر..."
          className={classes.mudalInput}
          onChange={getSearchedCity}
        />
        <SearchRoundedIcon className={classes.searchIcon} />
      </Box>
      {/* <Route path="/:id">  */}
        <ModalCity city={city}/>
      {/* </Route> */}
    </div>
  );


  return (
    <>
      <Box component="div">
        <Button type="button" onClick={handleOpen} className={classes.location}>
          <RoomOutlinedIcon className={classes.locationIcon} />
          {/* {location.name} */}
          {context.cityUrl}
        </Button>

        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="simple-modal-title"
          aria-describedby="simple-modal-description"
        >
          {body}
        </Modal>
      </Box>
    </>
  );
};

export default NavbarModal;
