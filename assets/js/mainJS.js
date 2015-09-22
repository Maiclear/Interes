$(document).ready(function() {
	// pag web para calcular el valor de cuotas a pagar al ingresar un valor en uf , un porcentaje de interes, interes simple (por el total de los meses de acuerdo a la cantidad de cuotas q uno diga)
// interes base 0.8 % mensual , el interes aumenta según la cantidad de cuotas. cto saldrá pedir un prestamo.

// dar de resultado : ( que retorne)

// el valor inicial de la uf en pesos,
// el valor total a pagar,
// y el valor de la cuota. ( en x cuotas de y valor)

// usando la api de mindicador.cl ( usando el dato de la uf.)

// hay que usar los inputs ( rescatando los valores con jQuery.)

// un input con valor a pedir,
// y un input con la cantidad de cuotas.

// el interes se multiplica por la cantidad de meses.

// luego crear github. git init
	var uf;
	var pesos;
	var numcuotas;
	var interes = 0.015;
	var interesFinal;
	var valorTotal;
	var valorcuota;

	$.ajax({
		url: 'http://www.mindicador.cl/api',
		type: 'GET',
		dataType: 'json'
	})
	.done(function(data){
		console.log(data);
		uf = data.uf.valor;
//sCALCULO DE UF A PESOS //
		$(".trans-btn").click(function(e){
				e.preventDefault();
		// $('input-uf').enterkey(function(e) {

				pesos = ($('.input-uf').val())*uf ;
				$('.muestra-pesos').val(pesos);

				});

		// calculo de todo lo demas
		$(".calcula-btn").click(function(e){
			e.preventDefault();
					//numero de cuotas
			numcuotas = $('.num-cuotas').val();
				if ( numcuotas == 0 || numcuotas == ""){
					alert("Ingresa el número de cuotas");
					// location.reload();
				}
				else{
				//interes final
					interesfinal = (interes*pesos*numcuotas);
					//valor total
					valorTotal= $('.valor-total').val(interesfinal + pesos).val();
					//valor cuota
					valorcuota = valorTotal/numcuotas;
					// console.log(valorcuota);
					$('.valor-cuota').val(valorcuota);
					}
				});

		$('#miboton').click(function(e) {
		 e.preventDefault();

		 // Recargo la página
		location.reload();
		$("input").val("");

		});
	})
	.fail(function(err){
		alert('Error:' + err.status );
	});









	// if(location.reload()){
	// 	$("input").val("");

	// }
	// else{

	// }















});
