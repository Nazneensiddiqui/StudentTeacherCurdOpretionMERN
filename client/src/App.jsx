import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import DashBorad from "./pages/dashborad";

import TeacherDisplay from "./admin/teacherDisplay";
import Display from "./admin/display";
import ResetPassword from "./admin/resetPassword";



function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="home" element={<Home/>}/>
        <Route path="dashborad" element={<DashBorad />}>
        <Route path="teacher" element={<TeacherDisplay/>}/>
        <Route path="reset" element={<ResetPassword/>}/>
        <Route path="display" element={<Display/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;