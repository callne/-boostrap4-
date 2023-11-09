function getHotels() {
  $.get({
      url: 'http://localhost:63342/aBootstrap/3-manager-page.html',
      dataType: 'json',
      success: function (res) {
        if (res.errcrCode == 0) {
          var hotel = null;
          var $tr = null;
          var hotels = hotels
          for (var i = 0; i < hotels.length; i++) {
            hotel = hotels[i];
            var $tr = $('<tr></tr>');
            $tr.append($('<th class="align-middle"><input type="checkbox"></th>'));
            $tr.append($('<th></th>').text(i + 1));
            $tr.append($('<th></th>').text(hotel.id));
            $tr.append($('<th></th>').text(hotel.name));
            $tr.append($('<th></th>').text(hotel.address));
            $tr.append($('<th></th>').text(hotel.mobile));
            $tr.append($('<th></th>').html(
              '<big class="mr-3"><a title="修改" class="text-warning bi-wrench" href=""></a>' +
              '</big><big><a title="删除" class="text-danger bi-trash-fill" data-toggle="modal" data-target="#delWarning"></a></big>'
            ));
            $('table').append($tr);
          }
        } else {
          console.log(res.msg)
        }


      },
    error:function () {
      console.log('error')
    }


  })


}


