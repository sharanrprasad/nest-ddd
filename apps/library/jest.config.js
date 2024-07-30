const { compilerOptions } = require('../../tsconfig.json');

const { pathsToModuleNameMapper } = require('ts-jest');

module.exports = {
  preset: '@repo/jest-presets/node',
  moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths, {
    prefix: '<rootDir>/../../',
  }),
};
