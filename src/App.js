import logo from './logo.svg';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';
import { UsersList } from './components/userList/UsersList';
import { NavLink, Route, Router, Routes } from 'react-router-dom';
import { ViewUserList } from './components/userList/ViewUserList';
import { UserListSecond } from './components/userList/UserListSecond';
import MyUserList from './components/my-user-list';
import UserDetails from './components/my-user-list/UserDetails';
import AdminLayout from './layouts/admin-layout';

function App() {
  return (
    <>
      <AdminLayout>
        <Routes>
          <Route path='' element={<UserListSecond />} />
          <Route path='/ViewUserList/:id' element={<ViewUserList />} />
          <Route path="/my-user-list" element={<MyUserList />} />
          <Route path="/my-user-list/add" element={<UserDetails />} />
          <Route path="/my-user-list/:id" element={<UserDetails />} />
        </Routes>
      </AdminLayout>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </>
    // <div className="App">
    //   <h4>API Url : {process.env.REACT_APP_API_URL}</h4>
    //   <ul>
    //     <li><NavLink to="/">User List</NavLink> </li>
    //     <li><NavLink to="/my-user-list">My User List</NavLink> </li>
    //   </ul>

    //   <Routes>
    //     <Route path='' element={<UserListSecond />} />
    //     <Route path='ViewUserList/:id' element={<ViewUserList />} />
    //     <Route path="my-user-list" element={<MyUserList />}/>
    //     <Route path="my-user-list/:id" element={<UserDetails />}/>
    //     {/* <Route path='info/:id' element={<UserDetails />} style={{}} /> */}
    //   </Routes>
    // </div>
  );
}

export default App;
