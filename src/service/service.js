/*
 * @Description: sider menu
 * @Version: 2.0
 * @Autor: Ling Long
 * @Date: 2020-01-21 10:29:31
 * @LastEditors  : Ling Long
 * @LastEditTime : 2020-01-21 11:16:23
 */
import service from './requests/httpService'

const perfix = "http://localhost:8002/services"

const services = {
  // /group/upsert
  // 第一页 新建
  upset(d) {
    return service.post(perfix+'/group/upsert',d)
  },
  // /services/infoUnit/upsert
  
  infoUnitUpset(d) {
    return service.post(perfix+'/infoUnit/upsert',d)
  },

  // /services/rules/upsert

  rulesUpsert(d){
    return service.post(perfix+'/rules/upsert',d)
  },

  ///services/event/upsert

  eventUpsert(d){
    return service.post(perfix+'/event/upsert',d)
  }

}

export default services
