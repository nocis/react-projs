export const browserActions = {
  MEDIA_QUERY_CHANGED: "MEDIA_QUERY_CHANGED",

  mediaQueryChanged: (results) => ({
    type: browserActions.MEDIA_QUERY_CHANGED,
    payload: {
      results,
    },
  }),
};

// action creater!!!!
// reducer(state, browserActions.mediaQueryChanged(results))
// dispatch(browserActions.mediaQueryChanged())

// action creater also help in async action
// set timeout!!!
// clear timeout!!!
