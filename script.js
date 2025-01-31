document.addEventListener("DOMContentLoaded", function () {
    const events = [
        { "Date": "1/12/2025", "Day": "Sunday", "Sport": "W Basketball", "Opponent": "Oregon", "Report Time": "12:00 PM", "Start Time": "1:00 PM", "Location": "GRAY", "Band": "Schott" },
        { "Date": "1/17/2025", "Day": "Friday", "Sport": "M Basketball", "Opponent": "Indiana", "Report Time": "7:00 PM", "Start Time": "8:00 PM", "Location": "MBB", "Band": "Schott" },
        { "Date": "1/23/2025", "Day": "Thursday", "Sport": "W Basketball", "Opponent": "Maryland", "Report Time": "5:00 PM", "Start Time": "6:00 PM", "Location": "SCARLET", "Band": "Schott" },
        { "Date": "1/24/2025", "Day": "Friday", "Sport": "W Ice Hockey", "Opponent": "Minnesota State", "Report Time": "5:00 PM", "Start Time": "6:00 PM", "Location": "C", "Band": "OSU Ice Rink" },
        { "Date": "1/25/2025", "Day": "Saturday", "Sport": "W Ice Hockey", "Opponent": "Minnesota State", "Report Time": "2:00 PM", "Start Time": "3:00 PM", "Location": "D", "Band": "OSU Ice Rink" },
        { "Date": "1/26/2025", "Day": "Sunday", "Sport": "M Volleyball", "Opponent": "Penn State", "Report Time": "2:00 PM", "Start Time": "3:00 PM", "Location": "A", "Band": "Covelli" },
        { "Date": "1/27/2025", "Day": "Monday", "Sport": "M Basketball", "Opponent": "Iowa", "Report Time": "7:00 PM", "Start Time": "8:00 PM", "Location": "MBB", "Band": "Schott" },
        { "Date": "1/30/2025", "Day": "Thursday", "Sport": "M Ice Hockey", "Opponent": "Michigan State", "Report Time": "7:00 PM", "Start Time": "8:00 PM", "Location": "SCARLET", "Band": "Schott" },
        { "Date": "1/31/2025", "Day": "Friday", "Sport": "M Ice Hockey", "Opponent": "Michigan State", "Report Time": "6:00 PM", "Start Time": "7:00 PM", "Location": "GRAY + B", "Band": "Schott" },
        { "Date": "2/1/2025", "Day": "Saturday", "Sport": "M Lacrosse", "Opponent": "Utah", "Report Time": "11:00 AM", "Start Time": "12:00 PM", "Location": "MBB", "Band": "Lacrosse Stadium" },
        { "Date": "2/2/2025", "Day": "Sunday", "Sport": "W Basketball", "Opponent": "Washington", "Report Time": "4:00 PM", "Start Time": "5:00 PM", "Location": "GRAY", "Band": "Schott" },
        { "Date": "2/6/2025", "Day": "Thursday", "Sport": "M Basketball", "Opponent": "Maryland", "Report Time": "6:00 PM", "Start Time": "7:00 PM", "Location": "MBB", "Band": "Schott" },
        { "Date": "2/7/2025", "Day": "Friday", "Sport": "W Ice Hockey", "Opponent": "St. Thomas", "Report Time": "5:00 PM", "Start Time": "6:00 PM", "Location": "D", "Band": "OSU Ice Rink" },
        { "Date": "2/8/2025", "Day": "Saturday", "Sport": "W Ice Hockey", "Opponent": "St. Thomas", "Report Time": "12:00 PM", "Start Time": "1:00 PM", "Location": "A", "Band": "OSU Ice Rink" },
        { "Date": "2/12/2025", "Day": "Wednesday", "Sport": "M Basketball", "Opponent": "Washington", "Report Time": "7:30 PM", "Start Time": "8:30 PM", "Location": "MBB", "Band": "Schott" },
        { "Date": "2/13/2025", "Day": "Thursday", "Sport": "W Basketball", "Opponent": "Minnesota", "Report Time": "6:30 PM", "Start Time": "7:30 PM", "Location": "SCARLET", "Band": "Schott" },
        { "Date": "2/14/2025", "Day": "Friday", "Sport": "M Ice Hockey", "Opponent": "Wisconsin", "Report Time": "6:00 PM", "Start Time": "7:00 PM", "Location": "GRAY", "Band": "Schott" },
        { "Date": "2/15/2025", "Day": "Saturday", "Sport": "M Ice Hockey", "Opponent": "Wisconsin", "Report Time": "7:30 PM", "Start Time": "8:30 PM", "Location": "SCARLET", "Band": "Schott" },
        { "Date": "2/16/2025", "Day": "Sunday", "Sport": "M Basketball", "Opponent": "Michigan", "Report Time": "12:00 PM", "Start Time": "1:00 PM", "Location": "MBB + vol.", "Band": "Schott" },
        { "Date": "2/17/2025", "Day": "Monday", "Sport": "W Basketball", "Opponent": "Iowa", "Report Time": "11:00 AM", "Start Time": "12:00 PM", "Location": "GRAY", "Band": "Schott" },
        { "Date": "2/20/2025", "Day": "Thursday", "Sport": "M Basketball", "Opponent": "Northwestern", "Report Time": "5:30 PM", "Start Time": "6:30 PM", "Location": "MBB", "Band": "Schott" },
        { "Date": "2/22/2025", "Day": "Saturday", "Sport": "W Ice Hockey", "Opponent": "St. Cloud State", "Report Time": "2:00 PM", "Start Time": "3:00 PM", "Location": "SCARLET + C", "Band": "OSU Ice Rink" },
        { "Date": "2/23/2025", "Day": "Sunday", "Sport": "W Basketball", "Opponent": "Purdue", "Report Time": "11:00 AM", "Start Time": "12:00 PM", "Location": "GRAY", "Band": "Schott" },
        { "Date": "2/26/2025", "Day": "Wednesday", "Sport": "W Basketball", "Opponent": "Michigan State", "Report Time": "6:00 PM", "Start Time": "7:00 PM", "Location": "SCARLET", "Band": "Schott" },
        { "Date": "2/27/2025", "Day": "Thursday", "Sport": "Columbus Blue Jackets Dress Rehearsal", "Opponent": "Detroit Red Wings", "Report Time": "TBD", "Start Time": "TBD", "Location": "ALL", "Band": "Ohio Stadium" },
        { "Date": "2/27/2025", "Day": "Thursday", "Sport": "M Ice Hockey", "Opponent": "Michigan", "Report Time": "7:00 PM", "Start Time": "8:00 PM", "Location": "GRAY", "Band": "Schott" },
        { "Date": "2/28/2025", "Day": "Friday", "Sport": "Columbus Blue Jackets Dress Rehearsal", "Opponent": "Detroit Red Wings", "Report Time": "TBD", "Start Time": "TBD", "Location": "ALL", "Band": "Ohio Stadium" },
        { "Date": "2/28/2025", "Day": "Friday", "Sport": "M Ice Hockey", "Opponent": "Michigan", "Report Time": "5:00 PM", "Start Time": "6:00 PM", "Location": "SCARLET", "Band": "Schott" },
        { "Date": "2/28-3/2/2025", "Day": "Fri.-Sun.", "Sport": "W Ice Hockey", "Opponent": "WCHA Quarterfinals", "Report Time": "TBD", "Start Time": "TBD", "Location": "", "Band": "" },
        { "Date": "3/1/2025", "Day": "Saturday", "Sport": "Columbus Blue Jackets", "Opponent": "Detroit Red Wings", "Report Time": "5:00 PM", "Start Time": "6:00 PM", "Location": "ALL", "Band": "Ohio Stadium" },
        { "Date": "3/4/2025", "Day": "Tuesday", "Sport": "M Basketball", "Opponent": "Nebraska", "Report Time": "8:00 PM", "Start Time": "9:00 PM", "Location": "MBB", "Band": "Schott" },
        { "Date": "3/5-9/2025", "Day": "Wed.-Sun.", "Sport": "W Basketball", "Opponent": "B1G Tournament", "Report Time": "TBD", "Start Time": "TBD", "Location": "", "Band": "Gainbridge Fieldhouse" },
        { "Date": "3/7-9/2025", "Day": "Fri.-Sun.", "Sport": "M Ice Hockey", "Opponent": "B1G Tournament", "Report Time": "TBD", "Start Time": "TBD", "Location": "", "Band": "" },
        { "Date": "3/12-16/2025", "Day": "Wed.-Sun.", "Sport": "M Basketball", "Opponent": "B1G Tournament", "Report Time": "TBD", "Start Time": "TBD", "Location": "", "Band": "Gainbridge Fieldhouse" },
        { "Date": "3/14-16/2025", "Day": "Fri.-Sun.", "Sport": "W Ice Hockey", "Opponent": "NCAA Regionals", "Report Time": "TBD", "Start Time": "TBD", "Location": "", "Band": "" },
        { "Date": "3/16/2025", "Day": "Sunday", "Sport": "W Gymnastics", "Opponent": "West Virginia", "Report Time": "TBD", "Start Time": "TBD", "Location": "B", "Band": "" },
        { "Date": "3/18-19/2025", "Day": "Tues.-Wed.", "Sport": "M Basketball", "Opponent": "NCAA First Four", "Report Time": "TBD", "Start Time": "TBD", "Location": "", "Band": "UD Arena" },
        { "Date": "3/20-23/2025", "Day": "Thurs.-Sun.", "Sport": "M Basketball", "Opponent": "NCAA First & Second Rounds", "Report Time": "TBD", "Start Time": "TBD", "Location": "", "Band": "" },
        { "Date": "3/21-24/2025", "Day": "Fri.-Mon.", "Sport": "W Basketball", "Opponent": "NCAA First & Second Rounds", "Report Time": "TBD", "Start Time": "TBD", "Location": "", "Band": "" },
        { "Date": "3/21-23/2025", "Day": "Fri.-Sun.", "Sport": "W Ice Hockey", "Opponent": "NCAA Frozen Four", "Report Time": "TBD", "Start Time": "TBD", "Location": "", "Band": "Ridder Arena" },
        { "Date": "3/26/2025", "Day": "Wednesday", "Sport": "Softball", "Opponent": "Akron", "Report Time": "4:00 PM", "Start Time": "5:00 PM", "Location": "MBB", "Band": "Buckeye Field" },
        { "Date": "3/27-30/2025", "Day": "Thurs.-Sun.", "Sport": "M Ice Hockey", "Opponent": "NCAA Regional Tournament", "Report Time": "TBD", "Start Time": "TBD", "Location": "", "Band": "" },
        { "Date": "4/11/2025", "Day": "Friday", "Sport": "Spring Game Dress Rehearsal", "Opponent": "", "Report Time": "5:20 PM", "Start Time": "7:25 PM", "Location": "ALL", "Band": "Lincoln Tower Field" },
        { "Date": "4/12/2025", "Day": "Saturday", "Sport": "Football", "Opponent": "Spring Game", "Report Time": "TBD", "Start Time": "TBD", "Location": "ALL", "Band": "Ohio Stadium" },
        { "Date": "4/18-20/2025", "Day": "Fri.-Sun.", "Sport": "M Volleyball", "Opponent": "MIVA Tournament", "Report Time": "TBD", "Start Time": "TBD", "Location": "", "Band": "" },
        { "Date": "4/19/2025", "Day": "Saturday", "Sport": "W Lacrosse", "Opponent": "Northwestern", "Report Time": "11:00 AM", "Start Time": "12:00 PM", "Location": "SCARLET/GRAY*", "Band": "Lacrosse Stadium" },
        { "Date": "4/26/2025", "Day": "Saturday", "Sport": "Drum Major Tryouts", "Opponent": "", "Report Time": "12:00 PM", "Start Time": "1:00 PM", "Location": "MAKE-UP", "Band": "Lincoln Tower Field" },
        { "Date": "5/8-12/2025", "Day": "Thurs.-Mon.", "Sport": "M Volleyball", "Opponent": "NCAA Tournament", "Report Time": "TBD", "Start Time": "TBD", "Location": "", "Band": "Covelli" }

    ];
    
    function getNextEvent() {
        const today = new Date();
        today.setHours(0, 0, 0, 0); // Normalize to compare only dates
    
        // Convert event dates into Date objects for proper comparison
        const upcomingEvents = events.map(event => {
            let eventDateParts = event.Date.split("/");
            let formattedDate = new Date(eventDateParts[2], eventDateParts[0] - 1, eventDateParts[1]); // Convert MM/DD/YYYY to Date object
            formattedDate.setHours(0, 0, 0, 0); // Normalize date for comparison
            return { ...event, parsedDate: formattedDate };
        });
    
        // Filter to find events happening today or in the future
        const futureEvents = upcomingEvents.filter(event => event.parsedDate >= today);
    
        // Sort events by date to find the closest one
        futureEvents.sort((a, b) => a.parsedDate - b.parsedDate);
    
        // Get the next upcoming or today's event
        return futureEvents.length > 0 ? futureEvents[0] : { 
            "Date": "TBD", "Day": "TBD", "Sport": "No Upcoming Events", 
            "Opponent": "-", "Report Time": "-", "Start Time": "-", 
            "Location": "-", "Band": "-" 
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
    `;
    
    const scheduleTable = document.querySelector("#schedule tbody");
    events.forEach(event => {
        const row = document.createElement("tr");
        row.innerHTML = `<td>${event.Date}</td><td>${event.Day}</td><td>${event.Sport}</td><td>${event.Opponent}</td><td>${event["Report Time"]}</td><td>${event["Start Time"]}</td><td>${event.Location}</td><td>${event.Band}</td>`;
        scheduleTable.appendChild(row);
    });
});
