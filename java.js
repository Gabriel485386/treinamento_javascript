const modal = document.querySelector("#modal");
const fade = document.querySelector("#modal-fade");

function abrirFechar(){
   fade.classList.toggle("show")
    modal.classList.toggle("show")
}


const check = document.querySelector("#check");

function mascaratelefone() {
  var tel_formatado = document.getElementById("telefone").value
  if (tel_formatado[0] != "(") {
      if (tel_formatado[0] != undefined) {
          document.getElementById("telefone").value = "(" + tel_formatado[0];
      }
  }

  if (tel_formatado[3] != ")") {
      if (tel_formatado[3] != undefined) {
          document.getElementById("telefone").value = tel_formatado.slice(0, 3) + ")" + tel_formatado[3]
      }
  }

  if (tel_formatado[9] != "-") {
      if (tel_formatado[9] != undefined) {
          document.getElementById("telefone").value = tel_formatado.slice(0, 9) + "-" + tel_formatado[9]
      }
  }
  localStorage.setItem("telefone", tel_formatado)
}

addEventListener("DOMContentLoaded",()=>{
    var tel_recebido = localStorage.getItem("telefone")
    document.getElementById("tel").value=tel_recebido
      })





  function cpf() {
    var cpff = document.getElementById("newcpf").value
    if (cpff[3] != ".") {
        if (cpff[3] != undefined) {
            document.getElementById("newcpf").value = cpff.slice(0, 3) + "." + cpff[3]
        }
    }

    if (cpff[7] != ".") {
        if (cpff[7] != undefined) {
            document.getElementById("newcpf").value = cpff.slice(0, 7) + "." + cpff[7]
        }
    }

    if (cpff[11] != "-") {
        if (cpff[11] != undefined) {
            document.getElementById("newcpf").value = cpff.slice(0, 11) + "-" + cpff[11]
        }
    }
    localStorage.setItem("newcpf", cpff)
}

addEventListener("DOMContentLoaded",()=>{
    var cpf_recebido = localStorage.getItem("newcpf")
    document.getElementById("cpf").value=cpf_recebido
})

function nome(){
  var nome = document.getElementById("name").value
localStorage.setItem("nome", nome)
}

addEventListener("DOMContentLoaded", () => {
  var nome_recebido = localStorage.getItem("nome")
  document.getElementById("nome").value = nome_recebido
})


function email(){
    var email = document.getElementById("emaill").value
  localStorage.setItem("email", email)
  }
  
  addEventListener("DOMContentLoaded", () => {
    var email_recebido = localStorage.getItem("email")
    document.getElementById("email").value = email_recebido
  })

  function senha(){
    var senha = document.getElementById("sanha").value
  localStorage.setItem("senha", senha)
  }
  
  addEventListener("DOMContentLoaded", () => {
    var senha_recebido = localStorage.getItem("senha")
    document.getElementById("senha").value = senha_recebido
  })