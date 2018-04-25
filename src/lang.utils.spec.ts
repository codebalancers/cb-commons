import { LangUtils } from './lang.utils';

describe('LangUtils', () => {
  it('null should not be defined', () => {
    const testVar = null;
    expect(LangUtils.isDefined(testVar)).toBeFalsy();
  });

  it('undefined should not be defined', () => {
    const testVar = undefined;
    expect(LangUtils.isDefined(testVar)).toBeFalsy();
  });

  it('an empty string should be defined', () => {
    const testVar = '';
    expect(LangUtils.isDefined(testVar)).toBeTruthy();
  });

  it('null should be undefined', () => {
    const testVar = null;
    expect(LangUtils.isUndefined(testVar)).toBeTruthy();
  });

  it('undefined should be undefined', () => {
    const testVar = undefined;
    expect(LangUtils.isUndefined(testVar)).toBeTruthy();
  });

  it('an empty string should not be undefined', () => {
    const testVar = '';
    expect(LangUtils.isUndefined(testVar)).toBeFalsy();
  });

  it('two undefined values should be undefined', () => {
    const testVar = '';
    expect(LangUtils.isUndefined(null, undefined)).toBeTruthy();
  });

  it('one undefined value and one defined value should be undefined', () => {
    const testVar = '';
    expect(LangUtils.isUndefined('hello', undefined)).toBeTruthy();
  });

  it('two defined values should be defined', () => {
    const testVar = '';
    expect(LangUtils.isUndefined('hello', 'you')).toBeFalsy();
  });

  it('null should not be an array', () => {
    const testVar = null;
    expect(LangUtils.isArray(testVar)).toBeFalsy();
  });

  it('empty array should be an array', () => {
    const testVar = [];
    expect(LangUtils.isArray(testVar)).toBeTruthy();
  });

  it('filled array should be an array', () => {
    const testVar = [1];
    expect(LangUtils.isArray(testVar)).toBeTruthy();
  });

  it('string should not be an array', () => {
    const testVar: any = '';
    expect(LangUtils.isArray(testVar)).toBeFalsy();
  });
});
