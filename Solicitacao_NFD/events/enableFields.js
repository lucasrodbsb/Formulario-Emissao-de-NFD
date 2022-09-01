function enableFields(form) {
	var activity = getValue('WKNumState');
	// if (activity == 4) {
	// 	form.setEnabled('comboAutoriz', false);
	// 	form.setEnabled('comboAutoriGere', false);
	// 	form.setEnabled('textboxLib_em', false);
	
	// }
	
	if (activity == 5) {
		form.setEnabled('dataocor', false);
		form.setEnabled('tipoOcorrenciasup', false);
		form.setEnabled('periodosup', false);
		form.setEnabled('obsocor', false);
		// form.setEnabled('suspencao', false);
	}
	
	// if (activity == 11) {
	// 	form.setEnabled('textboxData_Sol', false);
	// 	form.setEnabled('numberFilial', false);
	// 	form.setEnabled('chapa', false);
	// 	form.setEnabled('codchapa', false);
	// 	form.setEnabled('validaFilterNome', false);
	// 	form.setEnabled('codigocol', false);
	// 	form.setEnabled('textboxNomeColo', false);
	// 	form.setEnabled('CPF', false);
	// 	form.setEnabled('comboAutoriGere', false);

	// }
}