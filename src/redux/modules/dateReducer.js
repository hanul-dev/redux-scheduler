const ADD_SCHEDULE = "ADD_SCHEDULE";

export const addSchedule = payload => {
  return { type: ADD_SCHEDULE, payload };
};

const initialState = {
  schedules: [],
};

export const dateReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_SCHEDULE:
      return {
        // ...state,
        date: [...state.date, action.payload],
      };
    default:
      return state;
  }
};
