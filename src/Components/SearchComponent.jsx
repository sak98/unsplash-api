import React, { Component,Fragment } from 'react';


class SearchComponent extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            term :'',
         }
         this.ref = React.createRef();
    }

    componentDidMount(){
        this.ref.current.style.background ='pink'
    }

    handleChange = (e)=>{
        this.setState({term : e.target.value})
    }

    handleSubmit = (e)=>{
        e.preventDefault();
        this.props.Submit(this.state.term);
    }

    render() { 
        return ( 
            <Fragment >
                <div className="card d-flex align-items-center justify-content-center">
                    <div  className="card-body">
                        <form onSubmit={this.handleSubmit}>
                            <input ref={this.ref} type="text" className="form-control" onChange={this.handleChange} name="search" value={this.state.term} placeholder="SearchImage"/>
                            <button className='btn btn-warning text-dark'>Seacrh</button>
                        </form>
                    </div>
                </div>
            </Fragment>
         );
    }
}
 
export default SearchComponent;