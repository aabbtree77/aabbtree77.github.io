document.addEventListener("DOMContentLoaded", function () {
  const apiUrl = "https://miniguestlog.onrender.com/guest";

  //Get date and time
  [dateStr, timeStr] = formatCurrentDateTime();

  //Get User IP
  fetch("https://api64.ipify.org?format=json")
    .then((response) => response.json())
    .then((data) => {
      console.log(data.ip);
      const ipAddress = data.ip;
      console.log(ipAddress);

      //Make Json payload
      const jsonData = {
        date: dateStr,
        time: timeStr,
        ip: ipAddress,
      };

      // Send Json payload to server
      fetch(apiUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          // Add any additional headers if needed
        },
        body: JSON.stringify(jsonData),
      })
        .then((response) => {
          if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
          }
          return response.json();
        })
        .then((data) => {
          // Handle the response data as needed
          console.log("Response:", data);
        })
        .catch((error) => {
          // Handle errors
          console.error("Error:", error);
        });
    })
    .catch((error) => {
      console.error("Error fetching IP address:", error);
      document.getElementById("ip-address").innerText =
        "Error fetching IP address";
    });
});

function formatCurrentDateTime() {
  // Get the current date and time
  const currentDate = new Date();

  // Format the date and time components
  const year = currentDate.getFullYear();
  const month = (currentDate.getMonth() + 1).toString().padStart(2, "0");
  const day = currentDate.getDate().toString().padStart(2, "0");
  const hours = currentDate.getHours().toString().padStart(2, "0");
  const minutes = currentDate.getMinutes().toString().padStart(2, "0");
  const seconds = currentDate.getSeconds().toString().padStart(2, "0");

  // Create the formatted date and time string
  const formattedDate = `${year}.${month}.${day}`;
  const formattedTime = `${hours}:${minutes}:${seconds}`;

  return [formattedDate, formattedTime];
}
