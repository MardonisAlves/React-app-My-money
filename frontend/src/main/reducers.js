import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'


import Dashboardreducer from '../dashboard/dashboardReducer'
import TabReducer from '../common/tab/tabReducers'
import BillingCycleReducer from '../billingCycle/billingCycleReducer'

const rootReducers = combineReducers({
    dashboard: Dashboardreducer,
    tab: TabReducer,
    billingCycle: BillingCycleReducer ,
    form: formReducer
})

export default rootReducers