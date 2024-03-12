
// Example starter JavaScript for disabling form submissions if there are invalid fields
(function () {
    'use strict'
  
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.querySelectorAll('.needs-validation')
  
    // Loop over them and prevent submission
    Array.prototype.slice.call(forms)
      .forEach(function (form) {
        form.addEventListener('submit', function (event) {
          if (!form.checkValidity()) {
            event.preventDefault()
            event.stopPropagation()
          }
  
          form.classList.add('was-validated')
        }, false)
      })
})()




// Copy button for code blocks
function copyToClipboard(element) {
    var textToCopy = element.innerText;

    // Create a temporary textarea element to hold the text
    var textarea = document.createElement('textarea');
    textarea.value = textToCopy;
    document.body.appendChild(textarea);

    // Select and copy the text
    textarea.select();
    document.execCommand('copy');

    // Remove the textarea element
    document.body.removeChild(textarea);

    // Change the button icon temporarily to indicate success
    var copyButton = element.parentNode.querySelector('.copy-button');
    copyButton.innerHTML = '<i class="bi bi-clipboard-check icon"></i>';
    setTimeout(function() {
        copyButton.innerHTML = '<i class="bi bi-clipboard icon"></i>';
    }, 5000); // Reset the button icon after 2 seconds
}

// highlights JS activation
document.addEventListener('DOMContentLoaded', (event) => {
  document.querySelectorAll('code').forEach((block) => {
      hljs.highlightBlock(block);
  });
});


/*
// Define the API endpoint URL with the API key (NewsAPI.com - Pour localhost)
var url = 'https://newsapi.org/v2/everything?' +
'q=rançongiciel&' + 
'searchIn=title,content&' +
'language=fr&' +
'sortBy=publishedAt&' +
'pageSize=9&' +
'apiKey=847feb52394b4d4a8c1abbf764b33ef2';
*/

// Define the API endpoint URL with the API key (GNews.io)
apikey = '5fb7ac25da92876ef1a234673e7eca0a';
url = 'https://gnews.io/api/v4/search?q=rançongiciel&lang=fr&country=fr&max=9&apikey=' + apikey;


// Make a fetch request to the API
fetch(url)
  .then(function (response) {
    // Parse the response as JSON
    return response.json();
  })
  .then(function (data) {
    // Handle the JSON data (e.g., display it on your webpage)
    const newsFeedContainer = document.getElementById('news-feed');

    // Check if there are articles in the API response
    if (data.articles && data.articles.length > 0) {
      // Function to format a date string to a more readable format
      function formatDate(dateString) {
        const options = { year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric', hour12: false };
        const formattedDate = new Date(dateString).toLocaleDateString('fr-FR', options);
        return formattedDate;
      }

      // Loop through the articles and create HTML elements to display them
      data.articles.forEach(function (article) {
        // Format the publishedAt date
        const formattedDate = formatDate(article.publishedAt);

        // Create a card element for each article
        const articleCard = document.createElement('div');
        articleCard.className = 'col';
        articleCard.innerHTML = `
          <div class="card shadow-sm mb-3 h-100 d-flex">
              <img src="${article.image || 'https://via.placeholder.com/150'}" class="card-img-top" alt="Article Image" style="height: 200px; object-fit: cover;">
              <div class="card-body">
                  <h5 class="card-title">${article.title}</h5>
                  <p class="card-text">${formattedDate}</p>
                  <div class="d-flex justify-content-between align-items-center">
                      <div class="btn-group position-absolute bottom-0 left-0 mb-3 mt-3">
                          <a href="${article.url}"><button type="button" class="btn btn-sm btn-outline-secondary">Lire l'article</button></a>
                      </div> 
                      <small class="text-muted position-absolute bottom-0 end-0 mb-3 me-3">${article.source.name}</small>
                  </div>
              </div>
          </div>
        `;

        // Append the card to the news feed container
        newsFeedContainer.appendChild(articleCard);
      });
    } else {
      // Display a message if no articles were found
      newsFeedContainer.innerHTML = '<p>No news articles available.</p>';
    }
  })
  .catch(function (error) {
    // Handle any errors that occurred during the fetch
    console.error('Error fetching data:', error);
  });



  

