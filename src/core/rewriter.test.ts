import { rewriteLinks, rewriteText } from './rewriter'

import test from 'ava'

// registerSuite('rewriterLinks', {
test('rewriteLinks run', (t) => {
   t.notThrows(() => rewriteLinks([]))
})

test('rewriteLinks skip non-link lines', (t) => {
   t.deepEqual(
      rewriteLinks(['hello', "http:I'm not a link", 'A full sentence.']),
      [],
   )
})

test('skip unrecognized links', (t) => {
   t.deepEqual(
      rewriteLinks(['a.net/hello', 'b.net/img.png', 'c.net/a/123/ok.png']),
      [],
   )
})

test('convert recognized links, preserving order', (t) => {
   t.deepEqual(
      rewriteLinks([
         'https://derpicdn.net/img/view/2020/3/20/2301856.png',
         'https://derpicdn.net/img/view/2020/3/20/2301824.png',
      ]),
      [
         '<https://derpibooru.org/images/2301856>',
         '<https://derpibooru.org/images/2301824>',
      ],
   )
})

test('rewriterText run', (t) => {
   t.notThrows(() => rewriteText(''))
})

test('rewriterText work', (t) => {
   t.is(
      rewriteText(`
Hello!

https://derpicdn.net/img/view/2020/3/20/2301856.png
      `),
      `<https://derpibooru.org/images/2301856>

Hello!

https://derpicdn.net/img/view/2020/3/20/2301856.png
      `,
   )
})
