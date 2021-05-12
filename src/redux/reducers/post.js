import { ADD_POST } from "../actions/actionConstants";
import { ADD_COMMENT } from "../actions/actionConstants";
import { ADD_ONE_TO_VOTE, MINUS_ONE_TO_VOTE } from "../actions/actionConstants";
import { v4 } from "uuid";

const initialState = {
    posts: [
        {
            id: v4(),
            title: "Angry Pug",
            time: new Date(),
            username: "DukeOfWindsor",
            subReddit: "r/pugs",
            url:
                "https://static-cdn.jtvnw.net/jtv_user_pictures/4376924f-8207-49a6-85a4-60f2fe20ce91-profile_image-300x300.png",
            votes: 9700,
            comments: ["hello", "bye", "hi again"],
        },
    ],
};

const postReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_COMMENT:
            const tempComment = [...state.comments];
            tempComment.push(action.payload);
            return { ...state, comments: tempComment };
        case ADD_ONE_TO_VOTE:
            const postIds = state.posts.map((post) => {
                return post.id;
            });
            const postIndex = postIds.indexOf(action.payload);
            const tempUpVotePost = [...state.posts];
            // console.log(tempUpVotePost[postIndex]);
            tempUpVotePost[postIndex].votes =
                tempUpVotePost[postIndex].votes + 1;
            return { ...state, posts: tempUpVotePost };
        case MINUS_ONE_TO_VOTE:
            const postIdsDown = state.posts.map((post) => {
                return post.id;
            });
            const postIndexDown = postIdsDown.indexOf(action.payload);
            const tempDownVotePost = [...state.posts];
            // console.log(tempDownVotePost[postIndex]);
            tempDownVotePost[postIndexDown].votes =
                tempDownVotePost[postIndexDown].votes - 1;
            return { ...state, posts: tempDownVotePost };
        case ADD_POST:
            const post = {
                id: v4(),
                title: action.payload.title,
                time: new Date(),
                username: action.payload.username,
                subReddit: action.payload.subReddit,
                url: action.payload.url,
                votes: 0,
                comments: [],
            };
            const tempPost = [...state.posts];
            tempPost.push(post);
            console.log(tempPost);
            return { ...state, posts: tempPost };
        default:
            return state;
    }
};

export default postReducer;
