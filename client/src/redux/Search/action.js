import agent from "../../core/api/restful";

const actions = {
  BOOK_SEARCH_COMPLETION: 'BOOK_SEARCH_COMPLETION',

  bookSearchCompletion: value => ({
    type: actions.BOOK_SEARCH_COMPLETION,
    payload: agent.Product.searchCompletion(value),
  }),
};

export default actions;
