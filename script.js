// sweet alert
let popUp = document.querySelector(".pop-up-mensaje");

popUp.addEventListener("click", aviso)

function aviso(){
    Swal.fire({
        position: 'top',
        icon: 'success',
        title: 'Mensaje enviado ¡Gracias por confiar en CMT Seguros!',
        showConfirmButton: false,
        timer: 1500
      })
}