'use client';

import { Provider } from "react-redux";
import { store } from '@pokedex/common/store';

const StoreProvide = ({ children }: { children: React.ReactNode }) => {
  // const { store } = wrapper.useWrappedStore(rest);

  return (
    <Provider store= { store } >
    { children }
    </Provider>

  )
}

export default StoreProvide;
