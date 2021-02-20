import React from 'react'
import ValueInput from './ValueInput'

export default class InchToCm extends React.Component {
    state = {
        inch: 0,
        cm: 0
    }
    valChanged = e => {
        const target = e.unit
        const val = e.value

        const another = e.unit === 'cm' ? 'inch' : 'cm'
        // let anotherVal = val / 2.54
        // if(another === 'cm'){
        //     anotherVal = val / 2.54
        // }
        const anotherVal = another === 'cm' ? val * 2.54 : val / 2.54


        this.setState({
            [target]: val,
            [another]: anotherVal
        })
    }

    render () {
        const { inch, cm } = this.state
        const inchChanged = this.inchChanged
        const cmChanged = this.cmChanged
        const valChanged = this.valChanged
        return (
            <div>
                <ValueInput unit='inch' value={inch} onChange={valChanged} />
                <ValueInput unit='cm' value={cm} onChange={valChanged} />
            </div>
        )
    }
}