
	function Table(w,h){
	    var table = $('<table>');
	    
	    this.width = w;
	    this.height = h;

	    for(var j =0;j<w;j++){
	    	var tr = $('<tr>');
	    	for (var i = 0; i < h; i++) {
	    		var td = $('<td>');
	    		tr.append(td);
	    	}
	    	table.append(tr);
	    }
	    $('#monitor').append(table);

	    this.reTab = function(){
	    	return table;
	    }
	}

	var tab1 = new Table(30,30);

	function Snake(tab){


		var snakeCard = [[15,4],[15,3],[15,2],[15,1]];

		rendering();

		var offOnR = 0;
		var offOnL = 0;
		var offOnU = 0;
		var offOnD = 0;

		
		this.restart = function(){
			offOnR = 0;
			offOnL = 0;
			offOnU = 0;
			offOnD = 0;

			for (var i = 0; i < snakeCard.length; i++) {
				var x = snakeCard[i][0];
				var y = snakeCard[i][1];
				tab1.reTab().children().eq(x).children().eq(y).css({'backgroundColor':'white'});
			}

			snakeCard = [[15,4],[15,3],[15,2],[15,1]];

			rendering();

		};


		function rendering(){
			for (var i = 0; i < snakeCard.length; i++) {
				var x = snakeCard[i][0];
				var y = snakeCard[i][1];
				tab1.reTab().children().eq(x).children().eq(y).css({'backgroundColor':'red'});
			}
		}

		function deleteLast(){
			tab1.reTab().children().eq(snakeCard[snakeCard.length-1][0]).children().eq(snakeCard[snakeCard.length-1][1]).css({'backgroundColor':'white'});
		}

		function snappingKardinat(){
			for(i = snakeCard.length-1;i>=1;i--){
		 		var n = i-1
		 		snakeCard[i][0] = snakeCard[n][0];
		 		snakeCard[i][1] = snakeCard[n][1];
		 	}
		}

		function goSnakeRight(){
			if(offOnR==0)return;
			
			deleteLast();

		 	snappingKardinat();

		 	if(snakeCard[0][1]==tab.width-1){
		 		snakeCard[0][1]=0;
		 	}else{
		 		snakeCard[0][1]++;
		 	}
		 	rendering();

			
		 	setTimeout(function (){goSnakeRight();},500);
		}
		function goSnakeLeft(){
		 	
		 	if(offOnL==0)return;
			deleteLast();

		 	snappingKardinat();

		 	if(snakeCard[0][1]==0){
		 		snakeCard[0][1]=tab.width-1;
		 	}else{
		 		snakeCard[0][1]--;
		 	}
		 	rendering();
		 	
		 	setTimeout(function (){goSnakeLeft();},500);
		}

		function goSnakeUp(){
		 	if(offOnU==0)return;
		 	deleteLast();

		 	snappingKardinat();

		 	if(snakeCard[0][0]==0){
		 		snakeCard[0][0]=tab.width-1;
		 	}else{
		 		snakeCard[0][0]--;
		 	}
		 	rendering();
		 	
		 	setTimeout(function (){goSnakeUp();},500);
		}

		function goSnakeDown(){
			if(offOnD==0)return;
		 	deleteLast();

		 	snappingKardinat();

		 	if(snakeCard[0][0]==tab.width-1){
		 		snakeCard[0][0]=0;
		 	}else{
		 		snakeCard[0][0]++;
		 	}
		 	rendering();
		 	
		 	setTimeout(function (){goSnakeDown();},500);
		}


		 
		$(window).keydown(function(event){
		 	switch(event.keyCode){
		 		case 39:
		 		if(offOnL == 1||offOnR == 1)break;
		 		offOnU = 0;
		 		offOnD = 0;
		 		offOnR = 1;
		 		goSnakeRight();
		 		break;

		 		case 37:
		 		if(offOnR == 1||offOnL == 1)break;
		 		offOnU = 0;
		 		offOnD = 0;
		 		offOnL = 1;
		 		goSnakeLeft();
		 		break;

		 		case 40:
		 		if(offOnU == 1||offOnD == 1)break;
		 		offOnR = 0;
		 		offOnL = 0;
		 		offOnD = 1;
		 		goSnakeDown();
		 		break;

		 		case 38:
		 		if(offOnD == 1||offOnU == 1)break;
		 		offOnR = 0;
		 		offOnL = 0;
		 		offOnU = 1;
		 		goSnakeUp();
		 		break;
		 	}
		});

	}

	var snake = new Snake(tab1);
	 
	 


