import React, {createContext, useReducer, Children} from 'react';

import auth from './reducers/auth';
import quiz from './reducers/quiz';
import authInitialState from './initialstates/authInitialState';
import quizInitialState from './initialstates/quizInitialState';


export const GlobalContext = createContext({});
export const GlobalProvider = ({ children }) => {
    const [authState, authDispatch] = useReducer(auth, authInitialState);
    const [quizState, quizDispatch] = useReducer(quiz, quizInitialState);

    return (
        <GlobalContext.Provider
            value={
                {
                    authState,
                    authDispatch,
                    quizState,
                    quizDispatch,
                }
            }
        >
            {children}    

        </GlobalContext.Provider>
    );
};

//export default GlobalProvider;


