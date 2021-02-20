import React from 'react'

export default class Multiform extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            name: '박재희',
            age: 26,
            hobby: '등산'
        }
    }

    doChange = e => {
        const key = e.target.name
        const val = e.target.value

        this.setState({
            [key]: val
        })
    }
    
    doSubmit = e => {
        alert(`${this.state.value}`)
        e.preventDefault()
    }

    render(){
        const { name, age, hobby } = this.state

        const doChange = this.doChange

        return(
            <div>
                <h1>MultiForm</h1>
                <form>
                    <div>
                        <label>이름: <input type="text" name="name" value={name} onChange={doChange} /></label>
                    </div>
                    <div>
                        <label>나이: <input type="number" name="age" value={age} onChange={doChange} /> </label>
                    </div>
                    <div>
                        <label>취미 : <input type="text" name="hobby" value={hobby} onChange={doChange} /></label>
                    </div>
                    <input type="submit" value="전송" />
                </form>
                
            </div>
        )
    }
}