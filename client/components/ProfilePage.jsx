import React, {Component, PropTypes} from 'react';

const mapStateToProps = (state) => {
  return {
    user: state.user;
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    updateUserInfo: function(info) {
      // info needs to be an object
      $.put('/updateUserInfo', info)
      .done(function () {
        dispatch()
      })
    }
  }
}

const ProfilePage = () => (
  <div>
    <UserInfo />
    <VideoList />
  </div>
  )