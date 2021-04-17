//Varijable
let input = document.getElementById("input");
let result = document.getElementById("result");
let inputBlock = document.querySelector(".inputblock");
let resultBlock = document.querySelector(".resultblok");
let onChangeVelicina = document.querySelector("#velicine");
let selectVelicina = document.querySelector("select.velicina");
let selectDivInput = document.querySelector(".jediniceInput");
let selectDivResult = document.querySelector(".jediniceResult");
let buttonPretvori = document.querySelector(".pretvori");

let pretvorbeList = document.querySelector(".pretvorba-list");
let inputTypeValue, resultTypeValue;

//Niz za rad sa local storagom
let pretvorbe = [];
// Mijenjanje menua u odnosu na izabranu velicinu
function provjeriVelicinu() {
  //   const div = document.createElement("div");

  selectDivInput.innerHTML = "";
  selectDivResult.innerHTML = "";
  if (selectVelicina.options[selectVelicina.selectedIndex].value === "duzina") {
    selectDivInput.innerHTML = `
        <select class="inputs" id="inputType">
                <option value="metar">Metar</option>
                <option value="kilometar">Kilometar</option>
                <option value="centimetar">Centimetar</option>
                <option value="milimetar">Milimetar</option>
              </select>
    `;
    selectDivResult.innerHTML = ` <select class="inputs" id="resultType">
                 <option value="metar">Metar</option>
                <option value="kilometar">Kilometar</option>
                <option value="centimetar">Centimetar</option>
                <option value="milimetar">Milimetar</option>
              </select>
    `;
  } else if (
    selectVelicina.options[selectVelicina.selectedIndex].value === "masa"
  ) {
    selectDivInput.innerHTML = `
        <select class="inputs" id="inputType">
                <option value="tona">Tona</option>
                <option value="kilogram">Kilogram</option>
                <option value="dekagram">Dekagram</option>
                <option value="gram">Gram</option>
                
              </select>
    `;
    selectDivResult.innerHTML = ` <select class="inputs" id="resultType">
                <option value="tona">Tona</option>
                <option value="kilogram">Kilogram</option>
                <option value="dekagram">Dekagram</option>
                <option value="gram">Gram</option>
               
              </select>
    `;
  }
}

