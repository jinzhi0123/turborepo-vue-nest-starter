import antfu from '@antfu/eslint-config';
import { rules as baseRules } from './base.js';

/**
 * @type {import("@antfu/eslint-config").Rules}
 */
export const rules = {
  ...baseRules,
  'no-console': 'off',
};

export const config = antfu({
  formatters: true,
  rules: rules
})
