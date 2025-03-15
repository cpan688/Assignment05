let id, name, ext, email, department;

// HELPER FUNCTION TO RETURN DOM ELEMENT
const $ = (id) => document.getElementById(id);

// Get the DOM ELEMENTS
id = $('id');
name = $('name');
ext = $('ext');
email = $('email');
department = $('department');
submit = $('submit');

// Add the Event Listener for when the Submit button is clicked
submit.addEventListener('click', () => {
        console.log(`ID: ${id.value}`);
        console.log(`Name: ${name.value}`);
        console.log(`Extension: ${ext.value}`);
        console.log(`Email: ${email.value}`);
        console.log(`Department: ${department.value}`);
    })