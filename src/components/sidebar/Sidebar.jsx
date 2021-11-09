import React from 'react';
import "./sidebar.css";
import {Bookmark, ChangeHistoryOutlined, Chat, ChatBubble, ChatBubbleOutlineOutlined, Event, Group, HelpOutline, PlayCircleFilledOutlined, RssFeed, WorkOutline} from "@material-ui/icons";
import { Button } from '@material-ui/core';

export default function Sidebar() {
    return (
        <div className="sidebar">
            <div className="sidebarWrapper">
              <ul className="sidebarList">
               <li className="sidebarListItem">
               <RssFeed className="sidebarIcon"/>
               <span className="sidebarListItemText">Feed</span>
               </li>
               <li className="sidebarListItem">
               <Chat className="sidebarIcon"/>
               <span className="sidebarListItemText">Chats</span>
               </li>
               <li className="sidebarListItem">
               <PlayCircleFilledOutlined className="sidebarIcon"/>
               <span className="sidebarListItemText">Videos</span>
               </li>
               <li className="sidebarListItem">
               <Group className="sidebarIcon"/>
               <span className="sidebarListItemText">Groups</span>
               </li>
               <li className="sidebarListItem">
               <Bookmark className="sidebarIcon"/>
               <span className="sidebarListItemText">Bookmmarks</span>
               </li>
               <li className="sidebarListItem">
               <HelpOutline className="sidebarIcon"/>
               <span className="sidebarListItemText">Questions</span>
               </li>
               <li className="sidebarListItem">
               <WorkOutline className="sidebarIcon"/>
               <span className="sidebarListItemText">Jobs</span>
               </li>
               <li className="sidebarListItem">
               <Event className="sidebarIcon"/>
               <span className="sidebarListItemText">Events</span>
               </li>
              </ul>
              <Button className="sidebarButton">Show more</Button>
              <hr className="sidebarHr"/>
              <ul className="sidebarFriendList">
              <li className="sidebarFriend">
              <img className="sidebarFriendImg" src="/assets/person/2.jpeg" alt=""/>
              <span className="sidebarFriendName"> Jojo </span>
              </li>
              <li className="sidebarFriend">
              <img className="sidebarFriendImg" src="/assets/person/2.jpeg" alt=""/>
              <span className="sidebarFriendName"> Jojo </span>
              </li>
              <li className="sidebarFriend">
              <img className="sidebarFriendImg" src="/assets/person/2.jpeg" alt=""/>
              <span className="sidebarFriendName"> Jojo </span>
              </li>
              <li className="sidebarFriend">
              <img className="sidebarFriendImg" src="/assets/person/2.jpeg" alt=""/>
              <span className="sidebarFriendName"> Jojo </span>
              </li>
              <li className="sidebarFriend">
              <img className="sidebarFriendImg" src="/assets/person/2.jpeg" alt=""/>
              <span className="sidebarFriendName"> Jojo </span>
              </li>
              <li className="sidebarFriend">
              <img className="sidebarFriendImg" src="/assets/person/2.jpeg" alt=""/>
              <span className="sidebarFriendName"> Jojo </span>
              </li>
              <li className="sidebarFriend">
              <img className="sidebarFriendImg" src="/assets/person/2.jpeg" alt=""/>
              <span className="sidebarFriendName"> Jojo </span>
              </li>
              <li className="sidebarFriend">
              <img className="sidebarFriendImg" src="/assets/person/2.jpeg" alt=""/>
              <span className="sidebarFriendName"> Jojo </span>
              </li>
              <li className="sidebarFriend">
              <img className="sidebarFriendImg" src="/assets/person/2.jpeg" alt=""/>
              <span className="sidebarFriendName"> Jojo </span>
              </li>
              </ul>
            </div>
        </div>
    )
}
