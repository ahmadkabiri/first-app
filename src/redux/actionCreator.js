
import {counterIncrement,counterDecrement,counterRestart} from './actionTypes'

const counterIncrementAction = () => {
    return {
        type :counterIncrement
    }
}


const counterDecrementAction = () => {
    return {
        type :counterDecrement
    }
}



const counterRestartAction = () => {
    return {
        type : counterRestart
    }
}

export {counterIncrementAction,counterDecrementAction,counterRestartAction} 

