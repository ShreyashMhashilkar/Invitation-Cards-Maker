import { useSelector } from "react-redux";
import { useNavigate,Navigate,Outlet } from 'react-router-dom';

const ProtectedRoutes = ({children})=>{
    // const navigate = useNavigate();
    const { detailItem } = useSelector((state) => state.detail)
    return(
       
        detailItem[0] ? children : <Navigate to="/"/>
    
    )
}

export default ProtectedRoutes;