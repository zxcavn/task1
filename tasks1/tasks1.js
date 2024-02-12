const downloads = [{
    id:1,
    title:"Recipe", status:"Done"
},
{
    id:2,
    title:"Workouts", status:"Pending"
},
{
    id:3,
    title:"Passwords", status:"Pending"
},
{
    id:4,
    title:"To DO 2021", status:"Pending"
},
{
    id:5,
    title:"Books", status:"Failed"
}]


function renderTable() {
    const tableBody = document.querySelector('#downloadsTable tbody');
    tableBody.innerHTML = '';
    downloads.forEach(download => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${download.id}</td>
            <td>${download.title}</td>
            <td>${download.status}</td>
        `;
        tableBody.appendChild(row);
    });
}

function checkStatus() {
    console.log("Check started");
    const pendingDownloads = downloads.filter(download => download.status === "Pending");
    if (pendingDownloads.length > 0) {
        const randomIndex = Math.floor(Math.random() * pendingDownloads.length);
        pendingDownloads[randomIndex].status = "Done";
        renderTable();
        setTimeout(checkStatus, 5000);
    } else {
        console.log("All downloads are done.");
    }
}

document.getElementById('startButton').addEventListener('click', () => {
    setTimeout(checkStatus, 3000);
});

renderTable();