function izracunajVrijednost(input, inputVelicina) {
  let tempPretvorba;
  let inputType = document.getElementById("inputType");
  let inputTypeValue = inputType.options[inputType.selectedIndex].value;
  let resultType = document.getElementById("resultType");
  let resultTypeValue = resultType.options[resultType.selectedIndex].value;

  if (inputVelicina === "duzina") {
    if (inputTypeValue === "metar" && resultTypeValue === "kilometar") {
      result.value = input.value * 0.001;
    } else if (inputTypeValue === "metar" && resultTypeValue === "centimetar") {
      result.value = Number(input.value) * 100;
    } else if (inputTypeValue === "metar" && resultTypeValue === "metar") {
      result.value = input.value;
    } else if (inputTypeValue === "metar" && resultTypeValue === "milimetar") {
      result.value = input.value * 1000;
    }

    if (inputTypeValue === "kilometar" && resultTypeValue === "metar") {
      result.value = Number(input.value) * 1000;
    } else if (
      inputTypeValue === "kilometar" &&
      resultTypeValue === "Centimetar"
    ) {
      result.value = Number(input.value) * 100000;
    } else if (
      inputTypeValue === "kilometar" &&
      resultTypeValue === "kilometar"
    ) {
      result.value = input.value;
    } else if (
      inputTypeValue === "kilometar" &&
      resultTypeValue === "milimetar"
    ) {
      result.value = Number(input.value) * 1000000;
    }

    if (inputTypeValue === "centimetar" && resultTypeValue === "kilometar") {
      result.value = Number(input.value) * 0.00001;
    } else if (inputTypeValue === "centimetar" && resultTypeValue === "metar") {
      result.value = Number(input.value) * 0.01;
    } else if (
      inputTypeValue === "centimetar" &&
      resultTypeValue === "centimetar"
    ) {
      result.value = input.value;
    } else if (
      inputTypeValue === "centimetar" &&
      resultTypeValue === "milimeter"
    ) {
      result.value = Number(input.value) * 10;
    }

    if (inputTypeValue === "milimetar" && resultTypeValue === "kilometar") {
      result.value = (Number(input.value) * 0.000001).toFixed(7);
    } else if (inputTypeValue === "milimetar" && resultTypeValue === "metar") {
      result.value = (Number(input.value) * 0.001).toFixed(5);
    } else if (
      inputTypeValue === "milimetar" &&
      resultTypeValue === "milimetar"
    ) {
      result.value = input.value;
    } else if (
      inputTypeValue === "milimetar" &&
      resultTypeValue === "centimetar"
    ) {
      result.value = Number(input.value) * 10;
    }
  } else if (inputVelicina === "masa") {
    if (inputTypeValue === "kilogram" && resultTypeValue === "gram") {
      result.value = Number(input.value) * 1000;
    } else if (
      inputTypeValue === "kilogram" &&
      resultTypeValue === "dekagram"
    ) {
      result.value = Number(input.value) * 100;
    } else if (
      inputTypeValue === "kilogram" &&
      resultTypeValue === "kilogram"
    ) {
      result.value = input.value;
    } else if (inputTypeValue === "kilogram" && resultTypeValue === "tona") {
      result.value = Number(input.value) * 0.001;
    }

    if (inputTypeValue === "tona" && resultTypeValue === "gram") {
      result.value = Number(input.value) * 1000000;
    } else if (inputTypeValue === "tona" && resultTypeValue === "dekagram") {
      result.value = Number(input.value) * 100000;
    } else if (inputTypeValue === "tona" && resultTypeValue === "tona") {
      result.value = input.value;
    } else if (inputTypeValue === "tona" && resultTypeValue === "kilogram") {
      result.value = Number(input.value) * 1000;
    }

    if (inputTypeValue === "gram" && resultTypeValue === "kilogram") {
      result.value = Number(input.value) * 0.001;
    } else if (inputTypeValue === "gram" && resultTypeValue === "dekagram") {
      result.value = Number(input.value) * 0.1;
    } else if (inputTypeValue === "gram" && resultTypeValue === "gram") {
      result.value = input.value;
    } else if (inputTypeValue === "gram" && resultTypeValue === "tona") {
      result.value = (Number(input.value) * 0.000001).toFixed(7);
    }

    if (inputTypeValue === "dekagram" && resultTypeValue === "kilogram") {
      result.value = Number(input.value) * 0.01;
    } else if (inputTypeValue === "dekagram" && resultTypeValue === "tona") {
      result.value = Number(input.value) * 0.00001;
    } else if (
      inputTypeValue === "dekagram" &&
      resultTypeValue === "dekagram"
    ) {
      result.value = input.value;
    } else if (inputTypeValue === "dekagram" && resultTypeValue === "gram") {
      result.value = Number(input.value) * 10;
    }
  }
}

// Dodadavanje prethodnig pretvorbi iz local storaga u DOM
function addPretvorbaDOM() {
  let pretvorbe = Store.getPretvorbe();
  if (pretvorbe !== null) {
    pretvorbe.forEach((pretvorba) => {
      dodajPretvorbu(pretvorba);
    });
  }
}
// Pomocna fija dodaje jednu pretvorbu u DOM
function dodajPretvorbu(pretvorba) {
  const pretvorbeDiv = document.createElement("div");
  pretvorbeDiv.classList.add("pretvorba");
  // Create Li
  const novaPretvorba = document.createElement("li");
  novaPretvorba.innerHTML =
    pretvorba.inputValue +
    " " +
    pretvorba.inputType +
    " = " +
    pretvorba.resultValue +
    " " +
    pretvorba.resultType;
  novaPretvorba.classList.add("pretvorba-item");
  pretvorbeDiv.appendChild(novaPretvorba);

  // Delete button

  const deleteButton = document.createElement("button");
  deleteButton.innerHTML = '<i class="fas fa-trash"></i>';
  deleteButton.classList.add("delete-btn");
  pretvorbeDiv.appendChild(deleteButton);

  //Append to list

  pretvorbeList.appendChild(pretvorbeDiv);
}

// Brisanje pretvorbe na delete btn

