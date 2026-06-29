
function combineUsers(...args){
  return args.flat

  let combinedObject= {
    users: []
  };

  for(let i=0;i<args.length;i++){
    let currentArray = args[i]
  }
  
  combinedObject.users.push (...combineUsers)
  combinedObject.merge_date( Date.today().toString('M/d/yyyy'))
  
  return combinedObject;
}

module.exports = {
  ...(typeof combineUsers !== 'undefined' && { combineUsers })
}