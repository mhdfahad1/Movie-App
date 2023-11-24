import { Component } from 'react';
import Popular from './Popular';
import Search from './Search';

class Home extends Component {


    state = { searchTerm: '' }
    
    handleInput = (e) => {
        
        this.setState({
            searchTerm: e.target.value,
            
        })
    }


    // Do not change the render function
    render() {
        return <div className="relative w-full">
            <div className="search-input w-full">
                <input type="text" name="search"  className='md:w-[1100px] w-[370px] md:ml-0 ml-5 p-3 my-2 rounded-lg h-12' onChange={(e) => this.handleInput(e)} placeholder="Start typing to show results..." />
            </div>
            {this.state.searchTerm.length == 0  ? <Popular {...this.props} /> : <Search searchTerm={this.state.searchTerm} />}
        </div>
    }
}

export default Home;