import { useEffect, useState } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom';

import { userInfo } from './services/userService';



import './index.css';

import EditPost from './pages/posts/Edit';
import IndexPost from './pages/posts/Index';
import NewPost from './pages/posts/New';
import ShowPost from './pages/posts/Show';
import EditComment from './pages/comments/Edit';

import Register from './pages/users/Register';
import Login from './pages/users/Login';

import Navbar from './components/Navbar';
import Categories from './pages/posts/Categories';
import Gallery from './pages/posts/Gallery';
//import search
// import Searchbar from './components/Searchbar';

function App() {

  const [user, setUser] = useState({})
  const [isLoading, setIsLoading] = useState(true)
  
  //create state for search and search results
  // const [search, setSearch] = useState("");
  // // const [results, setResults] = useState[];
  // const [results, setResults] = useState([]);

  useEffect(() => {
      
      let token = localStorage.getItem("token")

      if (token) {
          getLoggedInUser()
      } else {
          setIsLoading(false)
      }

      async function getLoggedInUser() {
          const user = await userInfo()
          setUser(user)
          setIsLoading(false)
      }

  }, [])

  let loggedIn = user.username

  return (
    <div className="App">
      <Navbar user={loggedIn} setUser={setUser} />
      <Routes>
          <Route path='/posts' element={<IndexPost user={loggedIn} />} />
          <Route path='/posts/:id' element={<ShowPost user={loggedIn} />} />
          {/* not logged in */}
          {loggedIn ?
            <>
            {/* logged in */}
              <Route path='/posts/categories' element={<Categories user={loggedIn} />} />
              <Route path='/posts/gallery' element={<Gallery user={loggedIn} />} />
              <Route path='/posts/new' element={<NewPost user={loggedIn} />} />
              <Route path='/posts/:id/edit' element={<EditPost />} />
              <Route path='/posts/:id/comments/:cid' element={<EditComment />} />
              {!isLoading && <Route path='*' element={<Navigate to='/posts' />} />}
            </>
            :
            <>
              <Route path='/register' element={<Register setUser={setUser} />} />
              <Route path='/login' element={<Login setUser={setUser} />} />
              {!isLoading && <Route path='*' element={<Navigate to='/login' />} />}
            </>
          }
      </Routes>
    </div>
  );
}

export default App;
