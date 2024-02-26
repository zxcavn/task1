import React from "react";
import { useDispatch, useSelector } from 'react-redux';
import { requestPostComments } from "../redux/actions";
import { StateType } from "../redux/reducers";
import { CommentType } from "../redux/actions";

type PostProps = {
  userId: number;
  body: string;
  id: number;
  title: string;
};

const Post: React.FC<PostProps> = ({ title, body, id }) => {
  const postComments = useSelector((state: StateType) => state.posts.find(post => post.id === id)?.comments);
  const [expanded, setExpanded] = React.useState(false);

  const dispatch = useDispatch(); 
  const fetchComments = () => {
    dispatch(requestPostComments(id));
  };
  
  const handleExpandClick = () => {
    setExpanded(!expanded);
    if (!postComments) {
      fetchComments();
    }
  };


  return (
    <div style={{border:"3px solid #ccc", padding:'16px',margin:"16px",borderRadius:"5px",backgroundColor:"white"}} >
      <h2 style={{fontSize:"20px",marginBottom:"16px"}} >{title}</h2>
      <p style={{marginBottom:"16px"}} >{body}</p>
      <button style={{marginBottom:"16px"}} onClick={handleExpandClick}>{expanded ? 'Свернуть' : 'Развернуть'}</button>
      {expanded && postComments?.map((comment: CommentType) => <p key={comment.id} style={{marginBottom:"8px",backgroundColor:"gray",padding:"8px",borderRadius:"5px"}}>{comment.body}</p>)}
    </div>
  );  
};

export default Post;
