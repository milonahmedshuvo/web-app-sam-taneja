'use client'
import { makeStore} from "@/redux/store";
import { useMemo } from "react";
import { Provider } from "react-redux";
import { persistStore } from "redux-persist";
import { PersistGate } from "redux-persist/integration/react";



const Providers = ({ children }: { children: React.ReactNode }) => {

  const { store, persistor } = useMemo(() => {
    const store = makeStore();
    const persistor = persistStore(store);
    return { store, persistor };
  }, []);

  return (
      <Provider store={store}>
        <PersistGate 
        loading={<div>redux is loadidng..</div>}
        persistor={persistor}
        > 
        {children}
        </PersistGate>
      </Provider>
  )
}

export default Providers;