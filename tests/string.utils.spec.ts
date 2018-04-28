import { StringUtils } from '../src/string.utils';

describe('StringUtils', () => {
  // -- test blank
  it('null should not be not blank', () => {
    const testVar: string = null;
    expect(StringUtils.isNotBlank(testVar)).toBeFalsy();
  });

  it('null should be blank', () => {
    const testVar: string = null;
    expect(StringUtils.isBlank(testVar)).toBeTruthy();
  });

  it('empty string should not be not blank', () => {
    const testVar = '';
    expect(StringUtils.isNotBlank(testVar)).toBeFalsy();
  });

  it('empty string should be blank', () => {
    const testVar = '';
    expect(StringUtils.isBlank(testVar)).toBeTruthy();
  });

  it('filled string should be not blank', () => {
    const testVar = 'test';
    expect(StringUtils.isNotBlank(testVar)).toBeTruthy();
  });

  it('filled string should not be blank', () => {
    const testVar = 'test';
    expect(StringUtils.isBlank(testVar)).toBeFalsy();
  });

  it('blank string should not be not blank', () => {
    const testVar = ' ';
    expect(StringUtils.isNotBlank(testVar)).toBeFalsy();
  });

  it('blank string should be blank', () => {
    const testVar = ' ';
    expect(StringUtils.isBlank(testVar)).toBeTruthy();
  });

  // -- test empty
  it('null string should be empty', () => {
    const testVar = null;
    expect(StringUtils.isEmpty(testVar)).toBeTruthy();
  });

  it('null string should not be not empty', () => {
    const testVar = null;
    expect(StringUtils.isNotEmpty(testVar)).toBeFalsy();
  });

  it('empty string should be empty', () => {
    const testVar = '';
    expect(StringUtils.isEmpty(testVar)).toBeTruthy();
  });

  it('empty string should not be not empty', () => {
    const testVar = '';
    expect(StringUtils.isNotEmpty(testVar)).toBeFalsy();
  });

  it('filled string should not be empty', () => {
    const testVar = 'test';
    expect(StringUtils.isEmpty(testVar)).toBeFalsy();
  });

  it('filled string should be not empty', () => {
    const testVar = 'test';
    expect(StringUtils.isNotEmpty(testVar)).toBeTruthy();
  });

  // -- test capitalizeFirstLetter
  it('capitalize t should be T', () => {
    const testVar = 'test';
    expect(StringUtils.capitalizeFirstLetter(testVar)).toBe('Test');
  });

  it('capitalize T should be T', () => {
    const testVar = 'Test';
    expect(StringUtils.capitalizeFirstLetter(testVar)).toBe('Test');
  });

  it('capitalize empty letter should be empty', () => {
    const testVar = ' test';
    expect(StringUtils.capitalizeFirstLetter(testVar)).toBe(' test');
  });

  it('fallback to first available', () => {
    expect(StringUtils.fallbackIfBlank('hello', 'a', 'b')).toBe('hello');
    expect(StringUtils.fallbackIfBlank(null, 'a', 'b')).toBe('a');
    expect(StringUtils.fallbackIfBlank(null, undefined, 'b')).toBe('b');
    expect(StringUtils.fallbackIfBlank(' ', undefined, null)).toBe(null);
  });
});
