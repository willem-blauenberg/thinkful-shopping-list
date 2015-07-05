

/*

1- Create a list in the notepad
2- When an item is added in the box, transfer it to the list
--> input .button --> .list ul  with .addbutton */

$(document).ready(function() {


		$('.addbutton').click(function(){
			var toAdd = $('input').val();
			$('.list ul').append('<li class="item">' + '<input class="checkbox" type="checkbox">' + toAdd +'</li>')
		})

		$('input:checked').parent('li').addClass('striked');
		$('input:checkbox:not(:checked)').parent('li').removeClass('striked');

		$('input').each(function(){
			var checked = $('input').prop('checked');
			$(this).click(function(){
				
				if (checked == false) {
					$(this).parent('li').toggleClass('striked');
					//$(this).prop('checked');
				} 
				if (checked == true) {
					$(this).parent('li').toggleClass('nonstriked');
					//$(this).prop('input:checkbox:not(:checked)');
				}
			})
		});
		
		$('.remove').click(function(){
			$('input:checked').parent('li').remove();
		})
})
