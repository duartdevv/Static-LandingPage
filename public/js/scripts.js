console.log("Script carregado")
document.addEventListener("DOMContentLoaded", () => {
  let h1 = document.getElementById("h1top")
  h1.innerText = ""

  let i = 0
  const text = "DuartTech"
  function typeWriter() {
    if (i < text.length) {
      h1.innerText += text.charAt(i)
      i++
      setTimeout(typeWriter, 150)
    }
  }

  typeWriter()
}) // NOTA: O efeito de TYPEWRITER, pode não funcionar caso o arquivo seja rodado com o servidor Node. Com o live-server o efeito roda normalmente

