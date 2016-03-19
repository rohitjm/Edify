import React, {Component, PropTypes} from 'react';
import {reduxForm} from 'redux-form';
export const fields = ['title', 'mentor'];


class SearchBar extends Component {
  static propTypes = {
    fields: PropTypes.object.isRequired,
    handleSubmit: PropTypes.func.isRequired,
    resetForm: PropTypes.func.isRequired,
    submitting: PropTypes.bool.isRequired
  };

  render() {

    const {
      fields: {title, mentor},
      handleSubmit,
      resetForm,
      submitting
      } = this.props;

    return (
      <form onSubmit={handleSubmit}>
       
        <div>
          <label>Title</label>
          <div>
            <input type="text" placeholder=" Title" {...title}/>
          </div>
        </div>
        <div>
          <label>Mentor</label>
          <div>
            <input type="text" placeholder="Mentor" {...mentor}/>
          </div>
        </div>
        <div>
          <button type="submit" disabled={submitting}>
            {submitting ? <i/> : <i/>} Submit
          </button>
          <button type="button" disabled={submitting} onClick={resetForm}>
            Clear Values
          </button>
        </div>
      </form>

    );
  }
}

export default reduxForm({
  form: 'simple',
  fields
})(SearchBar);

