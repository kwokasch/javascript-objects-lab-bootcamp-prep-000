var recipes = new Object({})

var obj = { prop: 1}

var newObj = Object.assign({}, obj)

var newObj = destructivelyDeleteFromObjectByKey(obj, 'prop');

function updateObjectWithKeyAndValue(object, key, value){
  return Object.assign({}, obj, {[key]: value})
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value){
  object[key] = value
  return object
}

function deleteFromObjectByKey(object, key){
  delete newObj.prop;
  return newObj
}

function destructivelyDeleteFromObjectByKey(object, key) {
  delete obj.prop;
  return obj
}