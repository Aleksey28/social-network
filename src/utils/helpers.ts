export const updateObjectInArray = ( arr: Array<any>, keyId: string, valueId: string, newProps: any ) => {
  return arr.map( item => item[keyId] === valueId ? { ...item, ...newProps } : item );
};
