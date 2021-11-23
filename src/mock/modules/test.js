import Mock from 'mockjs'

export default {
  type: 'get',
  callback: opt => {
    const data = Mock.mock({
    // 10条数据
      'list|10': [
        {
          vin: 'LBV2Y3102JMH90@string("number", 3)',
          'brand|+1': ['上汽大众', '小鹏', '威马', '吉利', '保时捷', '广汽本田', '宇通客车'],
          'carType|+1': ['2021运动耀夜版', '2021运动至尊版', '2022极致体验版', '2021蓝色精灵版', '2021运动基础版', '2021尊享版'],
          carCode: '@string("upper",3)-@string("number", 2)',
          'carYear|+1': [2021, 2022, 2020],
          'chartCount|200-800': 514,
          'chartTime|100-400': 327,
          'chartTotal|3902-999999': 32000,
          'batterySOC|10-100': 33,
          carPosition: '杭州市上城区机场路与得胜快速路交叉口东100米'
        }
      ],
      total: 100
    })
    return data
  }
}
