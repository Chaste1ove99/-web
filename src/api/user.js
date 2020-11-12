import request from '@/utils/request'

/**
 * 获取用户信息
 */
export const getSubCount = () => {
  return request({
    method: 'GET',
    url: '/user/subcount'
  })
}
/**
 * 获取我喜欢的音乐
 */
export const getlikelist = userID => {
  return request({
    method: 'GET',
    url: '/likelist',
    params: {
      uid: userID
    }
  })
}
/**
 * 获取用户歌单
 */
export const userPlayList = userID => {
  return request({
    method: 'GET',
    url: '/user/playlist',
    params: {
      uid: userID,
      limit: 20
    }
  })
}

/**
 * 获取用户详情
 */
export const getUserDetail = userID => {
  return request({
    method: 'GET',
    url: '/user/detail',
    params: {
      uid: userID
    }
  })
}

/**
 * 收藏/喜欢音乐
 */
export const toggerlike = (id, like) => {
  return request({
    method: 'POST',
    url: '/like',
    params: {
      id,
      like
    }
  })
}

/**
 * 获取账号信息
 */
export const getAccount = () => {
  return request({
    method: 'GET',
    url: '/user/account'
  })
}

/**
 * 获取用户关注
 */
export const getFollows = id => {
  return request({
    method: 'GET',
    url: '/user/follows',
    params: {
      uid: id,
      limit: 30
    }
  })
}

/**
 * 获取用户粉丝
 */
export const getFolloweds = id => {
  return request({
    method: 'GET',
    url: '/user/followeds',
    params: {
      uid: id,
      limit: 30
    }
  })
}

/**
 * 获取用户动态
 */
export const getEvent = id => {
  return request({
    method: 'GET',
    url: '/user/event',
    params: {
      uid: id,
      limit: 30
    }
  })
}