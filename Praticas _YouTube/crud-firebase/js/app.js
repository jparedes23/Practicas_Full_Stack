
const openModal = document.getElementById('openregisterModal');
const modal = document.getElementById('modal');
const closeModal = document.getElementById('closeRegisterModal');

const registerForm = document.getElementById('register-form');





function showResgitermodal() {
    modal.classList.toggle('is-active');
}

openModal.addEventListener('click', showResgitermodal);
closeModal.addEventListener('click',showResgitermodal);

registerForm.addEventListener('submit',(e)=>{
    e.preventDefault()

    const nombre = registerForm['nombre'].value;
    const apellidoPa = registerForm['apePa'].value;
    const apellidoMa = registerForm['apeMat'].value;
    const phone = registerForm['phone'].value;
    const email = registerForm['email'].value;
    const text = registerForm['desc'].value;

    const registerStudent = studentRef.push();
    registerStudent.set({
        Uid : registerStudent.path.pieces_[1]
    })
})
