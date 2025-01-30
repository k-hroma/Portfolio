// Scroll Change Word

function changeText() {
  document.getElementById("scroll-change").innerHTML = "*⎚-⎚";
}

function changeTextS() {
  document.getElementById("scroll-change").innerHTML = "*scroll";
}

// Form
// Select the submit button
document
  .getElementById("btn-submit")
  .addEventListener("click", function (event) {
    // Prevent default form submission behavior
    event.preventDefault();

    // Get values from the form inputs
    const name = document.getElementById("name").value;
    const surname = document.getElementById("surname").value;
    const telephone = document.getElementById("telephone").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    // Store data in variables
    console.log("Name:", name);
    console.log("Surname:", surname);
    console.log("Telephone:", telephone);
    console.log("Email:", email);
    console.log("Message:", message);

    // Clear the form fields (this will make placeholders visible again)
    document.getElementById("name").value = "";
    document.getElementById("surname").value = "";
    document.getElementById("telephone").value = "";
    document.getElementById("email").value = "";
    document.getElementById("message").value = "";
  });
