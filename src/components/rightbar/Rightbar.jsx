import React from 'react';
import "./rightbar.css";

export default function Rightbar() {
    return (
        <div className="rightbar">
           <div className="rightbarWrapper">
           <div className="birthdayContainer">
           <img className="birthdayImg" src="assets/gift.png" alt=""/>
           <span className="birthdayText">
           <b>Wanguch</b> and <b>3 other friends</b> have birthdays today</span>
           </div>
           <img className="rightbarAd" src="assets/ad.png" alt=""/>
           <h4 className="rightbarTitle">Online friends</h4>
           <ul className="rightbarFriendList">
             <li className="rightbarFriend">
             <div rightbarProfileImgContainer>
             <img className="rightbarProfileImg" src="assets/person/3.jpeg" alt=""/>
             <span className="rightbarOnline"></span>
             </div>
             <span className="rightbarUsername">Jojo Wanguch</span>
             </li>
             <li className="rightbarFriend">
             <div rightbarProfileImgContainer>
             <img className="rightbarProfileImg" src="assets/person/3.jpeg" alt=""/>
             <span className="rightbarOnline"></span>
             </div>
             <span className="rightbarUsername">Jojo Wanguch</span>
             </li>
             <li className="rightbarFriend">
             <div rightbarProfileImgContainer>
             <img className="rightbarProfileImg" src="assets/person/3.jpeg" alt=""/>
             <span className="rightbarOnline"></span>
             </div>
             <span className="rightbarUsername">Jojo Wanguch</span>
             </li>
             <li className="rightbarFriend">
             <div rightbarProfileImgContainer>
             <img className="rightbarProfileImg" src="assets/person/3.jpeg" alt=""/>
             <span className="rightbarOnline"></span>
             </div>
             <span className="rightbarUsername">Jojo Wanguch</span>
             </li>
             <li className="rightbarFriend">
             <div rightbarProfileImgContainer>
             <img className="rightbarProfileImg" src="assets/person/3.jpeg" alt=""/>
             <span className="rightbarOnline"></span>
             </div>
             <span className="rightbarUsername">Jojo Wanguch</span>
             </li>
             <li className="rightbarFriend">
             <div rightbarProfileImgContainer>
             <img className="rightbarProfileImg" src="assets/person/3.jpeg" alt=""/>
             <span className="rightbarOnline"></span>
             </div>
             <span className="rightbarUsername">Jojo Wanguch</span>
             </li>
             <li className="rightbarFriend">
             <div rightbarProfileImgContainer>
             <img className="rightbarProfileImg" src="assets/person/3.jpeg" alt=""/>
             <span className="rightbarOnline"></span>
             </div>
             <span className="rightbarUsername">Jojo Wanguch</span>
             </li>
           </ul>
           </div>
        </div>
    )
}
