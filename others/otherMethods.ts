import { SimpleTypes, SimpleTypesObj } from '@Declarations';

// --------Search-------------
/** Search if value is inside the Array<RandObj> at de specified key */
export function includesValue(
  value: SimpleTypes,
  array: Array<SimpleTypesObj>,
  specifiedKey: string
): boolean {
  for (let i = 0; i < array.length; i++) {
    const element = array[i];
    if (element[specifiedKey] === value) {
      return true;
    }
  }
  return false;
}

export default null;
