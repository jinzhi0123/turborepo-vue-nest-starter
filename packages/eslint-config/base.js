import js from '@eslint/js';
import eslintConfigPrettier from 'eslint-config-prettier';
import turboPlugin from 'eslint-plugin-turbo';
import tseslint from 'typescript-eslint';
import onlyWarn from 'eslint-plugin-only-warn';
import antfu from '@antfu/eslint-config';

/**
 * @type {import("@antfu/eslint-config").Rules}
 */
export const rules = {};


export const config = antfu({
  type: 'lib',
  vue: false,
  formatters: true,
  rules: rules,
});
