import React from 'react'
import Navbar from './Component/Navbars/Navbar';
import Banner from './Component/Banner/Banner';
import RowPost from './Component/RowPost/RowPost';
import { original,action } from './Url';
export const MyContext = React.createContext()
const Home = () => {
  return (
    <div>
<Navbar/>
      <Banner/>
<MyContext.Provider value={{url:original,title:'Netflix Orginal',isSmall:false}}>
      
      <RowPost/>
    </MyContext.Provider>
    <MyContext.Provider value={{url:action,title:'Action',isSmall:true}}>
      
      <RowPost/>
    </MyContext.Provider>

    </div>
  )
}

export default Home