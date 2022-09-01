function displayFields(form, customHTML) {
	var activity = getValue('WKNumState');
	var numProc = getValue('WKNumProces');
	var cardId = getValue("WKCardId");
	var useWK = getValue("WKUser");
	var nomewk = fluigAPI.getUserService().getCurrent().getFullName();

	customHTML.append("<script>");
	customHTML.append("var currentTask='" + activity + "';");
	customHTML.append("var cardId='" + cardId + "';");
	customHTML.append("var currentuseWK='" + useWK + "';");
	customHTML.append("var nomecurrent='" + nomewk + "';");
	customHTML.append("var currentProc='" + numProc + "';");
	customHTML.append("</script>");
	
// 	if (activity == 4 || activity == 0) {
// 		customHTML.append('<script>');
// 		customHTML
// 				.append('$(\'*[name="comboAutoriGere"]\').css(\'display\', \'none\');var closers = $(\'*[name="comboAutoriGere"]\').closest(\'.form-field\').find(\'input, textarea, select\');var hideDiv = true;$.each(closers, function(i, close) {if (close.style.display != \'none\' && close.type != \'hidden\') {hideDiv = false;}});if (hideDiv == true) {$(\'*[name="comboAutoriGere"]\').closest(\'.form-field\').css(\'display\', \'none\');}');
// 		customHTML.append('</script>');
// 		customHTML.append('<script>');
// 		customHTML.append('$(\'*[name="comboAutoriGere"]\').closest("li").hide()');
// 		customHTML.append('</script>');
// 		customHTML.append('<script>');
// 		customHTML
// 				.append('$(\'*[name="comboAutoriz"]\').css(\'display\', \'none\');var closers = $(\'*[name="comboAutoriz"]\').closest(\'.form-field\').find(\'input, textarea, select\');var hideDiv = true;$.each(closers, function(i, close) {if (close.style.display != \'none\' && close.type != \'hidden\') {hideDiv = false;}});if (hideDiv == true) {$(\'*[name="comboAutoriz"]\').closest(\'.form-field\').css(\'display\', \'none\');}');
// 		customHTML.append('</script>');
// 		customHTML.append('<script>');
// 		customHTML
// 				.append('$(\'*[name="comboAutoriz"]\').closest("li").hide()');
// 		customHTML.append('</script>');
// 		customHTML.append('<script>');
// 		customHTML
// 				.append('$(\'*[name="textboxLib_em"]\').css(\'display\', \'none\');var closers = $(\'*[name="textboxLib_em"]\').closest(\'.form-field\').find(\'input, textarea, select\');var hideDiv = true;$.each(closers, function(i, close) {if (close.style.display != \'none\' && close.type != \'hidden\') {hideDiv = false;}});if (hideDiv == true) {$(\'*[name="textboxLib_em"]\').closest(\'.form-field\').css(\'display\', \'none\');}');
// 		customHTML.append('</script>');
// 		customHTML.append('<script>');
// 		customHTML
// 				.append('$(\'*[name="textboxLib_em"]\').closest("li").hide()');
// 		customHTML.append('</script>');
// 	}
// 	if (activity == 7) {
// 		customHTML.append('<script>');
// 		customHTML
// 				.append('$(\'*[name="comboAutoriz"]\').css(\'display\', \'none\');var closers = $(\'*[name="comboAutoriz"]\').closest(\'.form-field\').find(\'input, textarea, select\');var hideDiv = true;$.each(closers, function(i, close) {if (close.style.display != \'none\' && close.type != \'hidden\') {hideDiv = false;}});if (hideDiv == true) {$(\'*[name="comboAutoriz"]\').closest(\'.form-field\').css(\'display\', \'none\');}');
// 		customHTML.append('</script>');
// 		customHTML.append('<script>');
// 		customHTML
// 				.append('$(\'*[name="comboAutoriz"]\').closest("li").hide()');
// 		customHTML.append('</script>');
// 		customHTML.append('<script>');
// 		customHTML
// 				.append('$(\'*[name="textboxLib_em"]\').css(\'display\', \'none\');var closers = $(\'*[name="textboxLib_em"]\').closest(\'.form-field\').find(\'input, textarea, select\');var hideDiv = true;$.each(closers, function(i, close) {if (close.style.display != \'none\' && close.type != \'hidden\') {hideDiv = false;}});if (hideDiv == true) {$(\'*[name="textboxLib_em"]\').closest(\'.form-field\').css(\'display\', \'none\');}');
// 		customHTML.append('</script>');
// 		customHTML.append('<script>');
// 		customHTML
// 				.append('$(\'*[name="textboxLib_em"]\').closest("li").hide()');
// 		customHTML.append('</script>');		
// 	}
	
// 	if (activity == 11) {
// 		customHTML.append('<script>');
// 		customHTML
// 				.append('$(\'*[name="valor"]\').css(\'display\', \'none\');var closers = $(\'*[name="valor"]\').closest(\'.form-field\').find(\'input, textarea, select\');var hideDiv = true;$.each(closers, function(i, close) {if (close.style.display != \'none\' && close.type != \'hidden\') {hideDiv = false;}});if (hideDiv == true) {$(\'*[name="valor"]\').closest(\'.form-field\').css(\'display\', \'none\');}');
// 		customHTML.append('</script>');
// 		customHTML.append('<script>');
// 		customHTML
// 				.append('$(\'*[name="valor"]\').closest("li").hide()');
// 		customHTML.append('</script>');	
// 	}
	
// 	if (activity == 15) {
// 		customHTML.append('<script>');
// 		customHTML
// 				.append('$(\'*[name="valor"]\').css(\'display\', \'none\');var closers = $(\'*[name="valor"]\').closest(\'.form-field\').find(\'input, textarea, select\');var hideDiv = true;$.each(closers, function(i, close) {if (close.style.display != \'none\' && close.type != \'hidden\') {hideDiv = false;}});if (hideDiv == true) {$(\'*[name="valor"]\').closest(\'.form-field\').css(\'display\', \'none\');}');
// 		customHTML.append('</script>');
// 		customHTML.append('<script>');
// 		customHTML
// 				.append('$(\'*[name="valor"]\').closest("li").hide()');
// 		customHTML.append('</script>');	
// 	}
 }