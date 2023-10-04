const generateBtn = document.querySelector('form button');
const qrCodeBox = document.querySelector('.qr-code');
const qrInput = document.querySelector('form input');
const qrImage = document.querySelector('.qr-code img');


generateBtn.addEventListener('click' , () => {
    let qrValu = qrInput.value;
    if(!qrValu){
        return alert('لطفا یک متن وارد کنید')
    }
    generateBtn.innerText = 'در حال دریافتQR Code'
    qrImage.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${qrValu}`
    qrImage.addEventListener('load' , ()=>{
        qrCodeBox.classList.remove('hidden')
        generateBtn.innerText = 'تولید QR Code'
    })
})
qrInput.addEventListener('keyup' , () => {
    if(!qrInput.value){
        qrCodeBox.classList.add('hidden')
    }
})