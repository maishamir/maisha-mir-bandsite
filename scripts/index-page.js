function createTagWithClass(tag, className) {
  const element = document.createElement(tag);
  element.classList.add(className);
  return element;
}

const commentContainer = document.querySelector(".comments");
const addCommentForm = document.querySelector(".form")

function addNewComment(event) {
  event.preventDefault()
  const commentObject = {}
  const name = event.target.name.value;
  const comment = event.target.comment.value;
  let currentDate = new Date().toLocaleDateString();

  commentObject.name = name
  commentObject.date = currentDate
  commentObject.text = comment

  // create new comment object
  //append it to the parent container
  const newComment = createComment(commentObject)
  commentContainer.appendChild(newComment)

  const hr = document.createElement("hr");
  commentContainer.appendChild(hr);
  
  event.target.reset()
}

addCommentForm.addEventListener("submit", addNewComment)

const comments = [
  {
    name: "Victor Pinto",
    date: "11/02/2023",
    text: "This is art. This is inexplicable magic expressed in the purest way, everything that makes up this majestic work deservers reverence. Let us appreciate this for what it is and what it contains.",
  },
  {
    name: "Christina Cabrera",
    date: "10/28/2023",
    text: "I feel blessed to have seen them in person. What a show! They were just perfection. If there was one day of my life I could relive, this would be it. What an incredible day.",
  },
  {
    name: "Isaac Tadesse",
    date: "10/20/2023",
    text: "I can't stop listening. Every time I hear one of their songs - the vocals - it gives me goosebumps. Shivers straight down my spine. What a beautiful expression of creativity. Can't get enough.",
  },
  {
    name: "Maisha Mir",
    date: "05/24/2024",
    text: "Awesome concert!! Can't wait to go back and hopefully see them backstage next time ;)"
  }
];

function createComment(comment) {
  const commentContainer = createTagWithClass("div", "comments-container")
  const userAvatar = createTagWithClass("div", "comments__usrAvatar")
  commentContainer.appendChild(userAvatar)

  // create comments-item div element
  const commentItem = createTagWithClass("div", "comments-item")
  // create comments-item__details div element
  const commentDetails = createTagWithClass("div", "comments-item__details")

  // create comments-item__name p element
  const userName = createTagWithClass("p", "comments-item__name");
  // set innerText to comment.name
  userName.innerText = comment.name
  // APPEND name element to details div
  commentDetails.appendChild(userName)

  // create comments-item__date p element
  const commentDate = createTagWithClass("p", "comments-item__date")
  // set innerText to comment.date
  commentDate.innerText = comment.date
  // APPEND date element to details div
  commentDetails.appendChild(commentDate)

  // APPEND THE DETAILS DIV TO THE ITEM DIV
  commentItem.appendChild(commentDetails)

  // create commenst-item__text p element
  const commentText = createTagWithClass("p", "comments-item__text")
  // set innerText to comment.text
  commentText.innerText = comment.text
  // APPEND to comments-item
  commentItem.appendChild(commentText)

  // APPEND comment-item to container element
  commentContainer.appendChild(commentItem)
// return the container element

  return commentContainer
}

comments.forEach((comment) => {
  commentContainer.appendChild(createComment(comment));
  const hr = document.createElement("hr");
  commentContainer.appendChild(hr);
});
