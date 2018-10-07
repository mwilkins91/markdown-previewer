import React, {Component} from 'react';
import './Preview.css';

class Preview extends Component {
  public props: {
    content: { __html: string};
  }

  public state = {
    raw: false
  }

  public toggleRaw = () => this.setState({raw: !this.state.raw})

  public render() {
    if (this.state.raw) {
      return (
        <>
          <div className="title-with-button" >
            <h2 className="title is-size-4">Preview</h2>
            <button className="button is-dark is-size-7" onClick={this.toggleRaw}>
              Disable Raw
            </button>
          </div>
          <div className="content is-large textarea">
           {this.props.content.__html}
          </div>
        </>
      )
    }

    return (
      <>
        <div className="title-with-button" >
          <h2 className="title is-size-4">Preview</h2>
          <button className="button is-light is-size-7" onClick={this.toggleRaw}>
            Enable Raw
          </button>
        </div>
        <div className="content is-large textarea" dangerouslySetInnerHTML={this.props.content} />
      </>
    )
  }
}

export default Preview;