var data_A = {
  name: '流程A',
  nodeList: [
    {
      id: 'nodeA',
      name: '节点A',
      expression:'',
      type: 'rule',
      left: '26px',
      top: '161px',
      ico: 'el-icon-thumb',
      show: true
    },
    {
      id: 'nodeB',
      name: '规则B',
      expression:'',
      type: 'task',
      left: '340px',
      top: '161px',
      ico: 'el-icon-data-analysis',
      show: true
    },
    {
      id: 'nodeC',
      name: '事件C',
      expression:'',
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
