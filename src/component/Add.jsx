import { Avatar, Box, Button, ButtonGroup, Fab, IconButton, Modal, Stack, TextField, Tooltip, Typography, styled } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import { useState } from "react";
import { DateRange, InsertPhoto, PersonAdd, VideoCameraBack } from "@mui/icons-material";

export const Add = () => {
  const [open, setOpen] = useState(false)
  const handleOpen = () =>{
    setOpen(true)
  }
  const handleClose = () =>{
    setOpen(false)
  }
  const StyledModal=styled(Modal)({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  })
  const UserBox=styled(Box)({
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    gap:10,
  })
  return (
    <>
      <Fab
      onClick={handleOpen}
        sx={{
          position: "fixed",
          bottom: 20,
          left: { xs: "calc(50% - 30px)", md: 30 },
        }}
        color="primary"
        aria-label="add"
      >
        <AddIcon />
      </Fab>
      <StyledModal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box width={400} height={300} p={3} borderRadius={5} bgcolor={"background.default"} color={"text.primary"}>
        <Typography variant="h6" color="gray" textAlign="center">
          Create Post
        </Typography>
        <UserBox my={2}>
          <Avatar
          alt="Remy Sharp"
          src="https://mui.com/static/images/avatar/1.jpg"
          />
          <Typography>
            John wick
          </Typography>
        </UserBox>
        <TextField
        fullWidth
          id="standard-multiline-static"
          multiline
          rows={4}
          variant="standard"
          placeholder="what's on your mind?"
        />
        <Stack direction={"row"} my={1}>
          <IconButton>
          <EmojiEmotionsIcon fontSize="medium"  color="primary"/>
          </IconButton>
          <IconButton>
          <InsertPhoto  color="secondary"/>
          </IconButton>
          <IconButton>
          <VideoCameraBack  color="success"/>
          </IconButton>
          <IconButton>
          <PersonAdd  color="error"/>
          </IconButton>
        </Stack>
        <ButtonGroup fullWidth variant="contained" >
        <Button>Post</Button>
        <Button sx={{width:"100px"}}><DateRange/></Button>
        </ButtonGroup>
        </Box>
      </StyledModal>
    </>
  );
};
