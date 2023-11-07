import { createContext, useContext } from 'react';
import { NextRouter } from 'next/router';

const RouterContext = createContext<NextRouter | null>(null);

export const useAppRouter = (): NextRouter | null => {
  return useContext(RouterContext);
};

export const RouterProvider = RouterContext.Provider;
