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
  upset() {
    return service.post(perfix+'/group/upsert')
  },
  // /services/infoUnit/upsert
  
  infoUnitUpset() {
    return service.post(perfix+'/infoUnit/upsert')
  },

  // /services/rules/upsert

  rulesUpsert(){
    return service.post(perfix+'/rules/upsert')
  },

  ///services/event/upsert

  eventUpsert(){
    return service.post(perfix+'/event/upsert')
  }

}

export default services
