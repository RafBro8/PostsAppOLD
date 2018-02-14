import React, {Component} from 'react';
import { connect } from 'react-redux';
//import { bindActionCreators } from 'redux';
import { fetchPosts } from "../actions/index";
import { Link } from 'react-router';


class Posts extends Component {

    componentWillMount() {
        //console.log('CALL ACTION CREATOR TO FETCH POSTS');
        this.props.fetchPosts();
    }
    //React automatically calls componentWillMount() whenever a component
    //is about to be rendered to the DOM for first time
    //componentWillMount() is only called once
    //and never called on subsequent re-renders

    render() {
        return (
            <div>
                <div className="text-xs-right">
                    <Link to="posts/new" className="btn btn-primary">
                        Add a Post
                    </Link>
                </div>
                List of blog posts
            </div>
        );
    }

// function mapDispatchToProps(dispatch) {
//     return bindActionCreators({fetchPosts }, dispatch);
    //the 2 lines above being replaced with { fetchPosts: fetchPosts }
    //that can also be changed to just { fetchPosts }

}

export default connect(null, { fetchPosts })(Posts);


//<Link above creates a button and routes to posts/new page