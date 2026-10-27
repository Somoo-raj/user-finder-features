const inputBox = document.getElementById("input-box");
const inputBtn = document.getElementById("input-btn");
const container2 = document.getElementById("container-2");

const originalText = inputBtn.textContent;
let isLoading = false;

// common handler
function handlerSearch() {
  getUser();
}

// Both events use the same function
inputBtn.addEventListener("click", handlerSearch);

inputBox.addEventListener("keydown", async (e) => {
  if (e.key === "Enter") {
    handlerSearch();
  }
});

async function getUser() {
  const userId = Number(inputBox.value.trim());

  // Validate input
  if (!Number.isInteger(userId) || userId <= 0) {
    container2.textContent = "Please enter a valid positive integer ID.";
    return;
  }

  // Prevent duplicate requests
  if (isLoading) {
    return;
  }
  isLoading = true;

  inputBtn.disabled = true; // button disable
  inputBtn.textContent = "Loading...";
  container2.textContent = "Loading...";

  try {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/users/${userId}`,
    );
    if (!response.ok) {
      throw new Error("User not found!");
    }
    const data = await response.json();
    container2.textContent = `1. Name: ${data.name} 2. Email: ${data.email}`;
    inputBox.value = "";
  } catch (err) {
    container2.textContent = err.message;
  } finally {
    isLoading = false;
    inputBtn.disabled = false; // button enable
    inputBtn.textContent = originalText;
  }
}
