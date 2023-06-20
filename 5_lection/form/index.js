const userForm = document.getElementById("user-form");

let errorState = false;

const showError = (errorMessage) => {
  if (!errorState) {
    window.alert(errorMessage);
    errorState = true;
  }
};

userForm.addEventListener("submit", (event) => {
  event.preventDefault();

  errorState = false;

  const inputFields = userForm.getElementsByTagName("input");

  Array.from(inputFields).forEach((field) => {
    const { value, id } = field;

    if (!value && !errorState) {
      showError(`Field ${id} is empty!`);
    }

    if (errorState) return;

    switch (id) {
      case "name":
        if (value.length < 4 || value.length >= 8) {
          showError(
            `Name should contain at least 4 characters, and not more than 8!`
          );
        }
        return;
      case "email":
        if (!value.includes("@")) {
          showError(`Email should contain @ symbol!`);
        }
        return;
      case "password":
        const passwordRegex =
          /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

        if (!passwordRegex.test(value)) {
          showError(
            `Password should contain at least 8 characters, one uppercase, one lowercase, one number and one special character!`
          );
        }
        return;
      default:
        return;
    }
  });
});
