import { addAlpha } from '.';

describe('addAlpha', () => {
  it('Should return rgba value', () => {
    expect(addAlpha('#ffffff', 0.5)).toEqual('rgba(255,255,255,0.5)');
  });

  it('Should throw error when format is incorrect', () => {
    expect(() => addAlpha('#fff', 0.5)).toThrowError(
      'Incorrect hexadecimal value, expects #000000 format',
    );
  });
});
