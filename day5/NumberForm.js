import React from 'react'
// 숫자만 입력받는 텍스트박스
export default class NumberForm extends React.Component{
    constructor (props){
        super(props)
        this.state = {
            value: '' 
        }
    }
    doChange = e => {
        const curValue = e.target.value
        const newValue = curValue.replce(/[^0-9]/g, '')
        this.setState({
            value: newValue
        })
    }

    doSubmit = e => {
        alert(`전송: ${this.state.value}`)
        e.preventDefault()
    }

    render(){
        // 이벤트 바인딩
        const doSubmit = this.doSubmit
        const doChange = this.doChange

        //value 바인딩
        const value = this.state.value

        return (
            <div>
                <form onSubmit={doSubmit} action='목표주소값'>
                    <input type='text' value={value} onChange={doChange} />
                    <input type='submit' value='전송' />
                </form>
            </div>
        )
    }
}