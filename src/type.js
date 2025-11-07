export const comparison = (object1, object2) => {
  const objKey1 = Object.keys(object1);
  const objKey2 = Object.keys(object2);
  let counter = 0;
  let counter2 = 0;
  if (objKey1.length !== objKey2.length) {
    return false;
  }
  if (objKey1.length === 0 && objKey2.length === 0) {
    return true;
  }
  for (let i = 0; i < objKey1.length; i++) {
    if (objKey2.includes(objKey1[i]) && object1[objKey1[i]] === object2[objKey1[i]]) {
      counter += 1;
    }
  }
  for (let i = 0; i < objKey2.length; i++) {
    if ((objKey1.includes(objKey2[i]) && object2[objKey2[i]]) === object1[objKey2[i]]) {
      counter2 += 1;
    }
  }

  return counter === counter2;
};
