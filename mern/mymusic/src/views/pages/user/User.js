import React from "react";
import Tracklist from "../../components/Tracklist/Tracklist";
import UserCard from "../../components/UserCard/UserCard";

export default function User() {
  return (
    <>
      <UserCard
        user={{
          name: "asdasd",
          likes: 122,
          followers: 1234,
          following: 14623,
          tracks: 78678,
        }}
      />
      <Tracklist
        compactLayout={false}
        tracks={[
          {
            id: 1,
            userId: 2,
            username: "ASdasd",
            title: "sadsa",
            artworkUrl:
              "https://i1.sndcdn.com/artworks-000247567530-ysnxiq-t500x500.jpg",
          },
          {
            id: 2,
            userId: 2,
            username: "ASdasd",
            title: "sadsa",
            artworkUrl:
              "https://i1.sndcdn.com/artworks-000247567530-ysnxiq-t500x500.jpg",
          },
          {
            id: 5,
            userId: 2,
            username: "ASdasd",
            title: "sadsa",
            artworkUrl:
              "https://i1.sndcdn.com/artworks-000247567530-ysnxiq-t500x500.jpg",
          },
          {
            id: 3,
            userId: 2,
            username: "ASdasd",
            title: "sadsa",
            artworkUrl:
              "https://i1.sndcdn.com/artworks-000247567530-ysnxiq-t500x500.jpg",
          },
          {
            id: 4,
            userId: 2,
            username: "ASdasd",
            title: "sadsa",
            artworkUrl:
              "https://i1.sndcdn.com/artworks-000247567530-ysnxiq-t500x500.jpg",
          },
        ]}
      />
    </>
  );
}
