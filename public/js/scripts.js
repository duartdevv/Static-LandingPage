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
})
