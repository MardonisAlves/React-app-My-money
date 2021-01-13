import React  , { Component } from 'react'
import {bindActionCreators } from 'redux'
import {  connect }  from 'react-redux'
import { getList }  from './billingCycleActions'

class BillingCycleList extends Component {

    componentWillMount() {
        this.props.getList()
        console.log('Eu fui Compilado')
        }

        
        renderRows() {
            const list = this.props.list || []
            return list.map(bc => (
                <tr key={bc._id}>
                <td>{bc.name}</td>
                <td>{bc.month}</td>
                <td>{bc.year}</td>
                </tr>
            ))
            }    
    
    render(){
        console.log(this.props.list)
        return (
            <div>
                <table className='table'>
                <thead>
                    <tr>
                        <th>Nome</th>
                        <th>Mês</th>
                        <th>Ano</th>
                    </tr>
                </thead>
                {this.renderRows()}
                <tbody>
                </tbody>
                </table>
            </div>  
        )
    }
}
const mapStateToProps = state => ({list: state.billingCycle.list})
const mapDispatchToProps = dispatch => bindActionCreators({getList}, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(BillingCycleList)