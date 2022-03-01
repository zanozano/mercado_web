// animate
function imageSelected(data) {
	console.log(data);
	let photoVegetal = data.querySelector('.card-img-top');
	let descriptionVegetal = data.querySelector('.card-img-top').alt;
	$('.modal-body #photo-vegetal').attr('src', photoVegetal.src);
	$('.modal-body #descripcion-vegetal').html(descriptionVegetal);
}
