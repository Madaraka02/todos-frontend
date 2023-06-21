import { combineReducers, configureStore } from "@reduxjs/toolkit";
import thunk from 'redux-thunk';

// import storage from 'redux-persist/lib/storage';
import storageSession from 'redux-persist/lib/storage/session'
import { persistReducer, persistStore } from 'redux-persist';
import hardSet from 'redux-persist/lib/stateReconciler/hardSet'
import { taskReducer } from "./features/tasks/taskSlice";

const rootPersistConfig = {
    key: 'root',
    storage: storageSession,
    stateReconciler: hardSet,
}


const rootReducer = combineReducers({
    tasks: taskReducer,
})

const persistedReducer = persistReducer(rootPersistConfig, rootReducer)

export const store = configureStore({
    reducer: persistedReducer,
    devTools: process.env.NODE_ENV !== 'production',
    middleware: [thunk]
});

export const persistor = persistStore(store);