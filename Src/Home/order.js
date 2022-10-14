function attachIngredients() {
    // var itemSel=  $('#items li');
        $('#items li').on('click', select);
     function select() {
         if($(this).attr('data-selected')){
             $(this).removeAttr('data-selected');
             $(this).css('background', "");
         } else {
             $(this).attr("data-selected", true);
             $(this).css('background',"#FCD299");
         }
     }
     if($(this).attr("data-selected", true))
     {
     $('#showItemsButton').on('click', function () {
         $('#selectedItems').text("Selected Items: "+$('#items li[data-selected]').toArray().map(li => li.textContent).join(', '));
     })
    
     $('#order').on('click', function () {
         $('#orderedItems').text("Menu ordered with  Items: "+$('#items li[data-selected]').toArray().map(li => li.textContent).join(', '));
     })
     }
    }