function onclick_ir() {

    window.open('https://github.com/Lucas-Saraiva/APS_Mobilidade_Urbana')

}

function limpar_componentes() {

    document.getElementById("validationDefault01").value = "";
    document.getElementById("sel_estado").value = "";
    document.getElementById("validationDefault03").value = "";
    document.getElementById("validationDefault04").value = "";

}

function enviar_dados() { }

function onclick_enviar() {

    limpar_componentes()
    enviar_dados()

}

function on_calc_co2() {

    automovel = document.getElementById("automovel").value;
    kmRodado = document.getElementById("kmRodado").value;

    if (kmRodado <= 0) {
        alert("Informar uma kilometragem maior que zero!");
    } else {
        var kmLitro;

        modeloCarro = document.getElementById("modeloCarro").value;
        modeloMoto = document.getElementById("modeloMoto").value;
        combustivel = document.getElementById("combustivel").value;

        if (automovel == 1) {

            switch (modeloCarro) {
                case "1":
                    switch (combustivel) {
                        case "1":
                            kmLitro = 16;
                            break;
                        case "2":
                            kmLitro = 12;
                            break;
                        case "3":
                            kmLitro = 24;
                            break;
                    }
                    break;
                case "2":
                    switch (combustivel) {
                        case "1":
                            kmLitro = 12;
                            break;
                        case "2":
                            kmLitro = 10;
                            break;
                        case "3":
                            kmLitro = 22;
                            break;
                    }
                    break;

                case "3":
                    switch (combustivel) {
                        case "1":
                            kmLitro = 8;
                        case "2":
                            kmLitro = 6;
                        case "3":
                            kmLitro = 18;
                    }
                    break;
            }

        } else if (automovel == 2) {
            switch (modeloCarro) {
                case "1":
                    kmLitro = 50;
                    break;
                case "2":
                    kmLitro = 40;
                    break;
                case "3":
                    kmLitro = 35;
                    break;
            }
        }

        var co2Emitido = ((kmRodado / kmLitro) * 2.3) / 1000;
        var co2EmitidoFormatado = co2Emitido.toFixed(3).replace(".", ",") + "G";
        var valorEconomia = co2Emitido * 26;
        var valorEconomiaFormatado = valorEconomia.toFixed(2).replace(".", ",");

        document.getElementById("co2Emitido").value = co2EmitidoFormatado;
        document.getElementById("valorEconomia").value = valorEconomiaFormatado;

    }

}

function alterarInputs() {

    var automovelSelect = document.getElementById("automovel");
    var modeloMotoInput = document.getElementById("idModeloMoto");
    var modeloCarroInput = document.getElementById("idModeloCarro");
    var combustivelInput = document.getElementById("idCombustivel");

    if (automovelSelect.value === "1") {
        modeloMotoInput.style.display = "none";
    } else {
        modeloMotoInput.style.display = "block";
    }

    if (automovelSelect.value === "2") {
        modeloCarroInput.style.display = "none";
        combustivelInput.style.display = "none";
    } else {
        modeloCarroInput.style.display = "block";
        combustivelInput.style.display = "block";
    }

}