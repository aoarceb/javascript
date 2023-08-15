const app = document.getElementById('root')

const logo = document.createElement('img')
logo.src = 'logo.png'

const container = document.createElement('div')
container.setAttribute('class', 'container')

app.appendChild(logo)
app.appendChild(container)

var request = new XMLHttpRequest()
request.open('GET', 'https://jsonplaceholder.typicode.com/users', true)
request.onload = function () {
  // Begin accessing JSON data here
  var data = JSON.parse(this.response)
  if (request.status >= 200 && request.status < 400) {
        
	  // Get the table body to populate data
	  const tableBody = document.querySelector('#myTable tbody');
	  // Populate the table with data
      data.forEach(user => {
      const row = document.createElement('tr');
      row.innerHTML = `
        <td>${user.username}</td>
        <td>${user.name}</td>
        <td>${user.email}</td>
      `;
	  
	  
	  // Apply background color based on age
      if (user.username == "Kamren") {
        row.classList.add('row-middle');
      } 
	 
	  
	  
      tableBody.appendChild(row);
    })
	  
		   
	  
    
  } else {
    const errorMessage = document.createElement('marquee')
    errorMessage.textContent = `Gah, it's not working!`
    app.appendChild(errorMessage)
  }
}
request.send()





