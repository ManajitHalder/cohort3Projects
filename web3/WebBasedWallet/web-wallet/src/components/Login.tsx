
const Login = () => {

    return (
        <>
            <div className="text-gray-50 flex justify-center items-center h-screen">
                <div className=" bg-gray-950 flex flex-col justify-center items-center w-96 p-10 rounded-lg text-center">

                    <div className="text-2xl pb-8 w-96">
                        Signup Page
                    </div>
                    <div>
                        <input type="text" placeholder="username" className="p-2 rounded-lg w-80 mb-4" />
                    </div>
                    <div className="pb-4 w-96">
                        <input type="password" placeholder="password" className="p-2 rounded-lg mb-4 w-80" />
                    </div>
                    <div className="pb-4 w-96">
                        <button className="p-2 rounded-lg bg-gray-400 text-gray-950 w-80">Signup</button>
                    </div>
                </div>
            </div >
        </>
    )
}

export default Login;