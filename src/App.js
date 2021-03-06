import React, {Component} from 'react'
import TOC from "./components/TOC"
import Content from "./components/Content"
import Subject from "./components/Subject"
import './App.css';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            mode: 'welcome',
            subject: {title: 'WEB', sub: 'World Wide Web!'},
            welcome: {title: 'Welcome', desc: 'Hello, React!!!'},
            contents: [
                {id: 1, title: 'HTML', desc: 'HTML is for Information'},
                {id: 2, title: 'CSS', desc: "CSS is for Design"},
                {id: 3, title: 'JavaScript', desc: 'JavaScript is for interactive'}
            ]
        }
    }

    render() {
        let _title, _desc = null;
        if (this.state.mode === 'welcome') {
            _title = this.state.welcome.title;
            _desc = this.state.welcome.desc;
        } else if (this.state.mode === 'read') {
            _title = this.state.contents[0].title;
            _desc = this.state.contents[0].desc;
        }
        return (
            // props 나 state 가 바뀌면 화면이 달라진다.
            <div className="App">
                {/*<Subject*/}
                {/*    title={this.state.subject.title}*/}
                {/*    sub={this.state.subject.sub}>*/}
                {/*</Subject>*/}
                <header>
                    <h1><a href="/">{this.state.subject.title}</a></h1>
                    {this.state.subject.sub}
                </header>
                <TOC data={this.state.contents}></TOC>
                <Content title={_title} desc={_desc}></Content>
            </div>
        )
    }
}

export default App;