
function sendRequest(data, url, redirect, history) {

  fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  })
    .then((response) => {
      if (response.ok) {
        console.log('Data sent successfully');
        history.push(redirect);
      } else {
        console.error('Failed to send data');
      }
    })
    .catch((error) => {
      console.error('Error:', error);
    });
}

async function getRequest(url) {
    
    await fetch(url)
    .then(res => {
        console.log(res)
        return res.json();
    })
}
  


function deleteRequest(url) {
    fetch(url, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => {
        if (response.ok) {
          console.log('Data deleted successfully');
        } else {
          console.error('Failed to delete data');
        }
      })
      .catch((error) => {
        console.error('Error:', error);
      });
}

function updateRequest(url, data) {
    fetch(url, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then((response) => {
        if (response.ok) {
          console.log('Data deleted successfully');
        } else {
          console.error('Failed to delete data');
        }
      })
      .catch((error) => {
        console.error('Error:', error);
      });
}



  

export { sendRequest, getRequest, deleteRequest, updateRequest };
