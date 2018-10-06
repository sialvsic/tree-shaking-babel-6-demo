import { isArray } from 'lodash-es';

export function array(array) {
  console.log('isArray');
  return isArray(array);
}

export function Add(a, b) {
  console.log('Add');
  return a + b
}
