

import React from 'react';
import { BrowserRouter, Routes, Route } from'react-router-dom';
import Box from '@mui/material/Box';
import { ChannelDetail, VideoDetail, SearchFeed, Navbar, Feed } from './components';

const App = () => {
  return (
    <>
<BrowserRouter>
<Box sx={{ backgroundColor: 'white'}}>
<Navbar/>
{/* <hr style={{ margintop: "40px" }}/> */}
<Routes>
    
<Route exact path='/' element={<Feed />} />
        <Route path='/video/:id' element={<VideoDetail />} />
        <Route path='/channel/:id' element={<ChannelDetail />} />
        <Route path='/search/:searchTerm' element={<SearchFeed />} />
</Routes>

</Box> 


</BrowserRouter>    </>
  )
}

export default App