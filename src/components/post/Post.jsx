import "./post.css";
import {MoreVert} from "@material-ui/icons";

export default function Post({post}) {
  console.log(post)
    return (
        <div className="post">
        <div className="postWrapper">
          <div className="postTop">
            <div className="postTopLeft"> 
             <img className="postProfileImg" src="/assets/person/1.jpeg" alt=""/>
             <span className="postUserName">Jojo</span>
             <span className="postDate">{post.date}</span>
            </div>
            <div className="postTopRight"></div>
            <MoreVert/>
            </div>
          <div className="postCenter">
            <span className="postText">{post?.desc}</span>
            <img className="postImg" src={post.photo} alt=""/>
          </div>
          <div className="postBottom">
          <div className="postBottomLeft">
          <img className="likeIcon" src="assets/like.png" alt=""/>
          <img className="likeIcon" src="assets/heart.png" alt=""/>
          <span className="postLikeCounter">{post.like} and Others liked it</span>
          </div>
          <div className="postBottomRight">
          <span className="postCommentText">{post.comment}comments</span>
          </div>
          </div>
        </div>
            
        </div>
    )
}
