import { browserActions } from "./actions";

export function browserReducer(
  state = {
    media: {},
  },
  { payload, type }
) {
  switch (type) {
    case browserActions.MEDIA_QUERY_CHANGED:
      return { ...state, media: payload.results };
    default:
      return state;
  }
}
