const year = document.getElementById("year")
const thisYear = new Date().getFullYear()
year.setAttribute("datetime", thisYear)
year.textContent = thisYear

/* const bodyE1=document.body;
const barE1 = document.querySelector('.bar');
const updateBar =() => {
    let scrollpos =(window.scroll / (bodyE1.scrollHeight - window.innerHeight)) * 100;
    barE1.getElementsByClassName.width = `${scrollpos}%`;
    requestAnimationFrame(updateBar);

};
updateBar(); */