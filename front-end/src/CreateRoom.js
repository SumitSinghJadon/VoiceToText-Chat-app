import { useState } from "react";
import { useDispatch } from "react-redux";
import { value } from "./VoiceToTextSlice";
import { useNavigate } from "react-router-dom";

const CreateRoom=()=>{
    const [input,setInput] = useState({})
    const navigate=useNavigate()

    const dispatch = useDispatch()
    

    const handleInput=(e)=>{
        let name=e.target.name;
        let value=e.target.value;

        setInput(values=>({...values, [name]:value}));
    }

    const handleCreateRoom=()=>{

     dispatch(value(input))  

     navigate('../VoiceToText')

    }



    return(
        <>
        <center>
        <div class="max-w-2xl w-full h-[500px] items-center justify-center p-2 rounded-3xl border-2 border-solid border-gray-400  z-20 bg-gradient-to-r from-base-100 via-base-100/10 to-base-100/5 flex backdrop-blur-md bg-opacity-90 ">
        
        <div className="w-full md:w-1/2 items-center justify-center  flex-col">
        <h1 className="text-2xl font-semibold py-2">Create Your Room</h1>
        <div className="all-center flex flex-col  py-4 md:py-8 space-y-3 md:space-y-4 w-full max-w-xs px-6">
        <input type="text" name="username" value={input.username} onChange={handleInput} className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:border-blue-300"  placeholder="Enter Your Name" />
        <input type="text" name="roomcode" value={input.roomcode} onChange={handleInput} className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:border-blue-300"  placeholder="Enter Room code"/>
        <button onClick={handleCreateRoom} className="bg-red-500 hover:bg-red-600 w-full text-white shadow-xl py-3 px-4 rounded-lg">Join Room</button>
        </div>

        <div className="divider w-full after:bg-gray-300 before:bg-gray-300 pl-12">
            <span>OR</span> 
        </div>
        <div className="all-center flex flex-col  py-4 md:py-8 space-y-3 md:space-y-4 w-full max-w-xs px-6" >
        <input className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:border-blue-300" placeholder="Enter Your Name"/>
        <button className="bg-gray-700 hover:bg-gray-900 w-full text-white shadow-xl py-3 px-4 rounded-lg">Create Room</button>
        </div>
        </div>

        </div>
        </center>
        </>
    )
}

export default CreateRoom;