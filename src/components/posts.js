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

    renderPosts() {
        return this.props.posts.map((post) => {
            return (
                <li className="list-group-item" key={post.id}>
                    <Link to={"posts/" + post.id}>
                    <span className="pull-xs-right">{post.categories}</span>
                    <strong>{post.title}</strong>
                    </Link>
                </li>
            );
        });
    }

    render() {
        return (
            <div>
                <div className="text-xs-right">
                    <Link to="posts/new" className="btn btn-primary">
                        Add a Post
                    </Link>
                </div>
                <h3>Posts</h3>
                <ul className="list-group">
                    {this.renderPosts()}
                </ul>
            </div>
        );
    }

// function mapDispatchToProps(dispatch) {
//     return bindActionCreators({fetchPosts }, dispatch);
    //the 2 lines above being replaced with { fetchPosts: fetchPosts }
    //that can also be changed to just { fetchPosts }

}

function mapStateToProps(state) {
    return { posts: state.posts.all};
}

export default connect(mapStateToProps, { fetchPosts })(Posts);


//<Link above creates a button and routes to posts/new page