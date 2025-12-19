export async function sendGuestTimeLoc() {
  const apiUrl = "https://miniguestlog.onrender.com/guest";

  const [dateStr, timeStr] = formatCurrentDateTime();

  try {
    const ipRes = await fetch("https://api64.ipify.org?format=json");
    const { ip } = await ipRes.json();

    const payload = {
      date: dateStr,
      time: timeStr,
      ip,
    };

    await fetch(apiUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });
  } catch (err) {
    console.error("Guest log failed:", err);
  }
}

function formatCurrentDateTime(): [string, string] {
  const d = new Date();

  const date = `${d.getFullYear()}.${String(d.getMonth() + 1).padStart(2, "0")}.${String(d.getDate()).padStart(2, "0")}`;
  const time = `${String(d.getHours()).padStart(2, "0")}:${String(d.getMinutes()).padStart(2, "0")}:${String(d.getSeconds()).padStart(2, "0")}`;

  return [date, time];
}
