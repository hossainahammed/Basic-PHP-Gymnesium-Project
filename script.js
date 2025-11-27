document.querySelector("form").addEventListener("submit", function (e) {
    const fullName = document.getElementById("fullname").value.trim();
    const email = document.getElementById("email").value.trim();
    const phoneInput = document.getElementById("phone").value.trim();
    const dob = document.getElementById("dob").value;
    const gender = document.querySelector('input[name="gender"]:checked');
    const membership = document.getElementById("membership").value;
    const goals = document.querySelectorAll('input[name="goals[]"]:checked');
    const terms = document.getElementById("terms").checked;

    const phone = "+880" + phoneInput;
    const phonePattern = /^\+8801[3-9][0-9]{8}$/;

    if (fullName === "") {
        alert("Please enter your full name.");
        e.preventDefault();
    } else if (!/^[^ ]+@[^ ]+\.[a-z]{2,3}$/.test(email)) {
        alert("Please enter a valid email address.");
        e.preventDefault();
    } else if (!phonePattern.test(phone)) {
        alert("Please enter a valid Bangladeshi phone number.");
        e.preventDefault();
    } else if (dob === "" || dob >= new Date().toISOString().split("T")[0]) {
        alert("Please enter a valid Date of Birth.");
        e.preventDefault();
    } else if (!gender) {
        alert("Please select your gender.");
        e.preventDefault();
    } else if (membership === "") {
        alert("Please select a membership type.");
        e.preventDefault();
    } else if (goals.length === 0) {
        alert("Please select at least one fitness goal.");
        e.preventDefault();
    } else if (!terms) {
        alert("You must agree to the Terms and Conditions.");
        e.preventDefault();
    } else {
        alert("Form submitted successfully!");
    }

    if (e.defaultPrevented) {
        alert("Form submission unsuccessful. Please try again.");
    }
});
