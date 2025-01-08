
const Login = () => {

    return (
        <>
            <div className="text-gray-50 flex justify-center items-center h-screen">
                <div className="bg-gray-800 flex flex-col justify-center items-center w-96 p-10 rounded-3xl text-center shadow-pink-300 shadow-md border-2">

                    <div className="text-2xl pb-8 w-96">
                        Signup Page
                    </div>
                    <div>
                        <input
                            type="text"
                            placeholder="username"
                            className="p-2 rounded-lg w-80 mb-4 text-black" />
                    </div>
                    <div className="pb-4 w-96">
                        <input
                            type="password"
                            placeholder="password"
                            className="p-2 rounded-lg mb-4 w-80 text-black"
                        />
                    </div>
                    <div className="pb-4 w-96">
                        <button
                            className="
                                p-2 rounded-lg w-80
                                bg-gray-400 text-gray-950    
                                hover:bg-gray-500                        
                                active:bg-gray-400
                                shadow-gray-200 shadow-sm"
                            onClick={() => {

                            }}
                            onFocus={() => {

                            }}
                        >
                            Signup
                        </button>
                    </div>
                </div>
            </div >
        </>
    )
}

export default Login;