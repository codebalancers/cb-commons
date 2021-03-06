/**
 * This class collects static methods that help with arrays
 */
import { LangUtils } from './lang.utils';

export class ArrayUtils {

  /**
   * Remove all occurrences of the specified value from the specified array. If the value cannot be found in the array,
   * the array remains unchanged.
   *
   * @param {T[]} array the is going to be changed
   * @param {T} value that is removed from the array
   * @return {number} number of removed elements
   */
  public static removeElement<T>(array: T[], value: T): number {
    if (LangUtils.isUndefined(array, value)) {
      return 0;
    }

    let ret = 0;

    let index: number;
    while ((index = array.indexOf(value)) !== -1) {
      array.splice(index, 1);
      ret++;
    }

    return ret;
  }

  public static removeElementAtPosition<T>(array: T[], index: number): void {
    if (LangUtils.isUndefined(array)) {
      return;
    }

    array.splice(index, 1);
  }

  public static removeLastElement<T>(array: T[]): void {
    array.splice(array.length - 1, 1);
  }

  public static getFirstElement<T>(array: T[]): T {
    if (LangUtils.isDefined(array) && array.length > 0) {
      return array[ 0 ];
    }
  }

  public static getLastElement<T>(array: T[]): T {
    if (LangUtils.isDefined(array) && array.length > 0) {
      return array[ array.length - 1 ];
    }
  }

  public static getElement<T>(array: T[], index: number, infinite: boolean = false): T {
    if (LangUtils.isDefined(array) && array.length > 0) {
      if (infinite === true) {
        if (index < 0) {
          return array[ index % array.length + array.length ];
        } else {
          return array[ index % array.length ];
        }
      }

      if (index >= 0 && index < array.length) {
        return array[ index ];
      }
    }
  }

  public static pushIfNotPresent<T>(array: T[], ...elems: T[]): void {
    if (LangUtils.isUndefined(array)) {
      return;
    }

    elems.forEach(elem => {
      const existing = array.find(e => e === elem);
      if (LangUtils.isUndefined(existing)) {
        array.push(elem);
      }
    });
  }

  /**
   * The specified array is specified and not empty.
   *
   * @param {any[]} array
   * @returns {boolean}
   */
  public static isNotEmpty(array: any[]): boolean {
    return LangUtils.isDefined(array) && array.length > 0;
  }

  /**
   * The specified array is specified and empty.
   *
   * @param {any[]} array
   * @returns {boolean}
   */
  public static isEmpty(array: any[]): boolean {
    return LangUtils.isDefined(array) && array.length === 0;
  }

  /**
   * The specified array is empty or undefined/null.
   *
   * @param {any[]} array
   * @returns {boolean}
   */
  public static isEmptyOrUndefined(array: any[]): boolean {
    return !this.isNotEmpty(array);
  }

  /**
   * Remove duplicated element from an array that share an identical property. The first occurrence will be kept.
   * E.g. const array = [ {key: 1, val: 'a'}, {key: 1, val: 'b'}, {key: 2, val: 'a'} ] can be filtered
   * filterUnique(array, e => e.key) and will result in the array [ {key: 1, val: 'a'}, {key: 2, val: 'a'} ]
   *
   * @param {T[]} array initial array with duplicates
   * @param {(arrayElem: T) => any} retrieval function to get the property that will be used as unique key
   * @return {T[]} the filtered array
   */
  public static filterUnique<T>(array: T[], retrieval: (arrayElem: T) => any): T[] {
    const existingKeys: any[] = [];

    return array.filter(f => {
      const key = retrieval(f);
      if (existingKeys.indexOf(key) === -1) {
        existingKeys.push(key);
        return true;
      } else {
        return false;
      }
    });
  }

  /**
   * If specified array is undefined, an empty array will be returned. Otherwise, the original array is returned.
   *
   *  @param array to be tested
   *  @return the original array or an empty array
   */
  public static ensure<T>(array: T[]): T[] {
    if (LangUtils.isArray(array)) {
      return array;
    }
    return [];
  }
}
