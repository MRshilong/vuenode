var express = require('express');
var router = express.Router();
var mgd = require('../common/mgd')

/* GET home page. */
router.get('/', function(req, res, next) {
    // res.setHeader('Access-Control-Allow-Origin', req.headers.origin);
    // let data = [
    //     {
    //         "id":1,
    //         "title":"苹果手机",
    //         "detail":"IphoneX",
    //         "price":"3800.00",
    //         "yprice":"12000.00",
    //         "img":"https://m.360buyimg.com/n1/jfs/t15787/353/109633918/16701/5a8390ef/5a27ae6dNc530b5bb.jpg!q70.jpg"
    //     },
    //     {
    //         "id":2,
    //         "title":"百草味坚果",
    //         "detail":"百草味坚果",
    //         "price":"25.00",
    //         "yprice":"100.00",
    //         "img":"https://m.360buyimg.com/mobilecms/s240x240_jfs/t14287/16/2071526173/41836/766c1953/5a6935d3N17ca68e7.jpg!q70.jpg"
    //     },
    //     {
    //         "id":3,
    //         "title":"海尔洗衣机",
    //         "detail":"海尔洗衣机",
    //         "price":"3800.00",
    //         "yprice":"12000.00",
    //         "img":"https://m.360buyimg.com/mobilecms/s240x240_jfs/t15049/171/1967249015/25679/d554d9a9/5a61d929N027318e3.jpg!q70.jpg"
    //     },
    //     {
    //         "id":4,
    //         "title":"苹果手机充电线",
    //         "detail":"快充",
    //         "price":"12.00",
    //         "yprice":"80.00",
    //         "img":"https://m.360buyimg.com//mobilecms/s276x276_jfs/t11401/34/504898878/183378/5a6a8a48/59f1c3a1N2174c8cc.jpg!q70.jpg"
    //     }
    // ]
    
    // res.send(data)



    mgd({
        dbName:'vue',
        collectionName:'seckill'
      },(collection,client)=>{
        collection.find().toArray((err,data)=>{
          if(data.length>0){
            res.send(data),
            console.log(data)
            // res.send(show(data))
          }else{
            res.send({error:1,msg:'数据为空'})
            
          }
        })
      })
  
});

module.exports = router;