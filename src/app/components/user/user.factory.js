let UserFactory = function () {
  const user = {};

  return {
  	getUser,
  	isSignedIn
  };

  function getUser() {
    return user;
  }

  function isSignedIn() {
    return user.isSignedIn;
  }
};

export default UserFactory;
