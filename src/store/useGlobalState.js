import { useState } from "react";

const useGlobalState = () => {
  const [state, setState] = useState({ secretId: null, activeQuiz: null });

  const actions = (action) => {
    const { type, payload } = action;
    switch (type) {
      case "setState":
        return setState(payload);
      case "setActiveQuiz":
        return setState(payload);
      default:
        return state;
    }
  };

  return { state, actions };
};

export default useGlobalState;
