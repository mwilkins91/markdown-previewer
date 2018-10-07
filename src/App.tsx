import * as React from 'react';
import './App.css';
import marked from 'marked';
import Preview from './components/Preview/Preview';

class App extends React.Component {
  public state = {
    preview: '',
    markdown: ''
  }

  public handleChange = (e:React.SyntheticEvent) => {
    const target:HTMLTextAreaElement = e.target as HTMLTextAreaElement;
    this.setState({
      markdown: target.value,
      preview: marked(target.value)
    })
  }

  public render() {
    return (
      <main className="App container">
        <section className="columns">
          <div className="column">
            <label htmlFor="markdown" className="title is-size-4">Markdown</label>
            <textarea onChange={this.handleChange} name="markdown" id="markdown" className="markdown textarea is-large" rows={30}/>
          </div>
          <div className="column">
            <Preview content={{__html: this.state.preview}} />
          </div>
        </section>
      </main>
    );
  }
}

export default App;
