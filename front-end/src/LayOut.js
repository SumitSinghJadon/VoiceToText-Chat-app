import { Link,Outlet } from "react-router-dom";

const LayOut=()=>{
    return(
        <>
        <div class="w-[400px] flex justify-around p-4">
          <Link to={'VoiceToText'} class="text-blue-500 hover:text-blue-700">VoiceToText</Link>
          <Link to={'ReceivedText'} class="text-blue-500 hover:text-blue-700">ReceivedText</Link>
          <Link to={'CreateRoom'} class="text-blue-500 hover:text-blue-700">CreateRoom</Link>
        </div>
        <Outlet />
      </>
      
    );
}

export default LayOut;