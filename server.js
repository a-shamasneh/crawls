////////////////*require express framework*///////////////
var express = require('express');
var app = express();
///////////* cheerio helps us traverse the DOM and extract data*////
var cheerio = require('cheerio');
////////////////*require request to make http request*///////////////
var request = require('request');
var path = require('path');
////////////////*serve FrontEend  *///////////////
app.use(express.static(path.join(__dirname,'dist')));
///serve the dist cause i am used angular2//
////////////////*Routes configuration *///////////////
 var data=[];// array to store data
 var all=[];// split each tender  put in object and push to it 
    for(var i=0;i<5;i++){// get some tenders from more one page
    var url='http://www.medicaltenders.com/search.php?off='+i+'&inc=y&global=1&region_name[]=EG&notice_type_new[]=1,2,3,7,10,11,16,9,4,8,5&sector=18&deadline='
    request(url,function(err,resp,body){
    if(!err){
      var $=cheerio.load(body);  
    $('.style5').each(function(i,tag)  
    {
      data.push($(tag).text().trim())
      //console.log($(tag).text().trim())
    
    });
    
    // for each two index represent key and value which mean(14 element == detail of tender )
     var temp=[];
     for(var i=0;i<data.length;i++){
      if(temp.length===13){
        all.push({"type":temp[1],
          "country":temp[3],
          "category":temp[5],
          "desc":temp[7],
          "deadline":temp[9],
           "Refno":temp[11]})
        temp=[];
      }else{
        temp.push(data[i])
      }
     }
     
      
    } 
    
    })  
    } 
app.get('/tenders',function(req,res) {
  console.log(all.length)
  res.json(all)
     
});
////////////////*run server*///////////////
var port = process.env.PORT || 9000;
app.listen(port,function(){
  console.log("app run on "+port)
});
