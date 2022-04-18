
import {createStore, applyMiddleware} from 'redux';
import rootRedecuer from './reducer'
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';
import appSaga from './saga'

function configStore (){
    const sagaMiddleWare = createSagaMiddleware()
    return {...createStore(rootRedecuer, composeWithDevTools(applyMiddleware(sagaMiddleWare))), runSaga:sagaMiddleWare.run(appSaga)}
}

export default configStore;