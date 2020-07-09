
const initialState = [
    {id: 1, desc: 'todo 1 recux', completed: false},
    {id: 2, desc: 'todo 2 redix', completed: false},
]

const COMPLETE = 'COMPLETE';
const SUBMIT = 'SUBMIT';
const STARTSUBMIT = 'STARTSUBMIT';
const ERROR_SUBMIT = 'ERROR_SUBMIT';

export const complete = id => ({
    type: COMPLETE,
    payload: id
})

export const submit = todo => ({
    type: SUBMIT,
    payload: todo
})

const startSubmit = () => ({
    type: STARTSUBMIT
})
const errorSubmit = (error) => ({
    type: ERROR_SUBMIT,
    error
})
export default (state = initialState, action) => {
    switch (action.type) {
        case COMPLETE:
            return state.map( x => x.id === action.payload ? ({...x, completed: !x.completed}): x)
        case SUBMIT:
            return  [action.payload].concat(state);
        default:
            return state;
    }
}

export const saveTodo = (text) => async (dispatch, getState) => {
    const state = getState();
    dispatch(startSubmit());
    try {
        const todo = {
            desc: text,
            completed: false
        }
        const response = await fetch('https://jsonplaceholder.typicode.com/todos', {
            method: 'POST',
            body: JSON.stringify(todo)
        })
        const id = await response.json();
        dispatch(submit({...todo, ...id}));
    } catch (e) {
        dispatch(errorSubmit(e));
    }
}