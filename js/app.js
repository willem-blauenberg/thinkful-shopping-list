

/*

1- Create a list in the notepad
2- When an item is added in the box, transfer it to the list
--> input .button --> .list ul  with .addbutton */

$(document).ready(function() {


		/*$(".addbutton").on({
	                click: function() {
						var x = $(".button").val();
						$(".list ul").append("<li><input type='checkbox'>", "bananas","</li>");
		}
		})	*/	


		$('.addbutton').click(function(){
			var toAdd = $('input').val();
			$('.list ul').append('<li class="item">' + '<input class="checkbox" type="checkbox">' + toAdd +'</li>')
		})

		$(document).on('click', '.item', function() {
			
			$(this).remove();
			
		})

		
		$('.remove').click(function() {
			if ( $('.cb').is(":checked")) {
				$(this).remove();
			}
		})


})
