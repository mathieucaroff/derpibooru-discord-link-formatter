import { h } from './lib/hyper'

let makeTextareaSection = () => {
   let core = h('textarea', { className: 'textareaSectionCore' })
   let root = h('div', {}, [core])

   return {
      core,
      root,
   }
}

export let init = () => {
   let inputArea = makeTextareaSection()

   let outputArea = makeTextareaSection()

   let pageDiv = h('div', {}, [
      h('h1', {
         textContent: 'Derpibooru/Discord Link Formatter',
      }),
      inputArea.root,
      outputArea.root,
   ])

   document.body.appendChild(pageDiv)

   return { outputArea, inputArea }
}
