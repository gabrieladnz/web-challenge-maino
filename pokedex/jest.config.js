module.exports = {
  preset: '@vue/cli-plugin-unit-jest/presets/typescript-and-babel',
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
    /** possibilitando realizar os testes dentro de pages */
    '^@/pages/(.*)$': '<rootDir>/src/pages/$1'
  }
}
