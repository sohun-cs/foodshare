import { useContext, useEffect, useState } from "react";
import { FaEye, FaEyeSlash, FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { Link, ScrollRestoration, useLocation, useNavigate, } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import toast from "react-hot-toast";
import { GithubAuthProvider, GoogleAuthProvider } from "firebase/auth";

const Login = () => {

    ScrollRestoration('/');
    useEffect(() => {
        document.title = 'FoodSphere | Login'
    }, []);

    const { user, login, googleSignIn, githubSignIn } = useContext(AuthContext);
    const [showPassword, setShowPassword] = useState(true);

    const navigate = useNavigate();
    const location = useLocation();
    // useEffect(() => {
    //     if (user) {
    //         navigate('/')
    //     }
    // }, [navigate, user])
    // const from = location.state || '/'

    const handleLogin = e => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const email = form.get('email');
        const password = form.get('password');
        e.target.reset();

        login(email, password)
            .then(() => {
                toast.success('User Login Successfully');
                navigate(location?.state ? location.state : '/');
            })
            .catch(() => {
                toast.error("User not found")
            })
    };



    const handleGoogleLogin = () => {

        const provider = new GoogleAuthProvider();
        googleSignIn(provider)
            .then(() => {
                toast.success('User Login Successfully');
                
                navigate(location?.state ? location.state : '/');
            })
            .catch(error => {
                console.error(error);
            })

        console.log(user);
    }

    const handleGithubLogin = () => {

        const provider = new GithubAuthProvider();
        githubSignIn(provider)
            .then(() => {
                toast.success('User Login Successfully')
                navigate(location?.state ? location.state : '/');

            })
            .catch(error => {
                console.error(error);
            })
    }

    console.log('google use: ', user);


    return (
        <div className={` bg-no-repeat bg-cover `}>
            <div className="max-w-[1536px] mx-auto min-h-[calc(100vh-112px)] flex justify-center items-center">
                <div className="font-rubik bg-green-300 bg-opacity-40 p-10 lg:p-20 ">

                    <form onSubmit={handleLogin}>

                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

                            <div className=''>
                                <img src='https://i.ibb.co/w0v1XrC/registeration.png' alt="" />
                            </div>

                            <div className="max-w-full max-h-full flex flex-col items-center justify-center">
                                <h1
                                    className="text-emerald-800 font-semibold text-center text-2xl my-4">
                                    Login Now!
                                </h1>


                                <div className="space-y-2 w-full">

                                    <div>
                                        <input
                                            className=" font-medium border-b-2 border-emerald-300 py-3 px-4 my-3 focus:outline-none focus:border-b-2 placeholder-emerald-300 focus:border-emerald-700 w-full"
                                            name="email"
                                            type="email"
                                            placeholder="Email"
                                            required />
                                    </div>

                                    <div className="relative">
                                        <input
                                            className=" font-medium border-b-2 border-emerald-300 py-3 px-4 my-3 focus:outline-none focus:border-b-2 placeholder-emerald-300 focus:border-emerald-700 w-full"
                                            type={showPassword ? 'password' : 'text'}
                                            name="password"
                                            placeholder="Password"
                                            required />

                                        <div
                                            onClick={() => setShowPassword(!showPassword)} className="absolute right-4 top-7">
                                            {
                                                showPassword ? <FaEye className="text-[#2ed9ff]"></FaEye> : <FaEyeSlash className="text-[#28d8ff]"></FaEyeSlash>
                                            }
                                        </div>

                                    </div>

                                    <div>
                                        <input
                                            className="w-full bg-emerald-700 font-semibold text-emerald-200 py-3 mt-3 border-2 border-emerald-700 hover:bg-transparent duration-500 hover:border-2 hover:text-emerald-700 hover:border-emerald-700 cursor-pointer"
                                            type="submit"

                                            value='Login' />
                                    </div>

                                    <div className="text-center text-sm mt-4">
                                        <p>
                                            Are you new here? <Link className="font-bold text-rose-500 cursor-pointer" to="/register">Register</Link> now!
                                        </p>
                                    </div>

                                    <div className="flex text-3xl justify-center gap-4 pt-4">
                                        <Link onClick={handleGoogleLogin} to=""><FcGoogle className="hover:scale-110 duration-700 cursor-pointer" /></Link>
                                        <Link onClick={handleGithubLogin} to=""><FaGithub className="hover:scale-110 duration-700 cursor-pointer" /></Link>
                                    </div>

                                </div>

                            </div>

                        </div>

                    </form>

                </div>
            </div>
        </div>
    );
};

export default Login;