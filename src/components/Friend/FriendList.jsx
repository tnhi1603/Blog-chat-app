import React from "react";
import FriendSuggestion from "./FriendSuggestion";
import PendingRequest from "./PendingRequest";

const FriendList = () => {
  const suggestions = [
    { avatar: "/path-to-avatar1.jpg", name: "Nguyễn Tú", mutualFriends: 2 },
    { avatar: "/path-to-avatar2.jpg", name: "Phạm Vân", mutualFriends: 1 },
  ];

  const pendingRequests = [
    { avatar: "/path-to-avatar3.jpg", name: "Nguyễn Linh", mutualFriends: 1 },
  ];

  return (
    <div style={{ padding: "40px" }}>
      <h2 style={{ marginTop: "10px" }}>Pending Friend Requests</h2>
      {pendingRequests.map((friend, index) => (
        <PendingRequest key={index} {...friend} />
      ))}

      <h2>Friend Suggestions</h2>
      {suggestions.map((friend, index) => (
        <FriendSuggestion key={index} {...friend} />
      ))}
    </div>
  );
};

export default FriendList;
