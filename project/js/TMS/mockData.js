hotels = Mock.mock({
    "array|10-15":[{
        id:'@character("upper")'+'@string("number",3)',
        name:'@title()',
        address:'@region()',
        mobile:'1'+'@string("number",10)'
    }],


})

Mock.mock('http://localhost:63342/aBootstrap/3-manager-page.html','GET',findHotels);
function findHotels() {
  var res={};
  res.hotels = hotels.array;
  res.errorCode = 0;
  res.msg='成功';
  return res;
}
