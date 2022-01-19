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
            subject: {title: "WEB", sub: "World Wide Web!"},
            welcome: {title: 'Welcome', desc: 'Hello, React!!!'},
            contents: [
                {id: 1, title: 'HTML', desc: "HTML is for Information"},
                {id: 2, title: 'CSS', desc: "CSS is for Design"},
                {id: 3, title: 'JavaScript', desc: "JavaScript is for interactive"}
            ]
        }
    }

    render() {
        var _title, _desc = null;
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
                <Subject
                    title={this.state.subject.title}
                    sub={this.state.subject.sub}>
                </Subject>
                <Subject title="React" sub="For UI"></Subject>
                <TOC data={this.state.contents}></TOC>
                <Content title="HTML" desc="HTML is HyperText Markup Languages."></Content>
            </div>
        )
    }
}

export default App;