import {
  createContext,
  useContext,
  useReducer,
  type ChangeEvent,
  type ReactElement,
} from "react";

interface StateType {
  count: number;
  text: string;
}

export const initialState: StateType = {
  count: 0,
  text: "",
};

type ActionType =
  | { type: "increment" }
  | { type: "decrement" }
  | { type: "input-text"; payload: string };

function reducer(state: StateType, action: ActionType): StateType {
  switch (action.type) {
    case "increment":
      return { ...state, count: state.count + 1 };
    case "decrement":
      return { ...state, count: state.count - 1 };
    case "input-text":
      return { ...state, text: action.payload };
    default:
      const exhaustiveCheck: never = action;
      return state;
  }
}

const useCounterContext = (initialState: StateType) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const increment = () => dispatch({ type: "increment" });
  const decrement = () => dispatch({ type: "decrement" });
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch({ type: "input-text", payload: e.target.value });
  };

  return {
    state,
    increment,
    decrement,
    handleChange,
  };
};

type UseCounterContextType = ReturnType<typeof useCounterContext>;

const initContextState: UseCounterContextType = {
  state: initialState,
  increment: () => {},
  decrement: () => {},
  handleChange: (e: ChangeEvent<HTMLInputElement>) => {},
};

export const CounterContext =
  createContext<UseCounterContextType>(initContextState);

type ChildrenType = {
  children?: ReactElement | undefined;
};

export const CounterProvider = ({
  children,
  ...initialState
}: ChildrenType & StateType): ReactElement => {
  return (
    <CounterContext.Provider value={useCounterContext(initialState)}>
      {children}
    </CounterContext.Provider>
  );
};

type UseCounterHookType = {
  count: number;
  increment: () => void;
  decrement: () => void;
};

export const useCounter = (): UseCounterHookType => {
  const {
    state: { count },
    increment,
    decrement,
  } = useContext(CounterContext);

  return { count, increment, decrement };
};

type UseCounterTextHookType = {
  text: string;
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
};

export const useCounterText = (): UseCounterTextHookType => {
  const {
    state: { text },
    handleChange,
  } = useContext(CounterContext);

  return { text, handleChange };
};
