var UserProfileFunction = (function() {
    var full_name = "";
    var full_id = "";
  
    var getName = function() {
      return full_name;    // Or pull this from cookie/localStorage
    };
  
    var setName = function(name) {
      full_name = name;     
      // Also set this in cookie/localStorage
    };

    var getId = function() {
        return full_id;    // Or pull this from cookie/localStorage
      };
    
      var setId = function(id) {
        full_id = id;     
        // Also set this in cookie/localStorage
      };
  
    return {
      getName: getName,
      setName: setName,
      getId: getId,
      setId: setId
    }
  
  })();
  
  export default UserProfileFunction;