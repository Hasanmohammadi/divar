import { useLocation } from "react-router";
import MenuHeader from "./MenuHeader"

export interface ThirdLevelProps {
}
 
const ThirdLevel: React.FC<ThirdLevelProps> = () => {
    
    console.log("3");
    const location = useLocation()
    console.log(location);
    
    
    return ( <div>
    {/* <MenuHeader/> */}
    <p>header</p>
    </div> );
}
 
export default ThirdLevel;