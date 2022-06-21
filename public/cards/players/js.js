

const downloads = () =>{
  alert('exportar')
  html2canvas(document.querySelector("#cards")).then(canvas => {
    let img = canvas.toDataURL("dida/png")

    let link = document.createElement('a')
    link.download = 'rogerio-ceni.png'
    link.href = img
    link.click()
  });
}

document.getElementById("boton").onclick = function (){
  downloads()
}