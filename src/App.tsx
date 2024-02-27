import { Route, Routes } from "react-router";
import Signup from "./components/Signup";
import Chat from "./components/Chat";

function App() {
  return (
    <div className="flex w-full h-screen items-center justify-center">
      <Routes>
        <Route path="/" element={<Signup />} /> 
        <Route path="/chat" element={<Chat />} /> 
      </Routes>
    </div>
  );
}

export default App;
