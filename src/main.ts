import { init } from './page/init'
import { rewriteText } from './core/rewriter'
import { delayed } from './util/delayed'

export let main = async () => {
   let { outputArea, inputArea } = init()

   let handleChange = () => {
      outputArea.core.value = rewriteText(inputArea.core.value)
   }

   inputArea.core.addEventListener('keydown', handleChange, true)
   inputArea.core.addEventListener('keydown', delayed(handleChange), true)
   inputArea.core.addEventListener('keydown', delayed(handleChange, 5), true)
   inputArea.core.addEventListener('keyup', handleChange, true)
   inputArea.core.addEventListener('change', handleChange, true)
}
