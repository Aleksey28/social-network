export const updateObjectInArray = ( arr, keyId, valueId, newProps ) => {
  return arr.map( item => item[keyId] === valueId ? { ...item, ...newProps } : item );
};
