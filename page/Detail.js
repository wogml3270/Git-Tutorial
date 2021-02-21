import React from 'react'

export default class Detail extends React.Component{

    constructor(props){
        super(props)

        const articleListTxt = sessionStorage.getItem('list')
        const articleList = JSON.parse(articleListTxt)

        const { params } = this.props.match

        const viewId = params.id
        const article = articleList.find(item => {
            return item.id == viewId
        })

        this.state = {
            article: article
        }
    }
    delArticle = () => {
        const articleListTxtBefore = sessionStorage.getItem('list')
        const articleList  = JSON.parse(articleListTxtBefore)

        const idx = articleList.findIndex(item => {
            return item.id == this.state.viewId
        })
        
        articleList.splice(idx, 1)

        const articleListTxtAfter = JSON.stringify(articleList)
        sessionStorage.setItem('list', articleListTxtAfter)

        this.props.history.push('/list')
    }
    render(){
        const article = this.state.article
        return(
            <div>
                <h2>Detail</h2>
                <div>
                    <button>수정</button>
                    <button>삭제</button>
                </div>
                <div>번호 : {article.id}</div>
                <div>제목 : {article.title}</div>
                <div>내용 : {article.ctnt}</div>
            </div>
        )
    }
}