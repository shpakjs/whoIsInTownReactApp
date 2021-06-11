import React, { Dispatch, useEffect, useReducer } from "react";
import { CookiesProvider, useCookies } from 'react-cookie';

import { Action, setFavourites } from "./actions";
import reducer, { IState } from "./reducer";

type ContextProps = { 
  state: IState;
  dispatch: Dispatch<Action>;
};

export const AppContext = React.createContext<Partial<ContextProps>>({});

interface IProps { 
  children: any;
};

const AppContextProvider = ({ children }: IProps) => {
  const [cookies, setCookie, removeCookie] = useCookies(['favourites']);
  const [state, dispatch] = useReducer(reducer, {});

  useEffect(() => {
    if(state.favouriteEvents) {
      setCookie('favourites', state.favouriteEvents);
    } else {
      removeCookie('favourites');
    }
  }, [state.favouriteEvents]);

  useEffect(() => {
    const savedFavourites = cookies['favourites'];
    if(savedFavourites) {
      dispatch(setFavourites(savedFavourites));
    }
  }, []);

  return (
    <CookiesProvider>
      <AppContext.Provider value={{state, dispatch}}>
        {children}
      </AppContext.Provider>
    </CookiesProvider>
  );
};

export default AppContextProvider;