import React from 'react'

export default class VariedInputs extends React.Component{

    state = {
        eat: true,
        sleep: false,
        cnt: '',
        nm: '',
        drink: 2,
        radioList:[
            {title: '콜라', value: '1'},
            {title: '사이다', value: '2'},
            {title: '환타', value: '3'},
        ]
    }
    makeRadioList = () => {
        const radioList = this.state.radioList.map(item => {
            return(
                <label>
                    <input type="radio"
                     name="drink" 
                     value="1" 
                     onChange={this.doTextChange} 
                     checked={item.value === this.state.drink} />{item.title}
                </label>
            )
        })
        return( <div>{radioList}</div>)
    }
    //체크박스 변경 이벤트
    doCheckboxChange = e => {
        const key = e.target.name
        this.setState({
            [key]: e.target.checked
        })
    }
    //텍스트 관련 엘리먼트 변경 이벤트
    doTextChange = e =>{
        const key = e.target.name
        this.setState({
            [key]: e.target.value
        })
    }
    render(){
        const state = this.state
        const doCheckboxChange = this.doCheckboxChange
        const doTextChange = this.doTextChange
        return(
            <div>
               <div><label>먹기<input type="checkbox" name="eat" onChange={doCheckboxChange} checked={state.eat} /></label></div>
               <div><label>자기<input type="checkbox" name="sleep" onChange={doCheckboxChange} checked={state.sleep} /></label></div>
               <div><input name="cnt" onChange={doTextChange} value={state.nm}/>{doTextChange}</div>
               <div><textarea name="cnt" onChange={doTextChange} value={state.cnt} /></div>
               {/* <div>
                    <label><input type='radio' name='drink' value='1' onChange={this.doTextChange} checked={state.drink === 1}/>콜라</label>
                    <label><input type='radio' name='drink' value='2' onChange={this.doTextChange} checked={state.drink === 2}/>환타</label>
                    <label><input type='radio' name='drink' value='3' onChange={this.doTextChange} checked={state.drink === 3}/>사이다</label>
                </div> */}
                {radioList}
            </div>
        )
    }
}