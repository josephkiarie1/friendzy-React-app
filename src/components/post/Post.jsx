import "./post.css";
import {MoreVert} from "@material-ui/icons";

export default function Post() {
    return (
        <div className="post">
        <div className="postWrapper">
          <div className="postTop">
            <div className="postTopLeft"> 
             <img className="postProfileImg" src="/assets/person/1.jpeg" alt=""/>
             <span className="postUserName">Jojo</span>
             <span className="postDate">5 mins ago</span>
            </div>
            <div className="postTopRight"></div>
            <MoreVert/>
            </div>
          <div className="postCenter">
            <span className="postText">Hey! world</span>
            <img className="postImg" src="/assets/post/3.jpeg" alt=""/>
          </div>
          <div className="postBottom">
          <div className="postBottomLeft">
          <img className="likeIcon" src="assets/like.png" alt=""/>
          <img className="likeIcon" src="assets/heart.png" alt=""/>
          <span className="postLikeCounter">30 and Others liked</span>
          </div>
          <div className="postBottomRight">
          <span className="postCommentText">10 comments</span>
          </div>
          </div>
        </div>
            
        </div>
    )
}
