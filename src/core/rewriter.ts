export let EXTRACT_IMAGE_ID = /^(?:https?:)?(?:\/\/)[^\/]+\.(?:com|net|org)\/.*\/(\d+)\.[a-z]+$/
export let EXTRACT_IMAGE_ID_TEST = (text: string) => EXTRACT_IMAGE_ID.test(text)

export let rewriteLinks = (lineList: string[]) => {
   return lineList.filter(EXTRACT_IMAGE_ID_TEST).map((line) => {
      let imageId = line.replace(EXTRACT_IMAGE_ID, '$1')
      return `<https://derpibooru.org/images/${imageId}>`
   })
}

export let rewriteText = (text: string) => {
   let lineList = text.split('\n')

   let linkList = rewriteLinks(lineList)

   return `${[...linkList, ...lineList].join('\n')}`
}
