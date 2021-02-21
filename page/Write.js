import React from 'react'

export default class Write extends React.Component{
    state ={
        title:'',
        ctnt: '',
    }
    doChange = e => {
        const key = e.target.name
        const val = e.target.value
        this.setState({
        [key]: val
         })
    }
    doWrite = e => {
        if(this.state.title === '' || this.state.ctnt === ''){
            alert('제목 및 내용을 작성해 주세요.')
            return
        }
        const article = {
            id: 1,
            title: this.state.title,
            ctnt: this.state.ctnt
        }
        let articleList = []
        const articleListTxtBefore = sessionStorage.getItem('list')
        if(articleListTxtBefore == null) {
            articleList = []
            articleList.push(article)
        } else {
            articleList = JSON.parse(articleListTxtBefore)
            const lastArticle = articleList[0]

            article.id = lastArticle.id + 1
            articleList.unshift(article)
        }
        
        const articleListTextAfter = JSON.stringify(articleList)
        sessionStorage.setItem('list', articleListTextAfter)

        this.props.history.push('/list')
    }

    render(){
        const s = this.state
        const title = s.title
        const ctnt = s.ctnt
        return(
            <div>
                <div><label>제목: <input type="text"
                                         name="title"
                                         value={title}
                                         onChange={this.doChange} /></label></div>
                <div><label>내용 : <textarea name="ctnt"
                                             value={ctnt}
                                             onChange={this.doChange} /></label></div>
                <div><button onClick={this.doWrite}>등록</button></div>
            </div>
        )
    }
}