import React from "react";
import { Avatar, Box, Button, Typography } from "@mui/material";

const FriendSuggestion = ({ avatar, name, mutualFriends }) => {
  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="space-between"
      p={2}
      border={1}
      borderColor="grey.300"
      borderRadius={2}
      mb={2}
    >
      <Avatar src={avatar} alt={name} sx={{ width: 56, height: 56 }} />
      <Box ml={2} flexGrow={1}>
        <Typography variant="h6">{name}</Typography>
        <Typography variant="body2" color="textSecondary">
          {mutualFriends} mutual friends
        </Typography>
      </Box>
      <Box>
        <Button variant="contained" color="primary" sx={{ mr: 1 }}>
          Add Friend
        </Button>
        <Button variant="outlined" color="error">
          Remove
        </Button>
      </Box>
    </Box>
  );
};

export default FriendSuggestion;
