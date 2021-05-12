import React, { useState } from "react";
import { addComment } from "../../../redux/actions/commentActions";
import { useDispatch } from "react-redux";

const PostComments = ({id}) => {
    // const comments = useSelector(state => state.comment.comments);
    const [textInput, setTextInput] = useState("");

    const dispatch = useDispatch();

    const handleAddComment = (e) => {
        e.preventDefault();
        dispatch(addComment(textInput));
        setTextInput("");
    };

    return (
        <div>
            <form>
                <input
                    type="text"
                    value={textInput}
                    placeholder="Comment"
                    onChange={(e) => setTextInput(e.target.value)}
                />
                <input
                    type="submit"
                    onClick={e => handleAddComment(e)}
                    value="Submit"
                />
                {/* {comments.map((comment, i) => {
                    return <h2 key={comment + i}>{comment}</h2>
                })} */}
            </form>
        </div>
    )
};

export default PostComments;
