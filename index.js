const express = require('express')
const app = express()
const port = 3000

app.use(express.static('public'))

app.get('/webapi',function(req,res){
    var request = require('request');
    var options = {
        'method': 'GET',
        'url': 'http://apis.data.go.kr/6260000/BusanCulturePlayService/getBusanCulturePlay?ServiceKey=0Rx9018HpB5QjQFCZyr2hEypqSOORXfE%2FDCqHFnpoTOwrcMGAzV1BQRskC8sa612jYgpJxlC4lDUu09Wr4baZA%3D%3D&pageNo=1&numOfRows=5000',
        'headers': {
        }
    };
    
    request(options, function (error, response) {
        if (error) throw new Error(error);
        console.log(response.body);
        res.send(response.body);
        
    });

})

app.listen(port, () => console.log(` app listening at http://localhost:${port}`))



////
/* 상세 api 주소
'http://apis.data.go.kr/6260000/BusanCulturePlayDetailService/getBusanCulturePlayDetail?ServiceKey=0Rx9018HpB5QjQFCZyr2hEypqSOORXfE%2FDCqHFnpoTOwrcMGAzV1BQRskC8sa612jYgpJxlC4lDUu09Wr4baZA%3D%3D&pageNo=1&numOfRows=5000'

  연극 목록 api 주소
  'http://apis.data.go.kr/6260000/BusanCulturePlayService/getBusanCulturePlay?ServiceKey=0Rx9018HpB5QjQFCZyr2hEypqSOORXfE%2FDCqHFnpoTOwrcMGAzV1BQRskC8sa612jYgpJxlC4lDUu09Wr4baZA%3D%3D&pageNo=1&numOfRows=5000'
*/
