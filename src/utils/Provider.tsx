'use client'
import { makeStore} from "@/redux/store";
import { useMemo } from "react";
import { Provider } from "react-redux";
import { persistStore } from "redux-persist";
import { PersistGate } from "redux-persist/integration/react";
// import Loading from "./Loading";



const Providers = ({ children }: { children: React.ReactNode }) => {

  const { store, persistor } = useMemo(() => {
    const store = makeStore();
    const persistor = persistStore(store);
    return { store, persistor };
  }, []);

  return (
      <Provider store={store}>
        <PersistGate 
        // loading={ <Loading/> }
        persistor={persistor}
        > 
        {children}
        </PersistGate>
      </Provider>
  )
}

export default Providers;