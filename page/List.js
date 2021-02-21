import React from 'react'

export default class List extends React.Component{

    constructor(props){
        super(props)
    
        const articleListTxt = sessionStorage.getItem('list')
        const articleList = JSON.parse(articleListTxt)
        this.state = {
            list: articleList
        }
    }
    moveToDetail = (id) => {
        this.props.history.push(`/detail/${id}`)
    }

    makeList = () => {
        const style = {
            cursor: 'pointer'
        }
        return this.state.list.map(item => {
            return (
                <tr style={style} onClick={() => {this.moveToDetail(item.id)}}>
                    <td>{item.id}</td>
                    <td>{item.title}</td>
                </tr>
            )
        })
    }
    render(){
        const list = this.makeList()
        return(
            <div>
                <table>
                    <tr>
                        <th>번호</th>
                        <th>제목</th>
                        
                    </tr>
                    {list}
                </table>
            </div>
        )
    }
}