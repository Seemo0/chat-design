import { Route, Routes } from "react-router-dom";
import "./App.css";
import SignUp from "./pages/Signup";
import { Chat } from "./pages/Chat";

function App() {
  // const user = JSON.stringify(JSON.parse(localStorage.getItem("user") ?? ""));
  return (
    <div className="flex flex-col justify-center items-center w-full h-screen">
      <Routes>
        <Route path="/" element={<SignUp />} />
        <Route path="/chat" element={<Chat />} />
      </Routes>
    </div>
  );
}

export default App;
