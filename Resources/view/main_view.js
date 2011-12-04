lkw.MainView = function() {
	var render = function() {
		var mainWindow = Titanium.UI.createWindow({  
		    title:'Learn Khmer Writing',
		    backgroundColor:'#000'
		});
		
		var trainingList = Ti.UI.createTableView();
		
		var rowData = _createRow();
		
		trainingList.data = rowData;
		
		mainWindow.add(trainingList);
		mainWindow.open();
	};
	
	var _createRow = function() {
		var rows = [],
			data = ["Alphabet", "Dependent Vowel", "Independent Vowel"],
			len = data.length,
			i;
		
		for ( i = 0; i < len; i++ ) {
			var name = data[i];
			var alphabetRow = Titanium.UI.createTableViewRow({
				height: "auto",
				hasChild: true
			});
			
			var alphabetLabel = Titanium.UI.createLabel({
				text: name,
				font: { fontSize: 18 },
//				top: 5,
				left: 0,
				height: 35
			});
			
			alphabetRow.add(alphabetLabel);
			
			rows.push(alphabetRow);	
		}

		return rows;
	};
	
	return {
		render: render
	};
}();