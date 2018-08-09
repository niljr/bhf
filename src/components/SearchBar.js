import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import Input from '@material-ui/core/Input';
import { withRouter } from 'react-router-dom';

class SearchBar extends React.Component {

    static proptypes = {
        updateBoardingHouse: PropTypes.func
    };

    state = { 
        searchString: '' 
    }


    //1st get the key of all the item with the same searched ites
    //2d send to profilecontainer together with the keys and data
//    handleChange = (e) => {
//     //  this.setState({ searchString :e.target.value});
//      let searchString = e.target.value;

//      console.log(searchString)
//    }
    handleSubmit = event => {
        event.preventDefault();
        let searchItem = ReactDOM.findDOMNode(this.refs.search).value;
        ReactDOM.findDOMNode(this.refs.search).value = '';
        this.props.history.push(`/searched/${searchItem}`);
    }
    render() {
        // var libraries = this.props.boardingHouses,
        // searchString = this.state.searchString.trim().toLowerCase();
        // console.log(libraries);
        // if (searchString.length > 0) {
        //     libraries = libraries.filter(function(i) {
        //         return i.district.toLowerCase().match( searchString );
        //     });
        // }
        return (
            <React.Fragment>
                <form onSubmit={this.hundleSubmit}>
                {/* <Input
                        placeholder="Placeholder"
                        inputProps={{
                        'aria-label': 'Description',
                        }}
                        fullWidth
                        value={this.state.searchString}
                        onChange={this.handleChange}
                    /> */}
                    <Input
                        
                        placeholder="Placeholder"
                        inputProps={{
                        'aria-label': 'Description',
                        }}
                        fullWidth
                        ref="search"
                    />
                    <button type="submit">Search</button>
                </form>
            </React.Fragment>
        );
    }
}

export default withRouter(SearchBar);