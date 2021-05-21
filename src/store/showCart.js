const initialState = false;

export default function reducer(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case 'TOGGLE':
      return state === true ? false : true;

    default:
      return state;
  }
}

export const toggle = () => {
  return {
    type: 'TOGGLE',
  };
};
