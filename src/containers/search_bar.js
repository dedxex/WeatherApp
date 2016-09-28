import React,{Component} from 'react';
import {fetchWeather} from '../actions/index.js';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
export  class SearchBar extends Component {
    componentWillMount() {
        this.props.fetchWeather('new york');
    }
    constructor(props) {
        super(props);
        this.state={ term : ''};
        this.onSearchChange=this.onInputChange.bind(this);
        this.onSubmitForm=this.onSubmitForm.bind(this);
    }
        onInputChange(event) {
            this.setState({term : event.target.value})
        }
        onSubmitForm(event) {
            event.preventDefault();
            this.props.fetchWeather(this.state.term);
            this.setState({term: ""});
        }
    render() {
        return (
               <div>
                <form className="input-group col-lg-8" onSubmit={this.onSubmitForm}>
                    <input
                        placeholder="Enter name of City here to see its weather forecast"
                        className="form-control"
                        value={this.state.term}
                        onChange={this.onSearchChange}>
                    </input>
                    <span className="input-group-btn">
                        <button 
                            className="btn btn-primary"
                            value="submit"
                            type="submit">search
                        </button>
                    </span>
                </form></div>
        );
    }
}
function mapDispatchToProps(dispatch) {
    return bindActionCreators({fetchWeather},dispatch);
}
export default connect(null,mapDispatchToProps)(SearchBar);