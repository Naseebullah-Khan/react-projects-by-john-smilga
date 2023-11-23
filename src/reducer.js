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
    case HANDLE_SEARCH:
      return { ...state, query: action.payload, page: 0 };
    case HANDLE_PAGE:
      if (action.payload === "increase") {
        let nextPage = state.page + 1 > state.nbPages - 1 ? 0 : state.page + 1;
        return { ...state, page: nextPage };
      }
      if (action.payload === "decrease") {
        let pervPage = state.page - 1 < 0 ? state.nbPages - 1 : state.page - 1;
        return { ...state, page: pervPage };
      }
      break;
    default:
      throw new Error(`no matching ${action.type} action type`);
  }
};
export default reducer;
