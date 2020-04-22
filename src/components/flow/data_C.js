var dataC = {
  name: '流程C',
  nodeList: [
    {
      id: 'nodeA',
      name: '流程C-节点A',
      type: 'task',
      left: '400px',
      top: '15px',
      ico: 'el-icon-thumb',
      show: true
    },
    {
      id: 'nodeB',
      name: '流程C-节点B',
      type: 'task',
      left: '400px',
      top: '200px',
      ico: 'el-icon-thumb',
      show: true
    },
    {
      id: 'nodeC',
      name: '流程C-节点C',
      type: 'task',
      left: '400px',
      top: '378px',
      ico: 'el-icon-finished',
      show: true
    }
  ],
  lineList: [
    {
      from: 'nodeA',
      to: 'nodeB'
    },
    {
      from: 'nodeB',
      to: 'nodeC'
    }
  ]
}

export function getDataC() {
  return dataC
}
