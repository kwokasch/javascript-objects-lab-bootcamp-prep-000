var recipes = new Object({})

var obj = { prop: 1}

function updateObjectWithKeyAndValue(object, key, value){
  return Object.assign({}, obj, {[key]: value})
}

function destructivelyupdateObjectWithKeyAndValue(object, key, value){
  obj.key = 'value'
  return obj
}