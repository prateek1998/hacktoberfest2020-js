//Function inside a function that have access to the outer function variables
exports.admin = {
    name: "Solver",
    check (){
        console.log(name)
    }
  };