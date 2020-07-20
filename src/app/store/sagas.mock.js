import { take, put, select } from 'redux-saga/effects';
//import { delay } from 'redux-saga';
import * as mutations from './mutations';
//import uuid from 'uuid';
import {v4 as uuid} from 'uuid'
import {  }from 'react-router'
import { history } from './history';

/**
 * Reducers cannot have any randomness (the must be deterministic)
 * Since the action of creating a task involves generating a random ID, it is not pure.
 * When the response to an action is not deterministic in a Redux application, both Sagas and Thunks are appropriate.
 */
export function* taskCreationSaga(){
    while (true){
        const {groupID} = yield take(mutations.REQUEST_TASK_CREATION);
        const ownerID = 'U1';
        const taskID = uuid();
        yield put(mutations.createTask(taskID, groupID, ownerID));
        console.log("Got group ID", groupID);
    }
}

// export function* userAuthenticationSaga(){
//     while (true){
//         const {username,password} = yield take(mutations.REQUEST_AUTHENTICATE_USER);
//         yield delay(250);
//         yield put(mutations.processAuthenticateUser(mutations.AUTHENTICATED, {
//             id:"U1",
//             token:"ABCD-1234",
//         }));
//
//         history.push(`/dashboard`)
//     }
// }
