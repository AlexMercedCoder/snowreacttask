import { createTaskRunner } from 'merced-react-hooks';

// Initial State
const initialState = {
  word: 'hello',
};

//Reducer
const taskList = {
  adios: (state, setState, payload) => {
    setState({...state, word: "adios"})
  }
}

//create Data Store Provider and useDataStore hook
export const [TaskStore, useTaskStore] = createTaskRunner(initialState, taskList);
