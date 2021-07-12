import React from "react";
import "./UserCard.scss";
export default function UserCard({ user }) {
  return (
    <div className="content__header">
      <div className="usercard">
        <h1 className="user__name">{user.name}</h1>
        <div className="user__statics">
          <div className="user__tracks">
            <h2 className="statics__name">Tracks</h2>
            <div className="statics__value">{user.tracks}</div>
          </div>

          <div className="user__likes">
            <h2 className="statics__name">Likes</h2>
            <div className="statics__value">{user.likes}</div>
          </div>

          <div className="user__followers">
            <h2 className="statics__name">Followers</h2>
            <div className="statics__value">{user.followers}</div>
          </div>

          <div className="user__following">
            <h2 className="statics__name">Following</h2>
            <div className="statics__value">{user.following}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
