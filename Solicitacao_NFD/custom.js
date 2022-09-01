//$(window).on("load", function () {
	
	//var activity = getValue('WKNumState');

	 //if (activity == 4 || activity == 0) {

		 // carrega a data
		 //$("datasolicitacao").val(moment().format('YYYY-MM-DD'));
	 //}
	 //if (activity == 5) {
		 //$("dataemissao").val(moment().format('YYYY-MM-DD'));
		 
		// Carregar nome do usuário
        // var usuario = getValue("WCMAPI.user"); form.setValue("nomeemissao", usuario);
	// }
//});

//====================================================================================================================================================

$(window).on("load", function () {

	var d = new Date();
	var dataForm = d.getDate() + "/" + (d.getMonth()+1) + "/" + d.getFullYear();


    if (currentTask == 4 || currentTask == 0) {

		$(".nameSol").val(parent.WCMAPI.user);
		$("#dataSolEnt").val(dataForm);
		$("#dataSolPosEnt").val(dataForm);

		$("#painelPosEntrega").hide();
		$("#painelEntrega").hide();
		$("#panel_itens").hide();

		$("#panel_dadosemissao").hide();

		$("#TipoSolicitacao").on("change", ()=>{

			var TipoSolicitacao = $("#TipoSolicitacao").val();

			if(TipoSolicitacao === " "){
				$("#painelPosEntrega").hide();
				$("#painelEntrega").hide();
				$("#panel_itens").hide();
			}
	
			if(TipoSolicitacao === "entrega"){
				$("#painelPosEntrega").hide();
				$("#painelEntrega").show();
				$("#panel_itens").hide();
			}
	
			if(TipoSolicitacao === "posentrega"){
				$("#painelPosEntrega").show();
				$("#painelEntrega").hide();
				$("#panel_itens").show();
			}

			$("#resuPrimeiraParte").val(TipoSolicitacao);

		})
	}

	if (currentTask == 5){

		$("#nomeemissao").val(parent.WCMAPI.user);
		$("#textboxData").val(dataForm);

		$("#buttonItem").css("display","none");

		$("#painelEntrega select, #painelPosEntrega select, #TipoSolicitacao, #tabledetailname2").css("pointer-events","none");

		$("#TipoSolicitacao").attr({"readonly": "readonly"});
		
		$("#painelEntrega input, #painelEntrega select, #painelEntrega textarea").attr({"readonly": "readonly"});

		$("#painelPosEntrega input, #painelPosEntrega select, #painelPosEntrega textarea").attr({"readonly": "readonly"});

		$("#tabledetailname2 input, #tabledetailname2 textarea").attr({ "readonly": "readonly"});

		var resu = $("#resuPrimeiraParte").val();

		if(resu === "entrega"){
			$("#painelPosEntrega").hide();
			$("#painelEntrega").show();
			$("#panel_itens").hide();
		}

		if(resu === "posentrega"){
			$("#painelPosEntrega").show();
			$("#painelEntrega").hide();
			$("#panel_itens").show();
		}

	}

	if (currentTask == 11){

		var textoSpanResu = $("#resuPrimeiraParte").val();

		$("#buttonItem").css("display","none");

		$("#emissaoNFD span").css({"background-color": "#f1f1f1",
									"padding":"10px",
									"margin":"5px",
									"border":"solid 1px #d1d1d1",
									"border-radius":"5px"});

		if(textoSpanResu === "entrega"){
			$("#panel_itens").hide();
			$("#painelEntrega").show();
			$("#painelPosEntrega").hide();
		}

		if(textoSpanResu === "posentrega"){
			$("#painelPosEntrega").show();
			$("#painelEntrega").hide();
			$("#panel_itens").show();
		}

	}
});
