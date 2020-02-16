import {Avatar, Divider} from 'antd'
import '../public/style/components/author.css'

const Author = ()=>{
  return (
    <div className="author-div comm-box">
      <div><Avatar size="100" src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" /></div>
      <div className="author-introduction">
        前端小白，专注于Web和移动前端开发。学习永无止境，分享即成长。
      </div>
      <Divider>社交账号</Divider>
      <Avatar size="28" icon="github" className="account" />
      <Avatar size="28" icon="qq" className="account" />
      <Avatar size="28" icon="wechat" className="account" />
    </div>
  )
}

export default Author