let buttonAdd = document.getElementById("buttonAddTask");
let tbody = document.getElementById("tbody");

function AddTask(){
    let task = document.getElementById("task").value;
    tbody.innerHTML = `
    <tr class="bg-white-100 border-b">
    <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">1</td>
    <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
    ${task}
    </td>
  </tr>`
}

buttonAdd.addEventListener("click", AddTask);