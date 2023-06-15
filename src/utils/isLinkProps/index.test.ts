import { isLinkProps } from '.';

describe('isLinkProps', () => {
  it('Should return false', () => {
    expect(isLinkProps({ label: 'hello' })).toEqual(false);
  });

  it('Should return true', () => {
    expect(isLinkProps({ href: '/go' })).toEqual(true);
  });

  it('Should return true', () => {
    expect(isLinkProps({ href: '' })).toEqual(true);
  });

  it('Should return false', () => {
    expect(isLinkProps({ href: undefined })).toEqual(false);
  });
});
