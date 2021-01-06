import { combineReducers } from 'redux'
import Dashboardreducer from '../dashboard/dashboardReducer'

const rootReducers = combineReducers({
    dashboard: Dashboardreducer
})

export default rootReducers