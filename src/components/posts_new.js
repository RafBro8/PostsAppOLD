import React, { Component } from 'react';
import { reduxForm } from 'redux-form';

class PostsNew extends Component {
    render() {
        //const handleSubmit = this.props.handleSubmit
        const { fields: { title, categories, content },  handleSubmit } = this.props;
        //const title = this.props.fields.title
        //call handleSubmit when form wants to submit itself

        console.log(title);

        return (
            <form onSubmit={handleSubmit}>
                <h3> Create A New Post</h3>
                <div className="form-group">
                    <label>Title</label>
                    <input type="text" className="form-control" {...title} />
                    {/* {...title} means destructuring object */}
                </div>

                <div className="form-group">
                    <label>Categories</label>
                    <input type="text" className="form-control" {...categories} />
                </div>

                <div className="form-group">
                    <label>Content</label>
                    <textarea className="form-control" {...content} />
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        );
    }
}

export default reduxForm({
 form: 'PostsNewForm',
 fields: ['title', 'categories', 'content']
}) (PostsNew);

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