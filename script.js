const linkedin = "https://www.linkedin.com/in/renato-jose";
        function redirecionar(){
            window.open(linkedin, "_blank");
        }

        const Whatsapp = ""
        function whatszap(){
            window.open(Whatsapp, "_blank")
        }

        function baixar() {
        const link = document.createElement("a");
        link.href = "RenatoCurriculo.pdf";
        link.download = "RenatoCurriculo.pdf";
        link.click();
  }