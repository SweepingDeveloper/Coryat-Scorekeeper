

//Placeholder for the board values for Single and Double Jeopardy!
var boardvalue   = [
				   [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
				   ,[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
				   ,[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
				   ,[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
				   ,[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
				   ,[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
				   ,[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
				   ,[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
				   ,[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
				   ,[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
				   ];
var d_boardvalue = [
				   [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
				   ,[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
				   ,[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
				   ,[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
				   ,[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
				   ,[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
				   ,[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
				   ,[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
				   ,[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
				   ,[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
				   ];
				   
var gameScore = [0,0,0,0,0,0,0,0,0,0];
var sumScore = 0;
var averageCoryat = 0;
				   
//0 is neutral
//1 is positive
//-1 is negative
//changing the value will add 1.  If 2, then value becomes -1.
				   

				   
//Idea for new version of program:  Make the score variable an array so it would
//be easier to create an average.
var score = 0;			

//Game numbers are 0-9.
var game = 0; 

//Game Names and Categories.
var game_name = ['','','','','','','','','',''];
var cat_names = [
				['','','','','','','','','','','','']
				,['','','','','','','','','','','','']
				,['','','','','','','','','','','','']
				,['','','','','','','','','','','','']
				,['','','','','','','','','','','','']
				,['','','','','','','','','','','','']
				,['','','','','','','','','','','','']
				,['','','','','','','','','','','','']
				,['','','','','','','','','','','','']
				,['','','','','','','','','','','','']
				];


//Flag for when the category name is altered.
var cat_change = 0;

//String variable for the file.
var regstring = ''; 




//use .style.backgroundColor

function startProgram()
{
	
		//You'll probably see this a lot in my programs.  This is something
		//I need to work on.  Perhaps...make them global variables?
		
		//Anyway, these variables extract the elements from the HTML
		//for use in the program.
		var table = document.getElementsByTagName('TABLE')[0]; 
		var categories = table.getElementsByTagName('TH');
		var catnames = table.getElementsByTagName('INPUT');
		var clues = table.getElementsByTagName('TD');	

		var scoreboard = document.getElementsByTagName('TABLE')[1];
		var score_th = scoreboard.getElementsByTagName('TH');
		
		var d_table = document.getElementsByTagName('TABLE')[2]; 
		var d_categories = d_table.getElementsByTagName('TH');
		var d_catnames = d_table.getElementsByTagName('INPUT');
		var d_clues = d_table.getElementsByTagName('TD');	
		
		var i_table = document.getElementsByTagName('TABLE')[3];
		var i_rows = i_table.getElementsByTagName('TD');
		var i_th = i_table.getElementsByTagName('TH');
		var list = i_table.getElementsByTagName('INPUT');
		
		//Whenever you change the game, it will change the game number and update the board accordingly.
		document.getElementById("game0").onclick = function()  {game = 0; updateBoard();};
		document.getElementById("game1").onclick = function()  {game = 1; updateBoard();};
		document.getElementById("game2").onclick = function()  {game = 2; updateBoard();};
		document.getElementById("game3").onclick = function()  {game = 3; updateBoard();};
		document.getElementById("game4").onclick = function()  {game = 4; updateBoard();};
		document.getElementById("game5").onclick = function()  {game = 5; updateBoard();};
		document.getElementById("game6").onclick = function()  {game = 6; updateBoard();};
		document.getElementById("game7").onclick = function()  {game = 7; updateBoard();};
		document.getElementById("game8").onclick = function()  {game = 8; updateBoard();};
		document.getElementById("game9").onclick = function()  {game = 9; updateBoard();};
	
		//Activate the download button.
		document.getElementById('download').onclick = download;
		
		
		//This whole thing is for loading the file.
		var fileInput = document.getElementById('fileInput');
				

					fileInput.addEventListener('change', function(e) 
					{
						var file = fileInput.files[0];
						var textType = /text.*/;
						var counter = 0;
						var flag = 0;
						regstring = '';
						
						if (file.type.match(textType)) {
							var reader = new FileReader();

							reader.onload = function(e) {
								console.log(reader.result);
								document.getElementById('filename').value = file.name;
								document.getElementById('filename').value = document.getElementById('filename').value.substring(0,document.getElementById('filename').value.length - 4)
								
								regstring = reader.result;
								
								
								//document.box.loadstuff.value = regstring;
								load();
								//fileDisplayArea.innerText = reader.result;
							}

							reader.readAsText(file);    
						} else {
							//document.box.loadstuff.value = "File not supported!"
						}
					});
		
		

		//Change the visual style of the elements to reflect the colors on the actual show.
		table.style.backgroundColor = "black";
		scoreboard.style.backgroundColor="black";
		d_table.style.backgroundColor = "black";
		i_table.style.backgroundColor = "black";
		
		score_th[0].style.backgroundColor="black";
		score_th[1].style.backgroundColor="black";
		score_th[2].style.backgroundColor="blue";
		score_th[2].style.textAlign="center";
		score_th[2].style.color="white";
		score_th[2].style.fontWeight="bold";
		score_th[2].style.fontSize = "20px";
		score_th[3].style.backgroundColor="black";
		score_th[4].style.backgroundColor="black";
		
		
		for (var a = 0; a <= 5; a++)
		{
			categories[a].style.backgroundColor = "blue";
			categories[a].style.textAlign = "center";
			categories[a].style.color = "white";
			catnames[a].style.backgroundColor="blue";
			catnames[a].style.textAlign="center";
			catnames[a].style.color = "white";
			catnames[a].addEventListener('change', function() {cat_change = 1; updateBoard();});
			d_categories[a].style.backgroundColor = "blue";
			d_categories[a].style.textAlign = "center";
			d_categories[a].style.color = "white";
			d_catnames[a].style.backgroundColor="blue";
			d_catnames[a].style.textAlign="center";
			d_catnames[a].style.color = "white";
			d_catnames[a].addEventListener('change', function() {cat_change = 1; updateBoard();});
			

		}
		for (var a = 0; a <= 29; a++)
		{
			clues[a].style.backgroundColor = "blue";
			clues[a].style.color = "yellow";
			clues[a].style.fontFamily = "Swiss 911";
			clues[a].style.fontSize = "20px";
			d_clues[a].style.backgroundColor = "blue";
			d_clues[a].style.color = "yellow";
			d_clues[a].style.fontFamily = "Swiss 911";
			d_clues[a].style.fontSize = "20px";
		}
		
		for (var a = 0; a <= 10; a++)
		{
			i_rows[a].style.backgroundColor = "black";
			if (a < 10) {i_th[a].style.backgroundColor= "blue";  i_th[a].style.textAlign="center";}
		}
		
		//From http://stackoverflow.com/questions/8922002/attach-event-listener-through-javascript-to-radio-button
		//var radios = list.getElementById("myGame");
		
		/*
		for(var i = 0; i <= 9; i++)
		{
			
			list[4+i*2].onchange = function()
			{
				game_name[parseInt(a/2)] = list[a+1].value;
			};			
		}
		*/
		
		
		//Another piece of code to help with file loading.
		var fileInput = document.getElementById('fileInput');
		//var fileDisplayArea = document.getElementById('fileDisplayArea');

		fileInput.addEventListener('change', function(e) 
		{
			var file = fileInput.files[0];
			var textType = /text.*/;
			var counter = 0;
			var flag = 0;
			regstring = '';
			
			if (file.type.match(textType)) {
				var reader = new FileReader();

				reader.onload = function(e) {
					console.log(reader.result);
					document.getElementById('filename').value = file.name;
					document.getElementById('filename').value = document.getElementById('filename').value.substring(0,document.getElementById('filename').value.length - 4)
					regstring = reader.result;
					load();
				}

				reader.readAsText(file);    
			} else {
				alert("File not supported!");
			}
		});

		
		
		
		
		
		//Thanks in part to http://stackoverflow.com/users/2876565/doorhandle
		//Adjust the value of the clue upon clicking, for both boards.
		if (table != null) 
		{	
			for (var i = 0; i < table.rows.length; i++) 
			{
				for (var j = 0; j < table.rows[i].cells.length; j++)
				{
					table.rows[i].cells[j].onclick = function ()
					{
						//var ill_take = clues[a].cellIndex;
						//var for_xhundred = clues[a].parentNode.rowIndex;
						//var cluenum = for_xhundred*6 + ill_take;
						//console.log(cluenum);
						var ill_take = this.cellIndex;
						var for_xhundred = this.parentNode.rowIndex - 1;
						//console.log("j is "+ j);
						//console.log("i is "+ i);
						var cluenum = for_xhundred*6 + ill_take;
						boardvalue[game][cluenum]++;
						console.log(cluenum);
						if (boardvalue[game][cluenum] == 2) {boardvalue[game][cluenum] = -1;}
						if (boardvalue[game][cluenum] == 4) {boardvalue[game][cluenum] = 3;}
						updateBoard();
						
					};
				}
			}
		}

		if (d_table != null) 
		{	
			for (var i = 0; i < d_table.rows.length; i++) 
			{
				for (var j = 0; j < d_table.rows[i].cells.length; j++)
				{
					d_table.rows[i].cells[j].onclick = function ()
					{
						//var ill_take = clues[a].cellIndex;
						//var for_xhundred = clues[a].parentNode.rowIndex;
						//var cluenum = for_xhundred*6 + ill_take;
						//console.log(cluenum);
						var d_ill_take = this.cellIndex;
						var d_for_xhundred = this.parentNode.rowIndex - 1;
						//console.log("j is "+ j);
						//console.log("i is "+ i);
						var d_cluenum = d_for_xhundred*6 + d_ill_take;
						d_boardvalue[game][d_cluenum]++;
						console.log(d_cluenum);
						if (d_boardvalue[game][d_cluenum] == 2) {d_boardvalue[game][d_cluenum] = -1;}
						if (d_boardvalue[game][d_cluenum] == 4) {d_boardvalue[game][d_cluenum] = 3;}
						updateBoard();
						
					};
				}
			}
		}
		

		
		
}


//And this checks the board values, changes the clue colors, and adjusts the score.
function updateBoard()
{
		
		console.log("Game "+game);
		console.log("Category Change is "+cat_change);
		var table = document.getElementsByTagName('TABLE')[0]; 
		var categories = table.getElementsByTagName('TH');
		var catnames = table.getElementsByTagName('INPUT');
		var clues = table.getElementsByTagName('TD');	
		var scoredisplay = document.getElementById('scoredisplay');
	

		var i_table = document.getElementsByTagName('TABLE')[3];
		var i_rows = i_table.getElementsByTagName('TD');
		var scorelabel = i_table.getElementsByTagName('DIV');
		
		
		score = 0;
		for (var a = 0 ; a <= clues.length; a++)
		{
			if (boardvalue[game][a] == -1) 
				{
					clues[a].style.backgroundColor = "red";
					score = score - (parseInt((a+6)/6)* 200);
				}
			if (boardvalue[game][a] == 0) 
				{
					clues[a].style.backgroundColor = "blue";
				}
			if (boardvalue[game][a] == 1) 
				{
					clues[a].style.backgroundColor = "green";
					score = score + (parseInt((a+6)/6)* 200);
				}
		}

		
		var d_table = document.getElementsByTagName('TABLE')[2]; 
		var d_categories = d_table.getElementsByTagName('TH');
		var d_catnames = d_table.getElementsByTagName('INPUT');
		var d_clues = d_table.getElementsByTagName('TD');	
		for (var a = 0 ; a <= d_clues.length; a++)
		{
			if (d_boardvalue[game][a] == -1) 
				{
					d_clues[a].style.backgroundColor = "red";
					score = score - (parseInt((a+6)/6)* 400);
				}
			if (d_boardvalue[game][a] == 0) 
				{
					d_clues[a].style.backgroundColor = "blue";
				}
			if (d_boardvalue[game][a] == 1)
				{
					d_clues[a].style.backgroundColor = "green";
					score = score + (parseInt((a+6)/6)* 400);
				}
				
		}
		

		if (cat_change == 0)
		{
			
			for (var a = 0; a <= 5; a++)
			{
				catnames[a].value = cat_names[game][a];
			}
			for (var a = 6; a <= 11; a++)
			{
				d_catnames[a-6].value = cat_names[game][a];
			}
		}
		cat_change = 0;
		
		scoredisplay.innerHTML = "$"+score;
		if (score >= 0) {scoredisplay.style.color = "white";}
		if (score < 0) {scoredisplay.style.color = "red";}
		
		
		//Calculate scores for each game and average score
		sumScore = 0;
		for (var a = 0; a <= 9; a++)
		{
			gameScore[a] = 0;
			for (var b = 0; b <= 29; b++)
			{
				if (boardvalue[a][b] == -1) 
					{
						gameScore[a] -= (parseInt((b+6)/6)* 200);
					}
				if (boardvalue[a][b] == 1) 
					{
						gameScore[a] += (parseInt((b+6)/6)* 200);
					}
			}
			for (var b = 0; b <= 29; b++)
			{
				if (d_boardvalue[a][b] == -1) 
					{
						gameScore[a] -= (parseInt((b+6)/6)* 400);
					}
				if (d_boardvalue[a][b] == 1) 
					{
						gameScore[a] += (parseInt((b+6)/6)* 400);
					}
			}
			sumScore += gameScore[a];
			scorelabel[a].innerHTML = "$" + gameScore[a];
			scorelabel[a].style.color = "white";
		}
		averageCoryat = parseInt(sumScore / 10);
		scorelabel[10].innerHTML = "Average Score: "+ averageCoryat;
		scorelabel[10].style.color = "white";
		
		
		
		
		for (var a = 0; a <= 5; a++)
		{
			cat_names[game][a] = catnames[a].value;
		}
		for (var a = 6; a <= 11; a++)
		{
			cat_names[game][a] = d_catnames[a-6].value;
		}
		
		

		
		for (var a = 1; a <= 11; a++)
		{
			i_rows[a].style.backgroundColor = "black";
			if (game == a-1) {i_rows[a].style.backgroundColor = "blue";}
		}

}



//Load the file, and update the board.
function load()
{
	//regstring = '';
	var bigtext = '';
	var testchar;
	var counter = 0;
	var stuff =  [
				 ['','','','','','','','','','','','','',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0] 				
				 ,['','','','','','','','','','','','','',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0] 				
				 ,['','','','','','','','','','','','','',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0] 				
				 ,['','','','','','','','','','','','','',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0] 				
				 ,['','','','','','','','','','','','','',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0] 				
				 ,['','','','','','','','','','','','','',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0] 				
				 ,['','','','','','','','','','','','','',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0] 				
				 ,['','','','','','','','','','','','','',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0] 				
				 ,['','','','','','','','','','','','','',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0] 				
				 ,['','','','','','','','','','','','','',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0] 				
				 ];

				 
	    var table = document.getElementsByTagName('TABLE')[0]; 
		var categories = table.getElementsByTagName('TH');
		var catnames = table.getElementsByTagName('INPUT');
		var clues = table.getElementsByTagName('TD');	

		var scoreboard = document.getElementsByTagName('TABLE')[1];
		var score_th = scoreboard.getElementsByTagName('TH');
		
		var d_table = document.getElementsByTagName('TABLE')[2]; 
		var d_categories = d_table.getElementsByTagName('TH');
		var d_catnames = d_table.getElementsByTagName('INPUT');
		var d_clues = d_table.getElementsByTagName('TD');	
		
		var i_table = document.getElementsByTagName('TABLE')[3];
		var list = i_table.getElementsByTagName('INPUT');
		console.log(regstring);
	for (var a = 0;a <= 9;a++)
	{
			for (var b = 0; b <= 72; b++)
			{
				bigtext = '';
				do
				{
					
					testchar = regstring.substring(counter,counter + 1);
					console.log(a + b + ": testchar is " + testchar + ", counter is "+ counter);
					if (testchar == '*')
					{
						counter++;
						stuff[a][b] = bigtext;
						break;
					}
					else
					{					
						bigtext += testchar;
					}
					counter++;
					//if (counter > 999)
					//{
					//	console.log("Error at field " + a);
					//	break;
					//}
					
					//if (counter > 99) {break;}
				}
				while (a != 100);

			
			console.log(a+ b + "  "+ stuff[a][b]);
			}

	}
		
	for (var a = 0; a <= 9; a++)
	{
		list[4+a*2].value = stuff[a][0];  //Game Names.
		
		for (var b = 0; b <= 11; b++)
		{
			cat_names[a][b] = stuff[a][1+b]; 	//Category Names
		}
		for (var b = 0; b <= 29; b++)
		{
			boardvalue[a][b] = stuff[a][13+b];  //Board Values for Single Jeopardy!
			d_boardvalue[a][b] = stuff[a][43+b]; //Board Values for Double Jeopardy!
		}
		
		
	}
	updateBoard();
	
				 
				 
	//for (var a = )
}


//Save the file.
function download()
{
	regstring = '';
	var stuff =  [
				 ['','','','','','','','','','','','','',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0] 				
				 ,['','','','','','','','','','','','','',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0] 				
				 ,['','','','','','','','','','','','','',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0] 				
				 ,['','','','','','','','','','','','','',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0] 				
				 ,['','','','','','','','','','','','','',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0] 				
				 ,['','','','','','','','','','','','','',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0] 				
				 ,['','','','','','','','','','','','','',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0] 				
				 ,['','','','','','','','','','','','','',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0] 				
				 ,['','','','','','','','','','','','','',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0] 				
				 ,['','','','','','','','','','','','','',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0] 				
				 ];
	
		var table = document.getElementsByTagName('TABLE')[0]; 
		var categories = table.getElementsByTagName('TH');
		var catnames = table.getElementsByTagName('INPUT');
		var clues = table.getElementsByTagName('TD');	

		var scoreboard = document.getElementsByTagName('TABLE')[1];
		var score_th = scoreboard.getElementsByTagName('TH');
		
		var d_table = document.getElementsByTagName('TABLE')[2]; 
		var d_categories = d_table.getElementsByTagName('TH');
		var d_catnames = d_table.getElementsByTagName('INPUT');
		var d_clues = d_table.getElementsByTagName('TD');	
		
		var i_table = document.getElementsByTagName('TABLE')[3];
		var list = i_table.getElementsByTagName('INPUT');

		for (var a = 0; a <= 9; a++)
		{
			//3,5,7,9,11...
			stuff[a][0] = list[4+a*2].value;  //Extract the game names.
			console.log(list[4+a*2].value);
			regstring += list[4+a*2].value + "*";
			for (var b = 0; b <= 5; b++)
			{

				stuff[a][1+b] = catnames[b].value;  //Extract the category names for Single Jeopardy!
				regstring += catnames[b].value + "*";
			}
			for (var b = 0; b <= 5; b++)
			{
				stuff[a][7+b] = d_catnames[b].value; //Extract the category names for Double Jeopardy!
				regstring += d_catnames[b].value + "*";
			}
			for (var b = 0; b <= 29; b++)
			{
				stuff[a][13+b] = boardvalue[a][b]; //Extract the board values for Single Jeopardy!
				regstring += boardvalue[a][b] + "*";
			}
			for (var b = 0; b <= 29; b++)
			{
				stuff[a][43+b] = d_boardvalue[a][b]; //Extract the board values for Double Jeopardy!
				regstring += d_boardvalue[a][b] + "*";
			}
			
		}
		console.log(regstring);
		
		
		var element = document.createElement('a');
			  element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(regstring));
			  element.setAttribute('download', list[2].value + ".txt");

			  element.style.display = 'none';
			  document.body.appendChild(element);

			  element.click();

			  document.body.removeChild(element);
}