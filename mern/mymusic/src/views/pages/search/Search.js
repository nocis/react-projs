import React from "react";
import ContentHeader from "../../components/ContentHeader/ContentHeader";
import Tracklist from "../../components/Tracklist/Tracklist";

export default function Search() {
  return (
    <>
      <ContentHeader section="Search Results" title={this.props.query} />
      <Tracklist
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
            id: 1,
            userId: 2,
            username: "ASdasd",
            title: "sadsa",
            artworkUrl:
              "https://i1.sndcdn.com/artworks-000247567530-ysnxiq-t500x500.jpg",
          },
          {
            id: 1,
            userId: 2,
            username: "ASdasd",
            title: "sadsa",
            artworkUrl:
              "https://i1.sndcdn.com/artworks-000247567530-ysnxiq-t500x500.jpg",
          },
          {
            id: 1,
            userId: 2,
            username: "ASdasd",
            title: "sadsa",
            artworkUrl:
              "https://i1.sndcdn.com/artworks-000247567530-ysnxiq-t500x500.jpg",
          },
          {
            id: 1,
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
