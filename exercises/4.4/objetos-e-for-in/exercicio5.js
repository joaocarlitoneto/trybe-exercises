let info = {
    personagem: "Margarida",
    origem: "Pato Donald",
    nota: "Namorada do personagem principal nos quadrinhos do Pato Donald",
    recorrente: "Sim"
};

let info2 = {
    personagem: "Tio Patinhas",
    origem: "Christmas on Bear Mountain, Dell's Four Color Comics #178",
    nota: "O último MacPatinhas",
    recorrente: "Sim"
}

for (let propriedade in info) {
    if (info[propriedade] === info.recorrente && info[propriedade] === "Sim" && info2[propriedade] === "Sim") {
        console.log("Ambos recorrentes")
    } else {
        console.log(info[propriedade] + " e " + info2[propriedade])
    }
}