//function to update content when user clicks on a blog

function changeContent(articleId, event) {
  event.preventDefault();
  // Get the container elements
  const imageContainer = document.querySelector('.blog-image');
  const headingContainer = document.querySelector('.leftContent h1');
  const contentContainer = document.querySelector('.explain p');

  // Update content based on the user's choice
  switch (articleId) {
    case 'article1':
      imageContainer.src = 'https://media.istockphoto.com/id/1068586316/vector/mountain-orchard-spring.webp?s=2048x2048&w=is&k=20&c=C6EMVfuW-8Gpd3x4AJYbzNNDVbRS22ZkrufmxbtO7zs=';
      headingContainer.innerText = 'Mountain Orchard Spring!';
      contentContainer.innerText = " 'Orchard flowers' generally refer to the various types of flowers that bloom in or around orchards. Orchards are typically planted with fruit-bearing trees, such as apple, pear, cherry, peach, or citrus trees. The flowers in an orchard play a crucial role in the pollination process, ultimately leading to the development of fruits. The specific types of flowers in an orchard can vary depending on the types of fruit trees present and the region in which the orchard is located. Fruit trees typically produce blossoms in the spring before developing into fruit later in the season. The appearance and fragrance of orchard flowers can be quite diverse.";
      break;

    case 'article2':
      imageContainer.src = 'https://media.istockphoto.com/id/1129167882/vector/two-heads-with-brain-looking-opposite-side.webp?s=2048x2048&w=is&k=20&c=1Y0RmAl7moiEAdjksxkmyEnw3vWzGZz2aPbmcOQhRq8=';
      headingContainer.innerText = 'Two Heads With Brain Looking Opposite Side';
      contentContainer.innerText = 'As most people know, it is the opposite side of the brain which is in control of the other side of your body. For example, the right hand is controlled by the left side of the brain and vice versa. Much like the author of this seminal book, I am a normal, everyday right-handed person who often gets confused over which direction is which (which may mean mixed dominance in the sides of the brain). However, the ‘dominant’ side is, in much of the population, the left side. Therefore, more people are right handed than left handed. Because of this, left-handedness has been given a bad rap throughout history (being referred to as ‘sinister’ and wrong — the hand of the devil in fact) and has led to many people actively discouraging left-handedness in their children. Luckily, this practice is rarely encountered today. It is the left side of the brain which is, however, still dominant. This is the side which deals with language; reading and writing, analysis and linear thinking. Logical thought is left-sided; as is numerical, digital and mathematical problem solving. The abstract and symbolic live in this side, as does our relationship to time (timekeeping and temporal awareness). Conversely, the right side of the brain (still referred to as the ‘minor’ side) is visual; spatial awareness is co-ordinated by this side of the brain. It is intuitive and subjective. ';
      break;

    case 'article3':
      imageContainer.src = 'https://media.istockphoto.com/id/1354452359/vector/sailboat-on-the-open-book-with-waves-sun-and-flying-birds.jpg?s=2048x2048&w=is&k=20&c=W316O7TTNvcSj848vOU2F1ba0BCaeOBpm6FxvJPGv6I=';
      headingContainer.innerText = 'Sailboat on the open book with waves, sun and flying birds';
      contentContainer.innerText = 'None of them knew the colour of the sky. Their eyes glanced level, and were fastened upon the waves that swept toward them. These waves were of the hue of slate, save for the tops, which were of foaming white, and all of the men knew the colours of the sea. The horizon narrowed and widened, and dipped and rose, and at all times its edge was jagged with waves that seemed thrust up in points like rocks.Many a man ought to have a bath-tub larger than the boat which here rode upon the sea. These waves were most wrongfully and barbarously abrupt and tall, and each froth-top was a problem in small boat navigation.The cook squatted in the bottom and looked with both eyes at the six inches of gunwale which separated him from the ocean. His sleeves were rolled over his fat forearms, and the two flaps of his unbuttoned vest dangled as he bent to bail out the boat. Often he said: “Gawd! That was a narrow clip.” As he remarked it he invariably gazed eastward over the broken sea. The oiler, steering with one of the two oars in the boat, sometimes raised himself suddenly to keep clear of water that swirled in over the stern. It was a thin little oar and it seemed often ready to snap. The correspondent, pulling at the other oar, watched the waves and wondered why he was there.';
      break;

    case 'article4':
      imageContainer.src = 'https://media.istockphoto.com/id/1421301993/photo/shopping-cart-sign-on-the-cube-shape-dice.webp?s=2048x2048&w=is&k=20&c=8bSRbfu6W5QWIaHRRxWnGJ07MKPfOS3fzKz6KhnG5cA=';
      headingContainer.innerText = 'Shopping Cart sign on the cube shape dice ';
      contentContainer.innerText = 'Shopping Cart Sign: The inclusion of the shopping cart symbol may indicate a connection to online shopping or commerce. The shopping cart is commonly associated with e-commerce websites, representing a place where users can collect items for purchase. Cube Shape Dice: The use of a cube-shaped dice adds an interesting twist. A cube is a geometric shape with six faces, and a traditional six-sided die is cube-shaped. Each face of the die typically has a different number of dots, indicating a random outcome when rolled.Putting it together, the title might symbolize a random or unexpected aspect related to online shopping. It could suggest that, in the world of e-commerce, there are elements of chance, surprise, or unpredictability. The shopping cart sign on the dice may represent the randomness or variety of experiences one can encounter while engaging in online shopping.';
      break;

    case 'article5':
      imageContainer.src = 'https://media.istockphoto.com/id/1179127421/photo/manager-is-holding-product-liability-insurance-policy.webp?s=2048x2048&w=is&k=20&c=o2nRm9sTNfblhtaYUtXVQ_iBJPR6vSR1RJvCnBgnm0c=';
      headingContainer.innerText = 'Manager is holding Product Liability Insurance policy';
      contentContainer.innerText = 'The title "Manager is holding Product Liability Insurance policy" indicates a focus on a manager who oversees and manages a specific type of insurance known as Product Liability Insurance. The content may explore the manager responsibilities, the importance of this insurance for businesses, and its role in mitigating risks associated with potential product-related issues. In summary, the title suggests an exploration of how a manager is actively involved in handling a product liability insurance policy. The content might delve into the importance of such insurance for businesses, the manager responsibilities in maintaining it, and possibly real-world examples or scenarios related to product liability and insurance coverage. The specifics would depend on the actual content within the article.';
      break;

      default:
      break;
  }
}


//function to save the new blog post
document.addEventListener('DOMContentLoaded', function() {
  var form = document.getElementById('blogForm');

  form.addEventListener('submit', function(event) {
    event.preventDefault();

    var isConfirmed = window.confirm('Are you sure you want to save the details?');

    if (isConfirmed) {
      var formData = new FormData(form);

      fetch('http://localhost:8080/new', {
        method: 'POST',
        body: formData,
      })
      .then(response => response.json())
      .then(data => {
        console.log('Data sent successfully:', data);

        // Reset the form fields
        form.reset();

        // Show confirmation message
        showConfirmation();
      })
      .catch(error => {
        console.error('Error sending data:', error);
      });
    }
  });

  function showConfirmation() {
    var confirmationElement = document.querySelector('.confirmation');
    confirmationElement.style.display = 'block';

    // Hide confirmation message after 3 seconds
    setTimeout(function() {
      confirmationElement.style.display = 'none';
    }, 3000);
  }
});
