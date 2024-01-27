
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
    // URL of the RSS feed
    const rssFeedUrl = 'assets/RSS/rss(1).xml';

    // Function to fetch and display the RSS feed content
    async function fetchRssFeed() {
        try {
            const response = await fetch(rssFeedUrl);
            const xmlText = await response.text();
            const parser = new DOMParser();
            const xmlDoc = parser.parseFromString(xmlText, 'text/xml');
            const items = xmlDoc.querySelectorAll('item');

            const rssContainer = document.getElementById('rss-container');
            
            items.forEach(item => {
                const title = item.querySelector('title').textContent;
                const link = item.querySelector('link').textContent;
                const description = item.querySelector('description').textContent;

                const card = document.createElement('div');
                card.className = 'col';
                card.innerHTML = `
                    <div class="card shadow-sm mb-3 h-100 d-flex">
                    <svg class="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c"/><text x="50%" y="50%" fill="#eceeef" dy=".3em">Thumbnail</text></svg>
                        <div class="card-body">
                            <h5 class="card-title">${title}</h5>
                            <p class="card-text">${description}</p>
                            <div class="d-flex justify-content-between align-items-center">
                              <div class="btn-group">
                                <a href="${link}><button type="button" class="btn btn-sm btn-outline-secondary">Read more</button></a>
                              </div> 
                              <small class="text-muted">9 mins</small>
                            </div>
                        </div>
                    </div>
                `;

                rssContainer.appendChild(card);
            });
        } catch (error) {
            console.error('Error fetching RSS feed:', error);
        }
    }

    // Call the fetchRssFeed function when the page loads
    document.addEventListener('DOMContentLoaded', fetchRssFeed);

*/
  


// Define the API endpoint URL with the API key
var url = 'https://newsapi.org/v2/everything?' +
'q=api&' + 
'searchIn=title,content&' + 
'pageSize=60&' +
'apiKey=847feb52394b4d4a8c1abbf764b33ef2';

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
              <div class="card-body">
                  <h5 class="card-title">${article.title}</h5>
                  <p class="card-text">${formattedDate}</p>
                  <div class="d-flex justify-content-between align-items-center">
                      <div class="btn-group position-absolute bottom-0 left-0 mb-3 mt-3">
                          <a href="${article.url}"><button type="button" class="btn btn-sm btn-outline-secondary">Read more</button></a>
                      </div> 
                      <small class="text-muted position-absolute bottom-0 end-0 mb-3 me-3">${article.author}</small>
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



