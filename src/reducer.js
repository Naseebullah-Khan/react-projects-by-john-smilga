import {
  SET_LOADING,
  SET_STORIES,
  REMOVE_STORY,
  HANDLE_PAGE,
  HANDLE_SEARCH,
} from "./actions";

const reducer = (state, action) => {
  switch (action.type) {
    case SET_LOADING:
      return { ...state, loading: true };
    case SET_STORIES:
      const { hits, nbPages } = action.payload;
      return { ...state, stories: hits, nbPages, loading: false };
    case REMOVE_STORY:
      const newStories = state.stories.filter(
        (story) => story.story_id !== action.payload
      );
      return { ...state, stories: newStories };
    default:
      throw new Error(`no matching ${action.type} action type`);
  }
};
export default reducer;
