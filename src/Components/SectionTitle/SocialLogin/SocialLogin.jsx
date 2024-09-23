import React from 'react';
import { FaFacebookF, FaGithub, FaGoogle } from 'react-icons/fa';
import useAuth from '../../../hooks/useAuth';
import useAxiosPublic from '../../../hooks/useAxiosPublic';
import { useNavigate } from 'react-router-dom';

const SocialLogin = () => {

    const { googleSignIn } = useAuth();

    const { githubLogin } = useAuth();

    const axiosPublic = useAxiosPublic();
    const navigate = useNavigate();

    const handleGoogleSignIn = () => {
        googleSignIn()
            .then(result => {
                console.log(result.user);
                const userInfo = {
                    email: result.user?.email,
                    name: result.user?.displayName
                }
                axiosPublic.post('/users', userInfo)
                    .then(res => {
                        console.log(res.data);
                        navigate('/');
                    })
            })
    }

    const handleGithubSignIn = () => {
        githubLogin()
            .then(result => {
                console.log(result.user);
                const gitHubUserInfo = {
                    email: result.user?.email,
                    name: result.user?.displayName
                }
                axiosPublic.post('/users', gitHubUserInfo)
                    .then(res => {
                        console.log(res.data);
                        navigate('/');
                    })
            })
    }
    return (
        <div className='py-3'>
            <button className="btn btn-circle ml-24 border-black">
                <FaFacebookF></FaFacebookF>
            </button>
            <button onClick={handleGoogleSignIn} className="btn btn-circle mx-8 border-black">
                <FaGoogle></FaGoogle>
            </button>
            <button onClick={handleGithubSignIn} className="btn btn-circle border-black">
                <FaGithub></FaGithub>
            </button>
        </div>
    );
};

export default SocialLogin;