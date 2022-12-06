import type { JestConfigWithTsJest } from 'ts-jest'
import { pathsToModuleNameMapper } from 'ts-jest'

import { compilerOptions } from '../tsconfig.json'

const jestCommonConfig: JestConfigWithTsJest = {
  moduleDirectories: ['node_modules', __dirname],
  moduleFileExtensions: ['ts', 'js', 'json'],
  moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths, {
    prefix: '<rootDir>/',
  }),
  preset: 'ts-jest',
  rootDir: '..',
}

export default jestCommonConfig
