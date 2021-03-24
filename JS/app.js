
document.getElementById("introBtn").addEventListener("mouseover", makeOpac);
function makeOpac(){
    let btn = document.getElementById("introBtn");
    btn.style.transition = 'all 1s ease';
    btn.style.opacity = '1';
    btn.style.width = '35rem';
    btn.style.fontSize = '2rem';
}


document.getElementById("introBtn").addEventListener("mouseout", returnOpac);
function returnOpac(){
    let btn = document.getElementById("introBtn");
    btn.style.transition = 'all 1s ease';
    btn.style.opacity = '0.5';
    btn.style.width = '30rem'
    btn.style.fontSize = '1.5rem';
}

document.getElementById('introBtn').addEventListener('click', inputSlide);
function inputSlide() {
    let inputs = document.getElementById('inputs');
    inputs.style.transition = 'all 1s ease';
    inputs.style.transform = 'translateY(0rem)';    
}

document.getElementById('tipBtn').addEventListener("mouseover", opac);
function opac() {
        let btn = document.getElementById('tipBtn');
        btn.style.transition = 'all 1s ease';
        btn.style.opacity = '1'; 
        btn.style.width = '75%';
        btn.style.fontSize = '2.5rem';
}

document.getElementById('tipBtn').addEventListener('mouseout', rtrnOpac);
function rtrnOpac() {
    let btn = document.getElementById('tipBtn');
    btn.style.transition = 'all 1s ease';
    btn.style.opacity = '0.5';
    btn.style.width = '60%';
    btn.style.fontSize = '2rem;'
}

document.getElementById('tipBtn').addEventListener('click', tipSlide);
function tipSlide() {
        let tip = document.getElementById('total');
        tip.style.transition = 'all 1s ease';
        tip.style.transform = 'translateY(0rem)';
}

document.getElementById('tipBtn').addEventListener('click', calculate);
function calculate() {
    let bill = document.getElementById('bill').value;
    let tip = document.getElementById('tip').value / 100;
    let totalTip = bill * tip;
    document.getElementById('tipAmount').innerHTML = `$ ${totalTip}`;
}

document.getElementById('totalBtn').addEventListener('mouseover', opc);
function opc() {   
    let btn = document.getElementById('totalBtn');
    btn.style.transition = 'all 1s ease'; 
    btn.style.opacity = '1';
    btn.style.width = '100%';
    btn.style.fontSize = '2rem';
}

document.getElementById('totalBtn').addEventListener('mouseout', rtrnOpc);
function rtrnOpc() {    
    let btn = document.getElementById('totalBtn');
    btn.style.transition = 'all 1s ease';
    btn.style.opacity = '0.5';
    btn.style.width = '75%';
    btn.style.fontSize = '1.5rem';
}

document.getElementById('totalBtn').addEventListener('click', reset);
function reset() {
    window.location.reload();
}

document.getElementById('footerTxt').addEventListener('mouseover', op); 
function op() {
    document.getElementById('footerTxt').style.opacity = '1'
}

document.getElementById('footerTxt').addEventListener('mouseout', rop); 
function rop() {
    document.getElementById('footerTxt').style.opacity = '0.5';
}








