const baseUrl = 'https://wzcb97.top'
export const apiurl = {
  /**游玩地点API*/
  addPlace: '/Place/addPlace', // 添加游玩地点
  getPlaceByUid: '/Place/getPlaceByUid', // 根据uid获取游玩地点信息
  getPlaceListByUids: '/Place/getPlaceListByUids', // 获取游玩地点信息以用于轮播
  getPlaceList: '/Place/getPlaceList', // 根据type获取附近推荐的游玩地点
  getPlaceCommentByUid: '/Place/getPlaceCommentByUid', // 根据uid分页获取游玩地点评论
  addPlaceComment: '/Place/addPlaceComment', // 根据uid给游玩地点添加评论
  updateLikes: '/Place/updateLikes', // 更新评论点赞数
  deleteCommentById: '/Place/deleteCommentById', // 根据id删除评论
  getPlacePhotoByUid: '/Place/getPlacePhotoByUid', // 根据uid分页获取游玩地点图片
  updateReadTimes: '/Place/updateReadTimes', // 获取图片详细数据并更新图片浏览数
  deletePhotoById: '/Place/deletePhotoById', // 根据id删除图片
  addPlacePhoto: '/Place/addPlacePhoto', // 根据uid给游玩地点上传图片
  addOrUpdateUserHistory: '/Place/addOrUpdateUserHistory', // 添加或更新用户浏览记录
  deleteUserHistory: '/Place/deleteUserHistory', // 删除用户浏览记录
  getUserHistoryByUserId: '/Place/getUserHistoryByUserId', // 根据用户openid获取浏览记录
  getLikedCommentByPlaceIdAndUserId: '/Place/getLikedCommentByPlaceIdAndUserId', // 根据placeId以及openid搜索出用户点赞过的评论
  uploadImage:'/Place/uploadImage', // 上传图片接口（用于上传多张图片）
  /**用户信息API*/
  addUser: '/User/addUser', // 添加用户信息
  getUser: '/User/getUser', // 获取并翻译用户信息
  updateUser: '/User/updateUser', // 更改用户信息
  /**AI操作API*/
  imageClassify: '/AIOperate/imageClassify', // 图像识别
  getPhotoDistinguishList: '/AIOperate/getPhotoDistinguishList', // 根据用户openid以及type类型获取图像识别所有记录
  deletePhotoDistinguishById: '/AIOperate/deletePhotoDistinguishById', // 根据id删除图像识别记录
  aipOcr: '/AIOperate/aipOcr', // 文字识别
  getTextDistinguishList: '/AIOperate/getTextDistinguishList', // 根据用户openid获取文字识别所有记录
  deleteTextDistinguishById: '/AIOperate/deleteTextDistinguishById', // 根据id删除文字识别记录
  translateText: '/AIOperate/translateText', // 文字翻译
  getTranslatorListByType: '/AIOperate/getTranslatorListByType', // 根据用户openid以及type类型获取所有翻译记录
  deleteTranslatorById: '/AIOperate/deleteTranslatorById', // 根据id删除翻译记录
  speechSynthesis: '/AIOperate/speechSynthesis' // 语音合成
}
