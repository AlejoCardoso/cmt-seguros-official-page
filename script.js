// sweet alert
let popUp = document.querySelector(".pop-up-mensaje");

popUp.addEventListener("click", aviso)

function aviso(){
    const Toast = Swal.mixin({
        toast: true,
        position: 'top',
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
      })
      
      Toast.fire({
        icon: 'success',
        title: 'Mensaje enviado ¡Gracias por confiar en CMT Seguros!'
      })
}