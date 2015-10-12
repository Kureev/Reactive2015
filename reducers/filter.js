const initialState = {
  'data_flow': true,
  'rethinking_react': true,
  'react_everywhere': true,
  'react_general': true,
};

module.exports = function counter(state = initialState, action = {}) {
  switch (action.type) {
    case 'UPDATE_FILTER':
      const patched = {...state, };
      patched[action.data.category] = action.data.checked;
      return patched;
    default:
      return state;
  }
};
