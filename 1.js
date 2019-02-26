window.onload = function(e){
	var items = document.querySelectorAll('.news__item');
	var itemsText = document.querySelectorAll('.item__text')
	var btn = document.querySelector('.revers');
	var flag = true;
	var number;
	btn.onclick = function(e){
		if (flag === true){
			for(var i = 0; i < itemsText.length; i++){
				itemsText[i].classList.add('ml');
			};
			for(var i = 0; i < items.length; i++){
				items[i].classList.add('string');
				if(items[i].classList.contains('news__item_center')){
					items[i].classList.remove('news__item_center');
					number = i;
				};
			};
			flag = !flag;
		}else{
			for(var i = 0; i < itemsText.length; i++){
				itemsText[i].classList.remove('ml');
			};
			for(var i = 0; i < items.length; i++){
				items[i].classList.remove('string');
			};
			items[number].classList.add('news__item_center');
			flag = !flag;
		}
	};
}

