import React from "react";
import { Avatar, Box, Button, Typography } from "@mui/material";

const PendingRequest = ({ avatar, name, mutualFriends }) => {
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
        <Button variant="contained" color="success" sx={{ mr: 1 }}>
          Accept
        </Button>
        <Button variant="outlined" color="error">
          Delete
        </Button>
      </Box>
    </Box>
  );
};

export default PendingRequest;
