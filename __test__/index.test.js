const parse = require('../')

test('full', () => {
  const pkg = parse('@angular/core/dist/angular.min.js@^1.2.0')
  expect(pkg).toEqual({
    name: '@angular/core',
    path: 'dist/angular.min.js',
    version: '^1.2.0'
  })
})

test('scope and version', () => {
  const pkg = parse('@angular/core@1.2')
  expect(pkg).toEqual({
    name: '@angular/core',
    version: '1.2',
    path: ''
  })
})

test('scope and path', () => {
  const pkg = parse('@angular/core/dist/angular.js')
  expect(pkg).toEqual({
    name: '@angular/core',
    path: 'dist/angular.js',
    version: ''
  })
})

test('only name', () => {
  const pkg = parse('promise.series')
  expect(pkg).toEqual({
    name: 'promise.series',
    version: '',
    path: ''
  })
})

test('name and version', () => {
  const pkg = parse('vue@^1.3.0')
  expect(pkg).toEqual({
    name: 'vue',
    version: '^1.3.0',
    path: ''
  })
})

test('name and path', () => {
  const pkg = parse('vue/dist/vue.js')
  expect(pkg).toEqual({
    name: 'vue',
    version: '',
    path: 'dist/vue.js'
  })
})

test('name and path and version', () => {
  const pkg = parse('vue/dist/vue.js@^2.0.0')
  expect(pkg).toEqual({
    name: 'vue',
    version: '^2.0.0',
    path: 'dist/vue.js'
  })
})
