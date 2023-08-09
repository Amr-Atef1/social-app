import './App.css';
import {Navbar} from "./component/Navbar"
import {Feed} from "./component/Feed"
import {Sidebar} from "./component/Sidebar"
import {Rightbar} from "./component/Rightbar"
import { Box, Stack, ThemeProvider, createTheme } from '@mui/material';
import { Add } from './component/Add';
import { useState } from 'react';
function App() {
  const [mode, setMode] = useState("light")
  const [openDrawer,setOpenDrawer]= useState(false)
  const darkMode=createTheme({
    palette:{
      mode,
    }
  })
  return (
    <ThemeProvider theme={darkMode}>
    <Box bgcolor={"background.default"} color={"text.primary"}>
    <Add/>
      <Navbar openDrawer={openDrawer} setOpenDrawer={setOpenDrawer}/>
    <Stack  direction="row" spacing={3} >
      <Sidebar setMode={setMode} mode={mode} openDrawer={openDrawer} setOpenDrawer={setOpenDrawer} />
      <Feed />
      <Rightbar/>
    </Stack>
    </Box>
    </ThemeProvider>

  );
  }
export default App;
