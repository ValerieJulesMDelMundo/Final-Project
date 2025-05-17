document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("signupForm");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    document.querySelectorAll(".error").forEach(el => el.textContent = "");

    const firstName = document.getElementById("firstName").value.trim();
    const lastName = document.getElementById("lastName").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();
    const contact = document.getElementById("contact").value.trim();
    const why = document.getElementById("why").value.trim();
    const sexInput = document.querySelector('input[name="sex"]:checked');

    let isValid = true;

    if (!firstName) {
      document.getElementById("errorFirstName").textContent = "Required";
      isValid = false;
    }
    if (!lastName) {
      document.getElementById("errorLastName").textContent = "Required";
      isValid = false;
    }
    if (!sexInput) {
      document.getElementById("errorSex").textContent = "Required";
      isValid = false;
    }
    if (!email) {
      document.getElementById("errorEmail").textContent = "Required";
      isValid = false;
    }
    if (!password) {
      document.getElementById("errorPassword").textContent = "Required";
      isValid = false;
    }
    if (!why) {
      document.getElementById("errorWhy").textContent = "Required";
      isValid = false;
    }

    if (isValid) {
      localStorage.setItem("firstName", firstName);
      localStorage.setItem("lastName", lastName);
      localStorage.setItem("email", email);
      localStorage.setItem("password", password); // ⚠️ Not recommended in production
      localStorage.setItem("contact", contact);
      localStorage.setItem("sex", sexInput.value);
      localStorage.setItem("why", why);

      window.location.href = "proj_profile_Del Mundo.html";
    }
  });
});
