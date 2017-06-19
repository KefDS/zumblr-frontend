const actions = ['text', 'photo', 'quote', 'link', 'chat', 'audio', 'video']

const basePath = '/assets/img/new-post'

const concat = imgName => `${basePath}/${imgName}.svg`

const actionsObj = actions.map(action => (
  { path: concat(action), cssClass: `new-post__icon-${action}`, alt: action }
))

export default actionsObj
