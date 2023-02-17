module.exports = {
  ...jest.requireActual('@apollo/client'),
  useApolloClient: () => null,
  useReactiveVar: jest.fn(),
};
