import {UserType} from '../HW8'

type ActionType =
    | { type: 'sort'; payload: 'up' | 'down' }
    | { type: 'check'; payload: number }

export const homeWorkReducer = (state: any, action: any): any => { // need to fix any
    switch (action.type) {
        case 'sort': { // by name

            return [...state].sort(function (a, b) {

                if(action.payload === 'up'){
                    if (a.name > b.name) {
                        return 1;
                    }
                    if (a.name < b.name) {
                        return -1;
                    }
                    // a должно быть равным b
                    return 0;
                } else {
                    if (a.name < b.name) {
                        return 1;
                    }
                    if (a.name > b.name) {
                        return -1;
                    }
                    // a должно быть равным b
                    return 0;
                }

            })// need to fix
        }
        case 'check': {

            return [...state].filter(el => el.age >= 18) // need to fix
        }
        default:
            return state
    }
}
