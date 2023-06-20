const deleteButtons = document.getElementsByClassName("delete");
// const deleteButton = deleteButtons[0];

// deleteButton.addEventListener("click", () => {
//   const productWrapper = deleteButton.parentElement;
//   productWrapper.remove();
// });

const onDelete = (element) => {
  element.remove();
};

Array.from(deleteButtons).forEach((button) => {
  button.addEventListener("click", () => {
    const productWrapper = button.parentElement;
    onDelete(productWrapper);
  });
});
