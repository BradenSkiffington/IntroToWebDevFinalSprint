fetch("sprint.json")
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error(error))

fetch("sprint.json")
  .then(response => response.json())
  .then(data => {
    data.forEach(record => console.log(record.name));
  })
  .catch(error => console.error(error));

fetch("sprint.json")
  .then(response => response.json())
  .then(data => {
    
    function countRecords() {
        return `Total number of records: ${data.length}`;
    }

    function dataType() {
        return `Data type: ${typeof data}`;
    }

    function recordKeys() {
        let keys = [];
        data.forEach(record => {
            for (let key in record) {
                if(!keys.includes(key)) {
                    keys.push(key);
                }
            }
        });
        return `Keys present in each record: ${keys.join(", ")}`;
    }
    console.log(countRecords());
    console.log(dataType());
    console.log(recordKeys());
  })
  .catch(error => console.error(error));

  var xhr = new XMLHttpRequest();
  xhr.open('GET', 'sprint.json', true);
  xhr.onload = function() {
      if (xhr.status === 200) {
          var jsonData = JSON.parse(xhr.responseText);
          console.log(jsonData); // log JSON data to console
          displayData(jsonData); // pass JSON data to displayData function
      }
  };
  xhr.send();
  
  function displayData(data) {
    var table = document.getElementById("recordsTable");
    var tbody = table.getElementsByTagName("tbody")[0];
    tbody.innerHTML = ""; // Clear the table body
    
    data.forEach(record => {
        var row = tbody.insertRow();
        var nameCell = row.insertCell();
        nameCell.innerHTML = record.name;
        var ageCell = row.insertCell();
        ageCell.innerHTML = record.age;
        var hometownCell = row.insertCell();
        hometownCell.innerHTML = record.hometown;
        var emailCell = row.insertCell();
        emailCell.innerHTML = record.email;
    });

  }
