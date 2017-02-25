var data=[];
var dataStr='1雅雅的白毛衣<br>\
<br>\
雅雅在一天晚上给我发来穿白毛衣的照片，当时我在吐槽雅雅给我发的图片都不好看，雅雅不服气，立马发来一张好看的，嗯，这是个好办法<br>\
<br>\
<br>\
2雅雅的粉大衣<br>\
<br>\
我心中雅雅买的第二好的衣服<br>\
最好的是那个捂脸的那张的<br>\
<br>\
<br>\
3雅雅和女神舍友<br>\
<br>\
女神舍友我就不忍吐槽了，这智商基本也就告别自行车了<br>\
<br>\
<br>\
4雅雅和小孩子<br>\
<br>\
这张颇有淑女范，一眼看去有大明星的感觉<br>\
<br>\
<br>\
5雅雅拽自己头发<br>\
<br>\
一边拽自己头发<br>\
一边还嘟嘴<br>\
可萌可萌了<br>\
<br>\
<br>\
6雅雅的蓝毛衣<br>\
<br>\
雅雅最喜欢这个蓝毛衣了<br>\
每次见雅雅都穿着它<br>\
还有就是那个嘟嘴那张的黑毛衣<br>\
<br>\
<br>\
7雅雅捂脸<br>\
<br>\
这张捂脸的照片<br>\
差不多是颜值巅峰了<br>\
<br>\
<br>\
8雅雅夏天穿睡衣<br>\
<br>\
这个肯定是最年轻的时候了<br>\
一脸清纯啊<br>\
<br>\
s<br>\
';
var d = dataStr.split('<br><br><br>');
for(var i=0;i<d.length;i++){
  var c = d[i].split('<br><br>');
  data.push({
    img:c[0].replace('、',' ')+'.jpg',
    caption:c[0].split('、')[0],
    desc:c[1]
  });
  console.log(c[0].replace('、',' ')+'.jpg');
}