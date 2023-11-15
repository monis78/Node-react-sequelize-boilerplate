import React, { useCallback, useEffect, useState } from "react";
import { createComment, getBlogComments } from "../action/comment.services";
import { toast } from "react-toastify";

const CommentContainer = ({ blogId }) => {
  const [commentList, setCommentList] = useState([]);
  const [addNewCommentValue, setAddNewCommentValue] = useState("");

  const updateBlogComment = useCallback(() => {
    getBlogComments(blogId).then((commentList) => {
      setCommentList(commentList.data.data);
    });
  }, [blogId]);

  useEffect(() => {
    updateBlogComment();
  }, [blogId, updateBlogComment]);

  const addNewComment = async () => {
    const isCommentCreated = await createComment(blogId, addNewCommentValue);
    console.log(isCommentCreated.data);
    if (isCommentCreated.status === 200) {
      toast(isCommentCreated.data.message);
      updateBlogComment();
      setAddNewCommentValue("");
    }
  };

  return (
    <div>
      <h3>Comments</h3>
      <div className="formController create">
        <input
          required
          name="comment"
          type="comment"
          placeholder="write your comment here"
          value={addNewCommentValue}
          onChange={(e) => {
            setAddNewCommentValue(e.target.value);
          }}
        />
        <button
          onClick={(e) => {
            e.preventDefault();
            addNewComment();
          }}
        >
          Submit
        </button>
      </div>
      {commentList.map((commentDetails) => {
        return (
          <CommentDetails
            commentDetails={commentDetails}
            key={commentDetails.id}
          />
        );
      })}
    </div>
  );
};

export default CommentContainer;

const CommentDetails = ({ commentDetails }) => {
  const [onReplyButtonClick, setOnReplyButtonClick] = useState(false);
  const [childCommentValue, setChildCommentValue] = useState("");

  const onSubmitReply = () => {
    createComment(commentDetails.blogId, childCommentValue, commentDetails.id);
  };
  return (
    <div>
      <div class="post-comment">
        <p>
          <img
            src="https://bootdey.com/img/Content/avatar/avatar7.png"
            alt=""
            class="profile-photo-sm"
          />
          <a href="timeline.html" class="profile-link">
            {commentDetails.User.name}
          </a>
          <i class="em em-laughing"></i> {commentDetails.comment}
        </p>
      </div>
      <div>
        {!onReplyButtonClick && (
          <button
            className="button"
            onClick={(e) => {
              e.preventDefault();
              setOnReplyButtonClick(true);
            }}
          >
            reply
          </button>
        )}
        {onReplyButtonClick && (
          <>
            <input
              value={childCommentValue}
              name="childComment"
              onChange={(e) => {
                setChildCommentValue(e.target.value);
              }}
            />
            <div className="userCommentAction">
              <button
                className="button"
                onClick={(e) => {
                  e.preventDefault();
                  onSubmitReply();
                }}
              >
                submit
              </button>
              <button
                className="button"
                onClick={(e) => {
                  e.preventDefault();
                  setOnReplyButtonClick(false);
                }}
              >
                cancel
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};
