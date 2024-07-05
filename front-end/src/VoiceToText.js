import { useEffect, useState } from 'react';
import './VoiceToText.css'
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import { useSelector } from 'react-redux';


const VoiceToText=()=>{
    const [socket, setSocket] = useState(null);
    const [receivedData, setReceivedData] = useState([]);
    const [receiveUser, setReceiveUser] = useState([]);

    const startListening = () => SpeechRecognition.startListening({ continuous: true, language: 'en' });
    const { transcript, browserSupportsSpeechRecognition } = useSpeechRecognition();
    const inputs=useSelector((state)=>state.createRoom.inputValues)
    console.log("transcript =",transcript)

    useEffect(() => {
      console.log("inputs =",inputs)
      console.log("inputs.roomcode =",inputs.roomcode)
        const newSocket = new WebSocket(`ws://localhost:8000/ws/app/${inputs.roomcode}`);
        setSocket(newSocket);
        return () => {
            newSocket.close();
          };
        }, []);

        
        
  useEffect(() => {
    if (!socket) return;

    socket.onopen = () => {
      console.log('WebSocket connection established.');
    };

    socket.onmessage = (event) => {
      const receivedData = JSON.parse(event.data);
      const Message = receivedData.massage
      const final = JSON.parse(Message)

     console.log("final.username",final.username)
     
    
     setReceivedData({"data":final.message,"username":final.username})
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

  useEffect(()=>{
    if (socket) {
        socket.send(JSON.stringify({ "message": transcript,"username":inputs.username}));
    }
  }, [transcript]);
    if (!browserSupportsSpeechRecognition) {
        return null
    }




    return(
        <>
        <div className='div-main'>
        <div className="containers">
            <h2>specch to text convter</h2>
            <br/>
            <p>A React hook that converts speech from the microphone to text and makes it available to your React
            components.</p>  
        <div className="main-content"> {receivedData.username}:-{receivedData.data}</div>
        <div className="btn-style">
            <button className='btn-sumit'>copy</button>
            <button onClick={startListening} className='btn-sumit'>start speech</button>
            <button onClick={SpeechRecognition.stopListening} className='btn-sumit'>stop speech</button>

        </div>
     

        </div>
        </div>

        </>
    )
}

export default VoiceToText;

