/**
 * User Reducer
 *
 */

// Set initial state
const initialState = {};
const sample_data = [
  {"id":0,"name":"Competition Name","category":"Arts & Crafts, 500Rs","expiry":"3 days left","desc":"Lorem is a dummy content that is placed instead of a text in the document."},
  {"id":1,"name":"Competition Name","category":"Arts & Crafts, 500Rs","expiry":"3 days left","desc":"Lorem is a dummy content that is placed instead of a text in the document."},
  {"id":2,"name":"Competition Name","category":"Arts & Crafts, 500Rs","expiry":"3 days left","desc":"Lorem is a dummy content that is placed instead of a text in the document."},
  {"id":3,"name":"Competition Name","category":"Arts & Crafts, 500Rs","expiry":"3 days left","desc":"Lorem is a dummy content that is placed instead of a text in the document."},
];

export default function submission(state = initialState, action) {
  return {
    ...state,
    data_list: sample_data,
  };
}
