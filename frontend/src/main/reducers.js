import { combineReducers } from 'redux'
import Dashboardreducer from '../dashboard/dashboardReducer'
import TabReducer from '../common/tab/tabReducers'
import BillingCycleReducer from '../billingCycle/billingCycleReducer'

const rootReducers = combineReducers({
    dashboard: Dashboardreducer,
    tab: TabReducer,
    billingCycle: BillingCycleReducer
})

export default rootReducers