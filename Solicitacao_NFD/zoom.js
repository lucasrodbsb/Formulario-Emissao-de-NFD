function chamaFilter(clicked_id) {

	var capturaValor = clicked_id
	var novaurl = ''
	var display = ''
	var coligada = '10'

	display = 'CHAPA'
	novaurl = '/api/public/ecm/dataset/search?datasetId=FUNCIONARIOS_RM&filterFields=ccoligada,' + coligada + '&searchField=cchapa&'

	var settings = {
		source : {
			url : novaurl,
			contentType : 'application/json',
			root : 'content',
			pattern : '',
			limit : 10,
			offset : 0,
			patternKey : 'searchValue',
			limitkey : 'limit',
			offsetKey : 'offset'
		},
		displayKey : display,
		tagMaxWidth : 500, // tamanho da tag
		minLength : 3, // tamanho minimo de caracter para pesquisar
		style : {
			autocompleteTagClass : 'tag-gray',
			tableSelectedLineClass : 'info'
		}
	};

	var validaCampo = $("#validaFilterNome").val();

	if (validaCampo == "") {

		var filter = FLUIGC.filter('#chapa', settings);

		$('#validaFilterNome').val("Carregado");

		filter.on("fluig.autocomplete.itemAdded", function(data) {
			selectFunc(data);
		});

	}

	filter.on("fluig.autocomplete.itemRemoved", function(event) {

		let itemSelecionado = event.item;
		$("#nome").val('');

	});

}

function chamaFiltermoto(clicked_id2) {

	var capturaValor = clicked_id2
	var novaurl2 = ''
	var display2 = ''

	display2 = 'codigo'
	novaurl2 = '/api/public/ecm/dataset/search?datasetId=Motoristas&filterFields=codigo,codigo&searchField=codigo&'

	var settings2 = {
		source : {
			url : novaurl2,
			contentType : 'application/json',
			root : 'content',
			pattern : '',
			limit : 10,
			offset : 0,
			patternKey : 'searchValue',
			limitkey : 'limit',
			offsetKey : 'offset'
		},
		displayKey : display2,
		tagMaxWidth : 500, // tamanho da tag
		minLength : 6, // tamanho minimo de caracter para pesquisar
		style : {
			autocompleteTagClass : 'tag-gray',
			tableSelectedLineClass : 'info'
		}
	};

	var validaCampo2 = $("#validaFiltermoto").val();

	if (validaCampo2 == "") {

		var filter2 = FLUIGC.filter('#cidomoto', settings2);

		$('#validaFiltermoto').val("Carregado");

		filter2.on("fluig.autocomplete.itemAdded", function(datamoto) {
			selectmoto(datamoto);
		});
		
	}

	filter2.on("fluig.autocomplete.itemRemoved", function(event) {

		let itemSelecionado = event.item;
		$("#nomemoto").val('');

	});

}