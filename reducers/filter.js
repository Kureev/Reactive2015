const initialState = {
  'data_flow': true,
  'rethinking_react': true,
  'react_everywhere': true,
  'react_general': true,
};

module.exports = function counter(state = initialState, action = {}) {
  switch (action.type) {
    case 'UPDATE_FILTER':
      const patch = {};
      Object.defineProperty(patch, action.data.category, {
        value: action.data.checked,
        enumerable: true,
      });

      return {
        ...state,
        ...patch,
      };
    default:
      return state;
  }
};
