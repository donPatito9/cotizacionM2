$(function() {
    $('.boton').on('click',function(){
      
      var nombre = $('#inputNombres').val();
  
      if(nombre == null || nombre.length == 0){
        alert('ERROR: El campo Nombres no debe ir vacío'+nombre);
        $('#imputNombres').addClass('error');
        $('#imputNombres').removeClass('exito');
      }else{
         $('#inputNombres').removeClass('error');
         $('#inputNombres').addClass('exito');
      }
       
      var apellido = $('#inputApellidos').val();

      if(apellido == null || apellido.length == 0){
        alert('ERROR: El campo Apellidos no debe ir vacío'+apellido);
        $('#inputApellidos').addClass('error');
        $('#inputApellidos').removeClass('exito');
      }else{
         $('#inputApellidos').removeClass('error');
         $('#inputApellidos').addClass('exito');
      }

      var direccion = $('#inputDireccion').val();

      if(direccion == null || direccion.length == 0){
        alert('ERROR: El campo Direccion no debe ir vacío'+direccion);
        $('#inputDireccion').addClass('error');
        $('#inputDireccion').removeClass('exito');
      }else{
         $('#inputDireccion').removeClass('error');
         $('#inputDireccion').addClass('exito');
      }
       
      var email = $('#inputEmail').val();
  
      if(email == null || email.length == 0){
        alert('ERROR: Escriba un email valido'+email);
        $('#inputEmail').addClass('error');
        $('#inputEmail').removeClass('exito');
      }else{
        $('#inputEmail').removeClass('error');
        $('#inputEmail').addClass('exito');
      }
     
      var ancho = $('#primerNumero').val();

      if(ancho == null || ancho.length == 0){
        alert('ERROR: El campo no puede estar vacio'+ancho);
        $('#primerNumero').addClass('error');
        $('#primerNumero').removeClass('exito');
      }else{
        $('#primerNumero').removeClass('error');
        $('#primerNumero').addClass('exito');
      }
     
      var largo = $('#segundoNumero').val();

      if(largo == null || largo.length == 0){
        alert('ERROR: El campo no puede estar vacio'+largo);
        $('#segundoNumero').addClass('error');
        $('#segundoNumero').removeClass('exito');
      }else{
        $('#segundoNumero').removeClass('error');
        $('#segundoNumero').addClass('exito');
      }
    })
  });
  $(function() {
    $('.boton').on('blur',function(){
      
      var nombre = $('#inputNombres').val();
  
      if(nombre == null || nombre.length == 0){
        alert('ERROR: El campo Nombres no debe ir vacío'+nombre);
        $('#imputNombres').addClass('error');
        $('#imputNombres').removeClass('exito');
      }else{
         $('#inputNombres').removeClass('error');
         $('#inputNombres').addClass('exito');
      }
       
      var apellido = $('#inputApellidos').val();

      if(apellido == null || apellido.length == 0){
        alert('ERROR: El campo Apellidos no debe ir vacío'+apellido);
        $('#inputApellidos').addClass('error');
        $('#inputApellidos').removeClass('exito');
      }else{
         $('#inputApellidos').removeClass('error');
         $('#inputApellidos').addClass('exito');
      }

      var direccion = $('#inputDireccion').val();

      if(direccion == null || direccion.length == 0){
        alert('ERROR: El campo Direccion no debe ir vacío'+direccion);
        $('#inputDireccion').addClass('error');
        $('#inputDireccion').removeClass('exito');
      }else{
         $('#inputDireccion').removeClass('error');
         $('#inputDireccion').addClass('exito');
      }
       
      var email = $('#inputEmail').val();
  
      if(email == null || email.length == 0){
        alert('ERROR: Escriba un email valido'+email);
        $('#inputEmail').addClass('error');
        $('#inputEmail').removeClass('exito');
      }else{
        $('#inputEmail').removeClass('error');
        $('#inputEmail').addClass('exito');
      }
     
      var ancho = $('#primerNumero').val();

      if(ancho == null || ancho.length == 0){
        alert('ERROR: El campo no puede estar vacio'+ancho);
        $('#primerNumero').addClass('error');
        $('#primerNumero').removeClass('exito');
      }else{
        $('#primerNumero').removeClass('error');
        $('#primerNumero').addClass('exito');
      }
     
      var largo = $('#segundoNumero').val();

      if(largo == null || largo.length == 0){
        alert('ERROR: El campo no puede estar vacio'+largo);
        $('#segundoNumero').addClass('error');
        $('#segundoNumero').removeClass('exito');
      }else{
        $('#segundoNumero').removeClass('error');
        $('#segundoNumero').addClass('exito');
      }
    })
  });
function multiplicar() {
event.preventDefault(); //evita que se recargue la página
var val1 = parseFloat(document.getElementById('primerNumero').value);
var val2 = parseFloat(document.getElementById('segundoNumero').value);
     
multi = val1 * val2;
total = multi * 900;

document.getElementById("resultado").innerHTML = multi;
document.getElementById("total").innerHTML = total;
};
