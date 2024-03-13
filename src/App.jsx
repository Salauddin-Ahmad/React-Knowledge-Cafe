import './App.css'
import { useState } from 'react'
import Blogs from './components/Blogs/Blogs'
import Bookmarks from './components/Bookmarks/Bookmarks'
import Header from './components/Header/Header'

function App() {
const [bookmarks, setBookmarks] = useState([]);
const [readingTime, setreadingTime] = useState(0);
const handleAddtoBookmark = blog => {
  const newBookmarks = [...bookmarks, blog];
  setBookmarks(newBookmarks);
}

const handleMarkAsRead = (id, time) => {
  const newReadingTime = readingTime + time;
  setreadingTime(newReadingTime);
  // remove the read blog from bookmarks
  console.log('remove bookmar', id);
  const remainingBookmarks = 
  bookmarks.filter(bookmark => bookmark.id !== id);
  setBookmarks(remainingBookmarks);

}


  return (
    <>
    <Header ></Header>
    <div className='md:flex w-[85%] lg:max-w-6xl mx-auto' >
    <Blogs handleAddtoBookmark={handleAddtoBookmark}
    handleMarkAsRead ={handleMarkAsRead}
    ></Blogs>
    <Bookmarks bookmarks={bookmarks}
    readingTime = {readingTime}></Bookmarks>
    </div>
    </>
  )
}

export default App
