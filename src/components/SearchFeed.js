import { useState, useEffect } from "react";
import { Typography, Stack,Box } from "@mui/material";
import { useParams } from "react-router-dom";
import Sidebar from "./Sidebar"
;
import  Videosa  from "./Videosall";

import { fetchFromAPI } from "../utils/fetchFromAPI";
import { Videos } from ".";
import UperMenu from './UperMenu';
const SearchFeed = () => {
  const [video, setVideo] = useState(null);
  const [videos, setVideos] = useState(null);
  const { searchTerm } = useParams();
  const [selectedCategory, setSelectedCategory] = useState("New");
  useEffect(() => {
    setVideo(null);
    setVideos(null);
   
    fetchFromAPI(`search?part=snippet&q=${searchTerm}`)
    .then((data) => setVideo(data.items))
    fetchFromAPI(`search?part=snippet&q=${selectedCategory}`)
    .then((data) => setVideos(data.items))

      
  }, [searchTerm],[selectedCategory]);
  if (Videos === {selectedCategory}) {
    window.location.replace("http://www.w3schools.com")
  }
  return (
    <>
    {/* <Box p={2} minHeight="95vh">
      <h1>USMAN</h1>
      <UperMenu/>
      <Typography variant="h4" fontWeight={900}  color="white" mb={3} ml={{ sm: "100px"}}>
        Search Results for <span style={{ color: "#FC1503" }}>{searchTerm}</span> videos
      </Typography>
      <Box display="flex">
        <Box sx={{ mr: { sm: '100px' } }}/>
        {<Videos videos={videos} />}
      </Box>
    </Box> */}
    <Stack sx={{ flexDirection: { sx: "column", md: "row" } }}>
      
    <Box sx={{height: { sx: "auto", md: "92vh" }, borderRight: "1px solid #3d3d3d", px: { sx: 0, md: 2 } }}>
      <Sidebar selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />
      
      <Typography className="copyright" variant="body2" sx={{ mt: 1.5, color: "black", }}>
        Copyright © 2022 Usman Baber
      </Typography>
      
    </Box>

    <Box p={2} sx={{  marginTop: "-3vh",  overflowY: "auto", height: "90vh", flex: 2 }}>
      <Typography variant="h4" fontWeight="bold" mb={2} sx={{ color: "white" }}>
      <Typography variant="h4" fontWeight={900}  color="black" mb={3} ml={{ sm: "100px"}}>
        Search Results for <span style={{ color: "black" }}>{searchTerm}</span> videos
      </Typography>
      <Box display="flex">
        <Box sx={{ mr: { sm: '100px' } }}/>
        {/* {<Videos videos={videos} />} */}
      </Box>
      </Typography>

      {/* <Videos videos={videos} /> */}
      
      <Videosa video={video} />
    </Box>
    
  </Stack>
  </>
  );
};

export default SearchFeed;


