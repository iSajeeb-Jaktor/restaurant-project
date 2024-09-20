import React, { useContext } from 'react';
import { AuthContest } from '../providers/AuthProvider';

const useAuth = () => {
   const auth = useContext(AuthContest);
   return auth ;
};

export default useAuth;