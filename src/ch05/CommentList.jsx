import React from "react";
import Comment from "./Comment";

const comments = [
  {
    name: "sophie",
    comment: "안녕하세요, sophie입니다.",
  },
  {
    name: "henry",
    comment: "안녕하세요. 연세대학교에 다니는 henry 입니다.",
  },
  {
    name: "sieun",
    comment: "안녕하세요. sieun입니다. 영어 이름은 sophie에요.",
  },
];

function CommentList(props) {
  return (
    <div>
      {comments.map((comment) => {
        return <Comment name={comment.name} comment={comment.comment} />;
      })}
    </div>
  );
}

export default CommentList;
