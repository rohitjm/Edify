import React, {Component, PropTypes} from 'react';
import {reduxForm} from 'redux-form';
export const fields = ['firstName', 'lastName'];


class SearchBar extends Component {
  static propTypes = {
    fields: PropTypes.object.isRequired,
    handleSubmit: PropTypes.func.isRequired,
    resetForm: PropTypes.func.isRequired,
    submitting: PropTypes.bool.isRequired
  };

  render() {
    const {
      fields: {firstName, lastName},
      handleSubmit,
      resetForm,
      submitting
      } = this.props;
     
    return (<form onSubmit={handleSubmit}>
        <div>
          <label>First Name</label>
          <div>
            <input type="text" placeholder="First Name" {...firstName}/>
          </div>
        </div>
        <div>
          <label>Last Name</label>
          <div>
            <input type="text" placeholder="Last Name" {...lastName}/>
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

// import React, {Component, PropTypes} from 'react';
// import {reduxForm} from 'redux-form';

// export const fields = ['titles', 'mentor'];

// export default class SearchBar extends Component {

//   static propTypes = {
//     fields: PropTypes.object.isRequired,
//     handleSubmit: PropTypes.func.isRequired,
//     submitting: PropTypes.bool.isRequired
//   };
//   render(){
//       const {
//         fields = {titles, mentor },
//         handleSubmit,
//         submitting
//       } = this.props;

//      return (<form onSubmit={handleSubmit}>
//       <div>
//         <label>Title</label>
//         <div>
//           <input type="text" placeholder="Title" {...titles}/>
//         </div>
//       </div>
//       <div>
//         <label>Mentor</label>
//         <div>
//           <input type="text" placeholder="Mentor" {...mentor}/>
//         </div>
//       </div>
//       <div>
//       <button type="submit" disabled={submitting}>
//         {submitting ? <i/> : <i/>} Submit
//       </button>
//       </div>
//       </form>
       

  	  // <div>
     //   <form className="searchForm">
     //        <input className="searchInput"  placeholder="Title"/>
     //        <input className="searchInput"  placeholder="Mentor" />
     //    <button>
     //    Submit
     //    </button>
     //    </form>

  	  // </div>
//   	);
//   }
// }
// export default reduxForm({
//   form: 'simple',
//   fields
// })(SearchBar);
