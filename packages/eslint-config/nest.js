import { rules as baseRules, config as baseConfig } from './base.js';

/**
 * @type {import("@antfu/eslint-config").Rules}
 */
export const rules = {
  'no-console': 'off',
  'ts/no-explicit-any': 'off',
  'ts/consistent-type-imports':
    ['error', {
      'prefer': 'no-type-imports'
    }],
  'ts/explicit-function-return-type': 'off'
};

export const config = baseConfig.append([
  {
    rules: rules,
  }
])


// rules: {
//   '@typescript-eslint/interface-name-prefix': 'off',
//   '@typescript-eslint/explicit-function-return-type': 'off',
//   '@typescript-eslint/explicit-module-boundary-types': 'off',
//   '@typescript-eslint/no-explicit-any': 'off',
// },
