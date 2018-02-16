import React, {Component, PropTypes} from 'react';
import {reduxForm} from 'redux-form';
import {createPost} from "../actions/index";
import {Link} from 'react-router';

class PostsNew extends Component {
    static contextTypes = {
        router: PropTypes.object
        //contextTypes gives access to React Router
    };

    onSubmit(props) {
        this.props.createPost(props)
            .then(() => {
   //blog post has been created, navigate the user to the index
  //we navigate by calling this.context.push with the new path to navigate to
    this.context.router.push('/');
       });
    }

    render() {
        //const handleSubmit = this.props.handleSubmit
        const { fields: { title, categories, content },  handleSubmit } = this.props;
        //const title = this.props.fields.title
        //call handleSubmit when form wants to submit itself

        //console.log(title);

        return (
            <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
                <h3> Create A New Post</h3>
                <div className={`form-group ${title.touched && title.invalid ? 'has-danger' : ''}`}>
                    {/*'has-danger' adds red color to validation text if no value inputted*/}
                    <label>Title</label>
                    <input type="text" className="form-control" {...title} />
                    {/* {...title} means destructuring object */}
                    <div className="text-help">
                        {title.touched ? title.error : ''}
                        {/*touched validates if user clicked into input box*/}
                    </div>
                </div>

                <div className={`form-group ${categories.touched && categories.invalid ? 'has-danger' : ''}`}>
                    <label>Categories</label>
                    <input type="text" className="form-control" {...categories} />
                    <div className="text-help">
                        {categories.touched ? categories.error : ''}
                    </div>
                </div>

                <div className={`form-group ${content.touched && content.invalid ? 'has-danger' : ''}`}>
                    <label>Content</label>
                    <textarea className="form-control" {...content} />
                    <div className="text-help">
                        {content.touched ? content.error : ''}
                    </div>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
                <Link to="/" className="btn btn-danger">Cancel</Link>
            </form>
        );
    }
}

//validate that user inputs content into input boxes
function validate(values) {
    const errors = {};

    if(!values.title) {
        errors.title = 'Enter a username';
    }

    if(!values.categories) {
        errors.categories = 'Enter categories';
    }

    if(!values.content) {
        errors.content = 'Enter content';
    }

    return errors;

    
}



//connect: first argument is mapStateToProps, second is mapDispatchToProps
//reduxForm: first arg is form config, second arg is mapStateToProps,
//third arg is mapDispatchToProps

export default reduxForm({
 form: 'PostsNewForm',
 fields: ['title', 'categories', 'content'],
    validate
},null, { createPost }) (PostsNew);

//reduxForm works similar to connect
//behind the scenes redux-form records information that user puts in fields
// state === {
//     form: {
//         PostsNewForm: {
//             title: '....record content',
//             categories: '....record content',
//             content: '.... record content'
//         }
//     }
// }