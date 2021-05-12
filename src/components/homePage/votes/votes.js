import React from "react";
import {
    addOneToVote,
    minusOneToVote,
} from "../../../redux/actions/voteActions";
import { useDispatch } from "react-redux";

const PostVotes = ({ votes, id }) => {
    // const vote = useSelector((state) => state.vote.vote);
    const dispatch = useDispatch();

    const handleAddOne = () => {
        dispatch(addOneToVote(id));
    };

    const handleMinusOne = () => {
        dispatch(minusOneToVote(id));
    };

    return (
        <div>
            <h2>Votes: {votes} </h2>
            <button onClick={handleAddOne}>
                <i class="fas fa-arrow-up fa-2x" />
            </button>
            <button onClick={handleMinusOne}>
                <i class="fas fa-arrow-down fa-2x" />
            </button>
        </div>
    );
};

export default PostVotes;
