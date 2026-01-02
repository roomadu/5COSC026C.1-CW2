// jest.setup.cjs
require('@testing-library/jest-dom'); // adds custom matchers like toBeInTheDocument

const { TextEncoder, TextDecoder } = require('util');

global.TextEncoder = TextEncoder;
global.TextDecoder = TextDecoder;
