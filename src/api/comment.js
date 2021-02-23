import request  from '@/utils/request'

export function getComment(data){
  return request({
      url:'/get_info',
      data
  })
}

// 获取商品列表
export function getProdById(data){
  return request({
      url:'/get_nav',
      data
  })
}
