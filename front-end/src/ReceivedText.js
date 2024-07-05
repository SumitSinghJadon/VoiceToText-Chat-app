import React, { useState, useEffect } from 'react';


const ReceivedText=()=>{
    const [socket, setSocket] = useState(null);
    const [receivedData, setReceivedData] = useState([])
    const [input,setInput] = useState({})
    const [roomcode,setRoomcode] = useState({})

    const handleInput=(e)=>{
      let name=e.target.name;
      let value=e.target.value;

      setInput(values=>({...values, [name]:value}));
  }

  const handleCreateRoom=()=>{
    setRoomcode(input)
    setInput({roomcode:""})
   }

   console.log("roomcode =",roomcode.roomcode)



    useEffect(() => {
      const newSocket = new WebSocket(`ws://localhost:8000/ws/app/${roomcode.roomcode}`);
      setSocket(newSocket);
  
      return () => {
        newSocket.close();
      };
      
    }, [roomcode]);

    useEffect(() => {
        if (!socket) return;
    
        socket.onopen = () => {
          console.log('WebSocket connection established.');
        };
    
        socket.onmessage = (event) => {
        const receivedData = JSON.parse(event.data);
        const Message = receivedData.massage
        const final = JSON.parse(Message)


        setReceivedData(final.message); 
        };
    
        socket.onclose = () => {
          console.log('WebSocket connection closed.');
        };
    
        return () => {
          socket.onopen = null;
          socket.onmessage = null;
          socket.onclose = null;
        };
      }, [socket]);

    return(
        <>
        <div className="main-content">  {receivedData} </div>
        <div className="all-center flex flex-col  py-4 md:py-8 space-y-3 md:space-y-4 w-full max-w-xs px-6" >
        <input type="text" name="roomcode" value={input.roomcode} onChange={handleInput} className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:border-blue-300"  placeholder="Enter Room code"/>
        <button onClick={handleCreateRoom} className="bg-red-500 hover:bg-red-600 w-full text-white shadow-xl py-3 px-4 rounded-lg">Join Room</button>
        </div>
        </>
    )
}

export default ReceivedText;