import { combineReducers } from 'redux'
import Dashboardreducer from '../dashboard/dashboardReducer'
import TabReducer from '../common/tab/tabReducers'

const rootReducers = combineReducers({
    dashboard: Dashboardreducer,
    tab: TabReducer
})

export default rootReducers