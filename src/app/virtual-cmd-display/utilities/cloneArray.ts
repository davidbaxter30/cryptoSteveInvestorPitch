export const cloneArray = (existingArray): any[] => {
  var newObj = [];
  for (let i in existingArray) {
     if (i == 'clone') continue;
     if (existingArray[i] && typeof existingArray[i] == "object") {
        newObj[i] = this.cloneArray(existingArray[i]);
     } else {
        newObj[i] = existingArray[i]
     }
  }
  return newObj;
}