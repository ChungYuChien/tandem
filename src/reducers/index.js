import sample from './sample' //把自己的reducer import進來
// 會員中心使用
import MindexDisplaychange from './MindexDisplaychange'
import Mdollcalling from './Mdollcalling'
import MlogAuth from './MlogAuth'
import MbcenterUserDate from './MbcenterUserDate'
import Mmygamedetail from './Mmygamedetail'
import Mbazenproduct from './Mbazenproduct'
import Maddfriend from './Maddfriend'
import Mconfirmfriend from './Mconfirmfriend'

//community
import communityLike from './communityLike'

//forum
import getArticleData from './articleReducers'
import getArticleDetail from './articleReducers'
import getCommentData from './articleReducers'

import { combineReducers } from 'redux'

const allReducers = combineReducers({
  sample,
  communityLike,

  MindexDisplaychange,
  Mdollcalling,
  MlogAuth,
  MbcenterUserDate,
  Mmygamedetail,
  Mbazenproduct,
  Maddfriend,
  Mconfirmfriend,

  getArticleData,
  getArticleDetail,
  getCommentData,
})

export default allReducers
