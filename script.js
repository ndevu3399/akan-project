// script.js
document.getElementById("akanForm").addEventListener("submit", function (e) {
    e.preventDefault();
  
    const birthday = document.getElementById("birthday").value;
    const gender = document.getElementById("gender").value;
    const outputDiv = document.getElementById("output");
  
    // Check if inputs are valid
    if (!birthday || !gender) {
      outputDiv.textContent = "Please fill in all fields.";
      return;
    }
  
    const date = new Date(birthday);
  
    // Validate the date
    if (isNaN(date.getTime())) {
      outputDiv.textContent = "Invalid date. Please enter a valid date.";
      return;
    }
  
    const dayOfWeek = date.getDay(); // 0 (Sunday) to 6 (Saturday)
  
    // Akan name mapping
    const akanNames = {
      male: ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"],
      female: ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"],
    };
  
    // Determine the Akan name
    const akanName = akanNames[gender][dayOfWeek];
    outputDiv.textContent = `You were born on a ${date.toLocaleString("en-us", { weekday: "long" })} and your Akan name is ${akanName}.`;
  });
  