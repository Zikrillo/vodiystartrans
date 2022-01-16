document.addEventListener('DOMContentLoaded',()=>{
    var button = document.getElementById("btnburger");
    var panel = document.getElementById("panel");
    var darkbg = document.querySelector(".dark");
    button.addEventListener('click',()=>{
        document.body.classList.toggle('bdb');
        panel.classList.toggle('panelnext');
        if(darkbg.style.display == 'block'){
            darkbg.style.display = 'none';
        }else{
            darkbg.style.display = 'block';
        }
    });
    darkbg.addEventListener('click', ()=>{
        document.body.classList.toggle('bdb');
        panel.classList.toggle('panelnext');
        if(darkbg.style.display == 'block'){
            darkbg.style.display = 'none';
        }else{
            darkbg.style.display = 'block';
        }
    });
});
