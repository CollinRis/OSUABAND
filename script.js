document.addEventListener("DOMContentLoaded", function () {
    const events = [
        { "Date": "1/14/26", "Day": "Wednesday", "Sport": "W Basketball", "Opponent": "Penn State", "Report Time": "5:30 PM", "Start Time": "6:30 PM", "Location": "Schott", "Band": "Scarlet", "Conductor": "Woods", "Special Comments": "" },
        { "Date": "1/17/26", "Day": "Saturday", "Sport": "M Basketball", "Opponent": "UCLA", "Report Time": "12:00 PM", "Start Time": "1:00 PM", "Location": "Schott", "Band": "Gray", "Conductor": "Bissler", "Special Comments": "" },
        // ... rest of events
    ];

    function getNextEvent() {
        const today = new Date();
        today.setHours(0, 0, 0, 0); // Normalize to midnight

        const upcomingEvents = events.map(event => {
            let parts = event.Date.split("/");
            let year = parts[2].length === 2 ? "20" + parts[2] : parts[2];
            let parsed = new Date(`${year}-${parts[0].padStart(2, '0')}-${parts[1].padStart(2, '0')}`);
            parsed.setHours(0, 0, 0, 0);
            return { ...event, parsedDate: parsed };
        });

        const futureEvents = upcomingEvents.filter(e => e.parsedDate >= today);
        futureEvents.sort((a, b) => a.parsedDate - b.parsedDate);

        return futureEvents.length > 0 ? futureEvents[0] : {
            "Date": "TBD", "Day": "TBD", "Sport": "No Upcoming Events",
            "Opponent": "-", "Report Time": "-", "Start Time": "-",
            "Location": "-", "Band": "-", "Conductor": "-", "Special Comments": "-"
        };
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
        <p><strong>Conductor:</strong> ${nextEvent.Conductor}</p>
        <p><strong>Special Comments:</strong> ${nextEvent["Special Comments"]}</p>
    `;
});
