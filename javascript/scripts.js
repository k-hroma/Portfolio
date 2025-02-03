// Scroll Change Word

function changeText() {
  document.getElementById("scroll-change").innerHTML = "*⎚-⎚";
}

function changeTextS() {
  document.getElementById("scroll-change").innerHTML = "*scroll";
}

// Form
// Select the submit button
contador = 0;
document
  .getElementById("btn-submit")
  .addEventListener("click", function (event) {
    // Prevent default form submission behavior
    event.preventDefault();

    const id = (contador += 1);
    // Get values from the form inputs
    const name = document.getElementById("name").value;
    const surname = document.getElementById("surname").value;
    const telephone = document.getElementById("telephone").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    // Store data in variables
    console.log("Id:", id);
    console.log("Name:", name);
    console.log("Surname:", surname);
    console.log("Telephone:", telephone);
    console.log("Email:", email);
    console.log("Message:", message);

    // hago un array con esos valores

    const mailInfo = {
      Id: id,
      Name: name,
      Surname: surname,
      Telephone: telephone,
      Email: email,
      Message: message,
    };
    console.log(mailInfo);
    console.log(typeof mailInfo);

    //convierto array a json
    const jsonInfo = JSON.stringify(mailInfo);
    console.log(jsonInfo);

    //guardo la info en json
    localStorage.setItem("InfoMail", jsonInfo);

    // Clear the form fields (this will make placeholders visible again)
    document.getElementById("name").value = "";
    document.getElementById("surname").value = "";
    document.getElementById("telephone").value = "";
    document.getElementById("email").value = "";
    document.getElementById("message").value = "";
  });
