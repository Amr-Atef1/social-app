import {
  Avatar,
  AvatarGroup,
  Badge,
  Box,
  Divider,
  ImageList,
  ImageListItem,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";

export const Rightbar = () => {
  return (
    <Box
      flex={2}
      p={2}
      sx={{
        display: { xs: "none", md: "block" },
      }}
    >
      <Box position="fixed" justifyContent={"center"}>
        <Stack>
          <Typography variant="h6">Online Friends</Typography>
          <AvatarGroup sx={{ justifyContent: "center" }} max={6}>
            <Badge
              variant="dot"
              color="success"
              anchorOrigin={{ vertical: "center", horizontal: "left" }}
            >
              <Avatar
                alt="Remy Sharp"
                src="https://mui.com/static/images/avatar/1.jpg"
              />
            </Badge>
            <Badge
              variant="dot"
              color="success"
              anchorOrigin={{ vertical: "center", horizontal: "left" }}
            >
              <Avatar
                alt="Remy Sharp"
                src="https://mui.com/static/images/avatar/2.jpg"
              />
            </Badge>
            <Badge
              variant="dot"
              color="success"
              anchorOrigin={{ vertical: "center", horizontal: "left" }}
            >
              <Avatar
                alt="Remy Sharp"
                src="https://mui.com/static/images/avatar/5.jpg"
              />
            </Badge>
            <Badge
              variant="dot"
              color="success"
              anchorOrigin={{ vertical: "center", horizontal: "left" }}
            >
              <Avatar
                sx={{ width: "40px", height: "40px" }}
                alt="Remy Sharp"
                src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=880&q=80"
              />
            </Badge>
            <Badge
              variant="dot"
              color="success"
              anchorOrigin={{ vertical: "center", horizontal: "left" }}
            >
              <Avatar
                alt="Remy Sharp"
                src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=880&q=80"
              />
            </Badge>
            <Badge
              variant="dot"
              color="success"
              anchorOrigin={{ vertical: "center", horizontal: "left" }}
            >
              <Avatar
                alt="Remy Sharp"
                src="https://mui.com/static/images/avatar/6.jpg"
              />
            </Badge>
            <Badge
              variant="dot"
              color="success"
              anchorOrigin={{ vertical: "center", horizontal: "left" }}
            >
              <Avatar
                alt="Remy Sharp"
                src="https://mui.com/static/images/avatar/7.jpg"
              />
            </Badge>
            <Badge
              variant="dot"
              color="success"
              anchorOrigin={{ vertical: "center", horizontal: "left" }}
            >
              <Avatar
                alt="Remy Sharp"
                src="https://mui.com/static/images/avatar/8.jpg"
              />
            </Badge>
          </AvatarGroup>
        </Stack>
        <Typography my={2} fontWeight={600}>
          Latest Photos
        </Typography>
        <ImageList cols={3} rowHeight={150} gap={5} >
          <ImageListItem>
            <img
              src="https://images.unsplash.com/photo-1551963831-b3b1ca40c98e"
              alt="Breakfast"
            />
          </ImageListItem>
          <ImageListItem>
            <img
              src="https://images.unsplash.com/photo-1551782450-a2132b4ba21d"
              alt="Burger"
            />
          </ImageListItem>
          <ImageListItem>
            <img
              src="https://images.unsplash.com/photo-1522770179533-24471fcdba45"
              alt="Breakfast"
            />
          </ImageListItem>
        </ImageList>
        <Typography variant="h6" my={2}>
          Latest Conversation
        </Typography>

        <List sx={{ width: "100%", maxWidth: 360 }}>
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar
                alt="Remy Sharp"
                src="https://mui.com/static/images/avatar/2.jpg"
              />
            </ListItemAvatar>
            <ListItemText
              primary="Brunch this weekend?"
              secondary={
                <>
                  <Typography
                    sx={{ display: "inline" }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    Ali Connors
                  </Typography>
                  {" — I'll be in your neighborhood doing errands this…"}
                </>
              }
            />
          </ListItem>
          <Divider variant="inset" component="li" />
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar
                alt="Travis Howard"
                src="https://mui.com/static/images/avatar/1.jpg"
              />
            </ListItemAvatar>
            <ListItemText
              primary="Summer BBQ"
              secondary={
                <React.Fragment>
                  <Typography
                    sx={{ display: "inline" }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    to Scott, Alex, Jennifer
                  </Typography>
                  {" — Wish I could come, but I'm out of town this…"}
                </React.Fragment>
              }
            />
          </ListItem>
          <Divider variant="inset" component="li" />
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar
                alt="Cindy Baker"
                src="https://mui.com/static/images/avatar/5.jpg"
              />
            </ListItemAvatar>
            <ListItemText
              primary="Oui Oui"
              secondary={
                <React.Fragment>
                  <Typography
                    sx={{ display: "inline" }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    Sandra Adams
                  </Typography>
                  {" — Do you have Paris recommendations? Have you ever…"}
                </React.Fragment>
              }
            />
          </ListItem>
        </List>
      </Box>
    </Box>
  );
};
