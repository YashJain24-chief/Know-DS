var list = [];

var allNodeElements = document.querySelector("#all-nodes");
function generateNode(input) {
  var elementDiv = document.createElement("div");
  elementDiv.classList.add("elements");

  //   creating arrow
  var arrowDiv = document.createElement("div");
  arrowDiv.classList.add("arrow");
  var arrowPara = document.createElement("p");
  arrowPara.innerHTML = "&#8594;";
  arrowDiv.appendChild(arrowPara);

  //   creating node
  var nodeDiv = document.createElement("div");
  nodeDiv.classList.add("nodes");
  var nodePara = document.createElement("p");
  nodePara.classList.add("data");
  var data = document.createTextNode(input + "");

  nodePara.appendChild(data);
  nodeDiv.appendChild(nodePara);

  elementDiv.appendChild(arrowDiv);
  elementDiv.appendChild(nodeDiv);
  allNodeElements.appendChild(elementDiv);
}

// insert front
const insertFront = document.querySelector("#Insert-front");
insertFront.addEventListener("click", () => {
  let input_id = document.getElementById("input").value;
  if (input_id === "") {
    alert("Please enter a value to insert");
    return;
  } else {
    list.unshift(input_id);
    allNodeElements.innerHTML = "";
    list.forEach((e) => {
      generateNode(e);
    });
  }
  document.getElementById("input").value = "";
});

//insert last
const insertLast = document.querySelector("#Insert-last");
insertLast.addEventListener("click", () => {
  let input_id = document.getElementById("input").value;
  if (input_id === "") {
    alert("Please enter a value to insert");
    return;
  } else {
    list.push(input_id);
    allNodeElements.innerHTML = "";
    list.forEach((e) => {
      generateNode(e);
    });
  }
  document.getElementById("input").value = "";
});

// insert position
const insertPosition = document.querySelector("#Insert-position");
insertPosition.addEventListener("click", () => {
  let input_id = document.getElementById("input").value;
  let input_Position = document.getElementById("inputPosition").value;
  if (
    input_id === "" ||
    input_Position === "" ||
    input_Position < 0 ||
    input_Position > list.length
  ) {
    alert("Please enter a value/position to insert");
    return;
  } else {
    list.splice(input_Position, 0, input_id);
    allNodeElements.innerHTML = "";
    list.forEach((e) => {
      generateNode(e);
    });
  }
  document.getElementById("input").value = "";
  document.getElementById("inputPosition").value = "";
});

//delete front
const deleteFront = document.querySelector("#Delete-front");
deleteFront.addEventListener("click", () => {
  if (list.length === 0) {
    alert("Please insert an element before deleting");
    return;
  } else {
    list.splice(0, 1);
    allNodeElements.innerHTML = "";
    list.forEach((e) => {
      generateNode(e);
    });
  }
});

//delete last
const deleteLast = document.querySelector("#Delete-last");
deleteLast.addEventListener("click", () => {
  if (list.length === 0) {
    alert("Please insert an element before deleting");
    return;
  } else {
    list.splice(list.length - 1, 1);
    allNodeElements.innerHTML = "";
    list.forEach((e) => {
      generateNode(e);
    });
  }
});

// delete position
const deletePosition = document.querySelector("#Delete-position");
deletePosition.addEventListener("click", () => {
  let input_Position = document.getElementById("inputPosition").value;
  if (list.length === 0) {
    alert("Please insert an element before deleting");
    return;
  }
  if (
    input_Position === "" ||
    input_Position < 0 ||
    input_Position > list.length
  ) {
    alert("Please enter a valid position to insert");
    return;
  } else {
    list.splice(input_Position, 1);
    allNodeElements.innerHTML = "";
    list.forEach((e) => {
      generateNode(e);
    });
  }
  document.getElementById("inputPosition").value = "";
});

// delete element
const deleteElement = document.querySelector("#Delete-element");
deleteElement.addEventListener("click", () => {
  let input = document.getElementById("input").value;
  if (list.length === 0) {
    alert("Please insert an element before deleting");
    return;
  } else if (input === "") {
    alert("Please enter an element to delete");
  } else if (list.indexOf(input) !== -1) {
    list.splice(list.indexOf(input), 1);
    allNodeElements.innerHTML = "";
    list.forEach((e) => {
      generateNode(e);
    });
  } else {
    alert("Entered element is not present");
  }
  document.getElementById("inputPosition").value = "";
});

// sort
// const sortElement = document.querySelector("#Sort");
// sortElement.addEventListener("click", () => {
//   if (list.length === 0) {
//     alert("Please insert element");
//     return;
//   } else {
//     list.sort((a, b) => {
//       return a - b;
//     });
//     allNodeElements.innerHTML = "";
//     list.forEach((e) => {
//       generateNode(e);
//     });
//   }
// });

function sleep() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("");
    }, 500);
  });
}

const sortElement = document.querySelector("#Sort");
sortElement.addEventListener("click", () => {
  sort();
});

async function sort() {
  if (list.length === 0) {
    alert("Please insert element");
    return;
  } else {
    let nodes = document.getElementsByClassName("nodes");
    for (let i = 0; i < nodes.length; i++) {
      nodes[i].style.background = "linear-gradient(-45deg, #cc1b5f, #1685ad)";
      await sleep();
      for (let j = i + 1; j < nodes.length; j++) {
        nodes[j].style.background = "linear-gradient(-45deg, #cc1b5f, #1685ad)";
        await sleep();
        if (parseInt(nodes[i].innerText) > parseInt(nodes[j].innerText)) {
          nodes[i].style.background = "green";
          nodes[j].style.background = "green";
          await sleep();
          [nodes[i].innerText, nodes[j].innerText] = [
            nodes[j].innerText,
            nodes[i].innerText,
          ];
          await sleep();
          nodes[i].style.background =
            "linear-gradient(-45deg, #cc1b5f, #1685ad)";
          nodes[j].style.background =
            "linear-gradient(-45deg, #cc1b5f, #1685ad)";
        }
        await sleep();
        nodes[j].style.background = "wheat";
      }
      await sleep();
      nodes[i].style.background = "wheat";
    }
  }
}
