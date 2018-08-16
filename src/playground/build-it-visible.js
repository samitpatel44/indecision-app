class VisibilityToggle extends React.Component {
  constructor (props) {
      super(props);
      this.handletoggeleVisibility = this.handletoggeleVisibility.bind(this);
      this.state = {
          visibility: false
      };
  }

  handletoggeleVisibility () {
      this.setState((prevState) =>{
        return {
                visibility:!prevState.visibility
        };
      });
  }

  render () {
    return (
      <div>
        <h1>Visibility Toggle</h1>
        <button onClick={this.handletoggeleVisibility}>
          {this.state.visibility ? 'Hide details' : 'Show details'}
        </button>
        {this.state.visibility && (
          <div>
            <p>Hey. These are some details you can now see!</p>
          </div>
        )}
      </div>
    );}
  }   
ReactDOM.render(<VisibilityToggle />, document.getElementById('app'));
