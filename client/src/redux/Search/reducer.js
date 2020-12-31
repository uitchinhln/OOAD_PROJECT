import actions from './action';

const initState = {
  book_search_completion_data: null,
};

export default (state = initState, action) => {
  switch (action.type) {
    case actions.BOOK_SEARCH_COMPLETION:
      if (!action.error && action.payload && action.payload.error == 0) {
        return {
          book_search_completion_data: action.payload.data,
        };
      }
      return { book_search_completion_data: null };
    default:
      return state;
  }
};
