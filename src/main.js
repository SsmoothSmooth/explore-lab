import "./css/index.css"

// DOM para as cores do cartão
const ccBgColor01 = document.querySelector(".cc-bg svg > g g:nth-child(1) path")
const ccBgColor02 = document.querySelector(".cc-bg svg > g g:nth-child(2) path")

// DOM para icone do cartão
const ccLogo = document.querySelector(".cc-logo span:nth-child(2) img")

// Função para mudar as cores e o icone do cartão
function setCardType(type) {
  // Estrutura de dados para as cores
  const colors = {
    visa: ["#436D99", "#2D57F2"],
    mastercard: ["#DF6F29", "#C69347"],
    cielo: ["#000000", "#E32DF2"],
    roka: ["#0B402A", "#2D57F2"],
    default: ["black", "gray"],
  }

  ccBgColor01.setAttribute("fill", colors[type][0])
  ccBgColor02.setAttribute("fill", colors[type][1])
  ccLogo.setAttribute("src", `cc-${type}.svg`)
}

globalThis.setCardType = setCardType
