document.addEventListener("DOMContentLoaded", function () {
    const events = [
        { "Date": "2025-01-12", "Day": "Sunday", "Sport": "W Basketball", "Opponent": "Oregon", "Report Time": "12:00 PM", "Start Time": "1:00 PM", "Location": "Schott", "Band": "GRAY" },
        { "Date": "2025-01-17", "Day": "Friday", "Sport": "M Basketball", "Opponent": "Indiana", "Report Time": "7:00 PM", "Start Time": "8:00 PM", "Location": "Schott", "Band": "MBB" },
        { "Date": "2025-01-23", "Day": "Thursday", "Sport": "W Basketball", "Opponent": "Maryland", "Report Time": "5:00 PM", "Start Time": "6:00 PM", "Location": "Schott", "Band": "SCARLET" },
        { "Date": "2025-01-24", "Day": "Friday", "Sport": "W Ice Hockey", "Opponent": "Minnesota State", "Report Time": "5:00 PM", "Start Time": "6:00 PM", "Location": "OSU Ice Rink", "Band": "C" }
    ];
    
    function getNextEvent() {
        const today = new Date().toISOString().split("T")[0];
        const upcoming = events.find(e => e.Date >= today);
        return upcoming || { "Date": "TBD", "Day": "TBD", "Sport": "No Upcoming Events", "Opponent": "-", "Report Time": "-", "Start Time": "-", "Location": "-", "Band": "-" };
    }
    
    const nextEvent = getNextEvent();
    document.getElementById("next-event").innerHTML = `
        <p><strong>Date:</strong> ${nextEvent.Date}</p>
        <p><strong>Day:</strong> ${nextEvent.Day}</p>
        <p><strong>Sport:</strong> ${nextEvent.Sport}</p>
        <p><strong>Opponent:</strong> ${nextEvent.Opponent}</p>
        <p><strong>Report Time:</strong> ${nextEvent["Report Time"]}</p>
        <p><strong>Start Time:</strong> ${nextEvent["Start Time"]}</p>
        <p><strong>Location:</strong> ${nextEvent.Location}</p>
        <p><strong>Band:</strong> ${nextEvent.Band}</p>
    `;
    
    const scheduleTable = document.querySelector("#schedule tbody");
    events.forEach(event => {
        const row = document.createElement("tr");
        row.innerHTML = `<td>${event.Date}</td><td>${event.Day}</td><td>${event.Sport}</td><td>${event.Opponent}</td><td>${event["Report Time"]}</td><td>${event["Start Time"]}</td><td>${event.Location}</td><td>${event.Band}</td>`;
        scheduleTable.appendChild(row);
    });
});
