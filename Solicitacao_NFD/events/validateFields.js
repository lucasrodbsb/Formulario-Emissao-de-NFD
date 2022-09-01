function validateForm(form) {

	var CURRENT_STATE = getValue("WKNumState");

	// inicio
	// if (CURRENT_STATE == 0 || CURRENT_STATE == 4) {

	// 	if (form.getValue('numberFilial') == "") {
	// 		throw "Campo Filial é obrigatório\n";
	// 	}

	// 	if (form.getValue('chapa') == "") {
	// 		throw "Campo Matricula é obrigatório\n";
	// 	}
	// }

	// // atividade autorização do gerente
	if (CURRENT_STATE == 5) {

		if (form.getValue("numeroNFD") == "") {
			throw "Campo Número NFD é obrigatório\n";
		}

	}
	
	// // atividade Autorização do Gerente RH
	// if (CURRENT_STATE == 11) {

	// 	if (form.getValue('comboAprovado') == "") {
	// 		throw "Campo Autorização Gerente de RH é obrigatório\n";
	// 	}
		
	// 	if (form.getValue('textboxLib_em') == "") {
	// 		throw "Campo Data da liberação é obrigatório\n";
	// 	}
	// }
} 