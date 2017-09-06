// More Objects Lab

var recipes = {}

function updateObjectWithKeyAndValue(object, key, value){

    return Object.assign({}, object, {[key]: value })
}
function destructivelyUpdateObjectWithKeyAndValue(object, key, value){

  object[key] = value
    return object
}
function deleteFromObjectByKey(object, key){

  var obj = { object: key}
  var newObj = Object.assign({}, obj)

  delete newObj.key
    return newObj

}
function destructivelyDeleteFromObjectByKey(object, key){

  var obj = { object: key }
  var newObj = obj

  delete obj.key
    return newObj

}
