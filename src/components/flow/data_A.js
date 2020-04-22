var data_A = {
  name: '流程A',
  nodeList: [
    {
      id: 'nodeA',
      name: '流程A-节点A',
      type: 'task',
      left: '26px',
      top: '161px',
      ico: 'el-icon-thumb',
      show: true
    },
    {
      id: 'nodeB',
      name: '流程A-节点B',
      type: 'task',
      left: '340px',
      top: '161px',
      ico: 'el-icon-thumb',
      show: true
    },
    {
      id: 'nodeC',
      name: '流程A-节点C',
      type: 'end',
      left: '739px',
      top: '161px',
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

export function getDataA() {
  return data_A
}
