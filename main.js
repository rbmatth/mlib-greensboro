function run() {
  // Creating Our XMLHttpRequest object
  let xhr = new XMLHttpRequest();

  // Making our connection
  let url =
    "https://bdfed.stitch.mlbinfra.com/bdfed/stats/player?stitch_env=prod&season=2024&sportId=13&stats=season&group=hitting&gameType=R&limit=25&offset=0&sortStat=homeRuns&order=desc&leagueIds=116&teamId=477";
    // "https://bdfed.stitch.mlbinfra.com/bdfed/stats/player?stitch_env=prod&season=2024&sportId=13&stats=season&group=hitting&gameType=R&limit=25&offset=0&sortStat=homeRuns&order=desc&leagueIds=116&teamId=477";
  xhr.open("GET", url, true);

  // function execute after request is successful
  xhr.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      const table = document.createElement("table");
      document.body.appendChild(table);

      const response = JSON.parse(this.responseText);

      const keys = Object.keys(response.stats[0]);
      const tr = document.createElement("tr");
      table.appendChild(tr);

      keys.forEach((key) => {
        const th = document.createElement("th");
        th.innerText = key;
        tr.appendChild(th);
      });

      response.stats.forEach((player) => {
        const tr = document.createElement("tr");
        table.appendChild(tr);

        const values = Object.values(player);
        values.forEach((value) => {
            const td = document.createElement("td");
            td.innerText = value;
            tr.appendChild(td);
        });

        // console.log(Object.values(player));
      });
    }
  };
  // Sending our request
  xhr.send();
}

run();
