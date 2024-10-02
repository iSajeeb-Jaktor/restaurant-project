import { Navigate, useLocation } from 'react-router-dom';
import useAuth from '../hooks/useAuth';
import loadingImg from '../assets/others/cupcake-dribbble.gif'



const PrivateRoute = ({ children }) => {

    const { user, loading } = useAuth();

    const location = useLocation();

    if (loading) {
        return <>
            <div className='flex  justify-center mt-10'>
                <img src={loadingImg} alt="" />
            </div>
            <h1 className='uppercase text-center font-bold text-4xl  text-black font-serif'>welcome to our restaurant</h1>
        </>
    }

    if (user) {
        return children;
    }
    return <Navigate state={{ form: location }} replace to={'/login'}></Navigate>
};

export default PrivateRoute;