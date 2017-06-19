const basePath = '/assets/img/navbar'

const concatPath = imgName => `${basePath}/${imgName}.svg`

const imgNames = ['dashboard', 'explore', 'inbox', 'messaging', 'activity', 'account']

const imgNamesObj = imgNames.map(imgName =>
  ({ path: concatPath(imgName), alt: imgName })
)

export default imgNamesObj
