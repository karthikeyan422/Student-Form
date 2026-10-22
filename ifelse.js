
    const form = document.getElementById("studentForm");
    const studentList = document.getElementById("studentList");

    form.addEventListener("submit", function (event) {
        event.preventDefault();

    // Get values from the form
    const name = document.getElementById("name").value.trim();
    const age = document.getElementById("age").value;
    const gender = document.querySelector(
    'input[name="gender"]:checked'
    ).value;
    const course = document.getElementById("course").value;
    const email = document.getElementById("email").value.trim();

    // Create a new table row
    const row = document.createElement("tr");

    // Create cells for the student details
    [name, age, course, gender, email].forEach(function (value) {
        const cell = document.createElement("td");

    cell.className =
    "border-2 border-gray-400 p-2 text-lg whitespace-nowrap";

    // textContent prevents entered text from being treated as HTML
    cell.textContent = value;
    row.appendChild(cell);
    });

    // Create the Delete button cell
    const actionCell = document.createElement("td");
    actionCell.className = "border-2 border-gray-400 p-2";

    const deleteButton = document.createElement("button");
    deleteButton.type = "button";
    deleteButton.textContent = "Delete";
    deleteButton.className =
    "bg-red-600 text-white px-3 py-1 font-bold hover:bg-red-700";

    // Delete this student row
    deleteButton.addEventListener("click", function () {
        row.remove();
    });

    actionCell.appendChild(deleteButton);
    row.appendChild(actionCell);

    // Display the row in the table
    studentList.appendChild(row);

    // Clear the form after saving
    form.reset();
})