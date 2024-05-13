import './App.css';
import Sidebar from './html/components/Sidebar';
import Header from './html/components/Header';
import Dashboard from './html/pages/Dashboard';
import Register from './html/pages/Register';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './html/pages/Login';
import ChangeProfile from './html/pages/ChangeProfile';
import ChangePassword from './html/pages/ChangePassword';
import { useEffect, useState } from 'react';
import ForgetPassword from './html/pages/ForgetPassword';
import Otp from './html/pages/Otp';
import ShareFile from './html/pages/ShareFile'
import Starred from './html/pages/Starred';
import Recent from './html/pages/Recent';
import Bin from './html/pages/Bin';
import Terms from './html/pages/Terms';
import AdminDashboard from './html/pages/AdminDashboard';
import AdminHeader from './html/components/AdminHeader';
import AdminSidebar from './html/components/AdminSidebar';


function App() {
  // const isAdmin = true;
  const [dataFromChild, setDataFromChild] = useState();
  const [searchInput, setSearchInput] = useState('');
  const [uploadFile, setUploadFile] = useState(false);
  const [uploadFolder, setUploadFolder] = useState(false);

  const userInfo = localStorage.getItem('userInfo') ? JSON.parse(localStorage.getItem('userInfo')) : null;

  return (
    <div className="App">
      <Router>

        {userInfo?.is_admin === true ? (
          <>
            <div className="left">
              <div>
                <Sidebar parent_id={dataFromChild} uploadFile={uploadFile} setUploadFile={setUploadFile} uploadFolder={uploadFolder} setUploadFolder={setUploadFolder}></Sidebar>
              </div>
            </div>
            <div className='right'>
              <div>
                <Header setSearchInput={setSearchInput}></Header>
              </div>
              <div className="main">
                <Routes>
                  <Route path="/" element={userInfo ? <Dashboard searchInput={searchInput} uploadFile={uploadFile} uploadFolder={uploadFolder} setDataFromChild={setDataFromChild}></Dashboard> : <Login></Login>} />
                  <Route path="/:parent_id" element={<Dashboard searchInput={searchInput} uploadFile={uploadFile} uploadFolder={uploadFolder} setDataFromChild={setDataFromChild}></Dashboard>} />
                  <Route path="/register" element={<Register></Register>} />
                  <Route path="/login" element={<Login></Login>} />
                  <Route path='/changeprofile' element={userInfo ? <ChangeProfile></ChangeProfile> : <Login></Login>} />
                  <Route path='/changepassword' element={userInfo ? <ChangePassword></ChangePassword> : <Login></Login>} />
                  <Route path='/forgetpassword' element={<ForgetPassword></ForgetPassword>} />
                  <Route path='/otp/:email' element={<Otp></Otp>} />
                  <Route path='/share/gmail' element={<ShareFile></ShareFile>} />
                  <Route path='/starred' element={<Starred></Starred>} />
                  <Route path='/recent' element={<Recent searchInput={searchInput} setDataFromChild={setDataFromChild}></Recent>} />
                  <Route path='/bin' element={<Bin searchInput={searchInput} setDataFromChild={setDataFromChild}></Bin>} />
                  <Route path='/terms' element={<Terms></Terms>} />
                </Routes>
              </div>
            </div>
          </>
        ) : (
          <>
            <div className="left">
              <div>
                <AdminSidebar parent_id={dataFromChild}></AdminSidebar>
              </div>
            </div>
            <div className='right'>
              <div>
                <AdminHeader setSearchInput={setSearchInput}></AdminHeader>
              </div>
              <div className="main">
                <Routes>
                  <Route path="/" element={userInfo ? <AdminDashboard searchInput={searchInput} setDataFromChild={setDataFromChild}></AdminDashboard> : <Login />} />
                  <Route path="/:parent_id" element={<Dashboard searchInput={searchInput} setDataFromChild={setDataFromChild}></Dashboard>} />
                  <Route path="/register" element={<Register></Register>} />
                  <Route path="/login" element={<Login></Login>} />
                  <Route path='/changeprofile' element={userInfo ? <ChangeProfile></ChangeProfile> : <Login></Login>} />
                  <Route path='/changepassword' element={userInfo ? <ChangePassword></ChangePassword> : <Login></Login>} />
                  <Route path='/forgetpassword' element={<ForgetPassword></ForgetPassword>} />
                  <Route path='/otp/:email' element={<Otp></Otp>} />
                  <Route path='/share/gmail' element={<ShareFile></ShareFile>} />
                  <Route path='/starred' element={<Starred></Starred>} />
                  <Route path='/recent' element={<Recent></Recent>} />
                  <Route path='/bin' element={<Bin></Bin>} />
                  <Route path='/terms' element={<Terms></Terms>} />
                </Routes>
              </div>
            </div>
          </>
        )}
      </Router>
    </div>
  );
}

export default App;
