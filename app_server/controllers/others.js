/* GET 'about us' page */
module.exports.about = function(req, res) {
    res.render('generic-text', {
        title: 'BusLocation Тухай',
        content: ('Хэрэглэгчийн шаардлага: \n'+
        ' * Хэрэглэгч хот хоорондын тодорхой чиглэл дэх суурингуудын байршлыг газрын зураг дээр дүрсэлсэн байдлаар харах боломжтой байх \n'+
        ' * Хэрэглэгч хот хоорондын зорчих тээврийн хэрэгслийн улсын бүртгэлийн дугаараар хайлт хийнэ сүүлд бүртгэгдсэн байршлыг газрын зураг дээрээс харах боломжтой байх \n'+
        ' * Хэрэглэгч тээврийн хэрэгслүүдийн улсын бүртгэлийн дугаарыг зорчих чиглэл болон хөдлөх огноогоор нь шүүлт хийж  харах боломжтой байх')
      });
};
