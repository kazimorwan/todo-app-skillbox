const todoTitle = document.getElementById("todoTitle");
const todoInput = document.getElementById("todoInput");
const addBtn = document.getElementById("addBtn");
const result = document.getElementById("result");

addBtn.addEventListener("click", () => {
  const resultCard = document.createElement("div");
  resultCard.classList.add("bg-[#22416a]", "text-white", "w-90", "min-w-90", "p-3", "rounded-md", "flex-1");

  const resultTitle = document.createElement("h2");
  resultTitle.classList.add("text-2xl", "font-bold", "mb-2", "line-clamp-1");
  if (todoTitle.value.trim() === "") {
    resultTitle.textContent = "Untitled";
  } else {
    resultTitle.textContent = todoTitle.value;
  }

  const resultDes = document.createElement("p");
  resultDes.classList.add("text-justify");

  if (todoInput.value.trim() === "") {
    resultDes.textContent = "No Description";
  } else {
    resultDes.textContent = todoInput.value;
  }

  resultCard.append(resultTitle, resultDes);
  result.append(resultCard);

  todoTitle.value = "";
  todoInput.value = "";
});