function obrisiJednuPretvorbu(event) {
  const item = event.target;
  if (item.classList[0] === "delete-btn") {
    const pretvorba = item.parentElement;
    pretvorba.classList.add("fall");
    Store.obrisiJednuPretvorbu(pretvorba);
    pretvorba.addEventListener("transitionend", () => {
      pretvorba.remove();
    });
  }
}

// Store

class Store {
  static getPretvorbe() {
    let pretvorbe;
    if (localStorage.getItem("pretvorbe") === null) {
      pretvorbe = [];
    } else {
      pretvorbe = JSON.parse(localStorage.getItem("pretvorbe"));
      if (JSON.parse(localStorage.getItem("pretvorbe")).length > 5) {
        pretvorbe = JSON.parse(localStorage.getItem("pretvorbe")).slice(0, 5);
      } else {
        pretvorbe = JSON.parse(localStorage.getItem("pretvorbe"));
      }
    }

    return pretvorbe;
  }

  static dodajPretvorbu(pretvorba) {
    if (JSON.parse(localStorage.getItem("pretvorbe")) === null) {
      pretvorbe = [];
    } else {
      pretvorbe = JSON.parse(localStorage.getItem("pretvorbe"));
    }
    pretvorbe.push(pretvorba);
    localStorage.setItem("pretvorbe", JSON.stringify(pretvorbe));
  }

  static obrisiZadnjuPretvorbu() {
    let pretvorbe = Store.getPretvorbe().slice(0, 6);
    if (localStorage.getItem("pretvorbe").length >= 5) {
      pretvorbe.splice(0, 1);
    }
    localStorage.setItem("pretvorbe", JSON.stringify(pretvorbe));
  }

  static obrisiJednuPretvorbu(inputPretvorba) {
    let pretvorbe = Store.getPretvorbe();

    pretvorbe.forEach((pretvorba, index) => {
      let temp =
        pretvorba.inputValue +
        " " +
        pretvorba.inputType +
        " " +
        "=" +
        " " +
        pretvorba.resultValue +
        " " +
        pretvorba.resultType;
      if (temp === inputPretvorba.children[0].innerText) {
        pretvorbe.splice(index, 1);
      }
    });
    localStorage.setItem("pretvorbe", JSON.stringify(pretvorbe));
  }
}

function obrisiZadnjuPretvorbuDOM() {
  if (pretvorbeList) {
    if (pretvorbeList.childElementCount > 4) {
      if (pretvorbeList.firstChild) {
        let firstChild = pretvorbeList.firstChild;
        firstChild.classList.add("fall");
        firstChild.addEventListener("transitionend", () => {
          firstChild.remove();
        });
        Store.obrisiZadnjuPretvorbu();
      }
    }
  }
}

//Inicijalizira page sa elementima spremljenim u local storageu
function populate() {
  console.log(localStorage.getItem("pretvorbe"));
  addPretvorbaDOM();
}

//Event Listener

buttonPretvori.addEventListener("click", () => {
  izracunajVrijednost(
    input,
    selectVelicina.options[selectVelicina.selectedIndex].value
  );
});

// Pretvori button
buttonPretvori.addEventListener("click", () => {
  let inputType = document.getElementById("inputType");
  let inputTypeValue = inputType.options[inputType.selectedIndex].value;
  let resultType = document.getElementById("resultType");
  let resultTypeValue = resultType.options[resultType.selectedIndex].value;
  let pretvorbaTemp = {
    inputValue: input.value,
    resultValue: result.value,
    inputType: inputTypeValue,
    resultType: resultTypeValue,
  };
  obrisiZadnjuPretvorbuDOM();
  Store.dodajPretvorbu(pretvorbaTemp);
  dodajPretvorbu(pretvorbaTemp);
});

document.addEventListener("DOMContentLoaded", () => {
  populate();
});

pretvorbeList.addEventListener("click", (event) => {
  //   console.log(
  //     Store.getPretvorbe()[0].inputValue +
  //       " " +
  //       Store.getPretvorbe()[0].resultValue +
  //       " " +
  //       Store.getPretvorbe()[0].inputType ===
  //       5 + " " + 5000 + " " + "kilometar"
  //   );
  obrisiJednuPretvorbu(event);
});
