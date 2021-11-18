import { parse } from './'

const equal = (a: any, b: any) => {
  expect(a).toEqual(b)
}

test('simple', () => {
  equal(parse('foo'), {
    name: 'foo',
    version: 'latest',
    path: '',
  })

  equal(parse('foo/bar.js'), {
    name: 'foo',
    version: 'latest',
    path: '/bar.js',
  })

  equal(parse('foo@1.0.0/bar.js'), {
    name: 'foo',
    version: '1.0.0',
    path: '/bar.js',
  })

  equal(parse('@egoist/foo'), {
    name: '@egoist/foo',
    version: 'latest',
    path: '',
  })

  equal(parse('@egoist/foo/bar/baz.js'), {
    name: '@egoist/foo',
    version: 'latest',
    path: '/bar/baz.js',
  })

  equal(parse('@egoist/foo@1.0.0'), {
    name: '@egoist/foo',
    version: '1.0.0',
    path: '',
  })

  equal(parse('@egoist/foo@1.0.0/foo/bar.js'), {
    name: '@egoist/foo',
    version: '1.0.0',
    path: '/foo/bar.js',
  })
})
