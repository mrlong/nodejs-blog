//
// author: mrlong date:2013-3-17
// 系统设置
//
//

module.exports = { 
  debug: false,
  title: '成功就是抢先一步的创新',
  port : 3002,             //web服务端口
  sessionSecret: 'www.mrlong.cn', //session 串加密key
  cookieSecret:  'www.mrlong.cn', 
  //
  mongodb:{
    db: 'mrlongcn', 
    host: 'localhost',
    dbport: 27017
  },  
  //下载目录,在发布的根目录下
  uploaddir:'/upload'
  
}; 