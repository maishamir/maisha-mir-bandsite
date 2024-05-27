function createTagWithClass(tag, className) {
  const element = document.createElement(tag);
  element.classList.add(className);
  return element;
}

const commentContainer = document.querySelector(".comments");
const addCommentForm = document.querySelector(".form");

function addNewComment(event) {
  event.preventDefault();

  //check that no form inputs are invalid (add red border if they are)
  let form = event.target;
  let validInputs = checkErrorsInForm(form);

  if (validInputs) {
    const commentObject = {};
    const name = event.target.name.value;
    const comment = event.target.comment.value;
    let currentDate = new Date().toLocaleDateString();

    commentObject.name = name;
    commentObject.date = currentDate;
    commentObject.text = comment;

    const newComment = createComment(commentObject);
    commentContainer.appendChild(newComment);

    const hr = document.createElement("hr");
    commentContainer.appendChild(hr);

    event.target.reset();
  } else {
    console.log("Invalid inputs!")
  }
}

addCommentForm.addEventListener("submit", addNewComment);

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
];

function createComment(comment) {
  const commentContainer = createTagWithClass("div", "comments-container");
  const userAvatar = createTagWithClass("div", "comments__usrAvatar");
  commentContainer.appendChild(userAvatar);

  const commentItem = createTagWithClass("div", "comments-item");
  const commentDetails = createTagWithClass("div", "comments-item__details");

  const userName = createTagWithClass("p", "comments-item__name");
  userName.innerText = comment.name;
  commentDetails.appendChild(userName);

  const commentDate = createTagWithClass("p", "comments-item__date");
  commentDate.innerText = comment.date;
  commentDetails.appendChild(commentDate);

  commentItem.appendChild(commentDetails);

  const commentText = createTagWithClass("p", "comments-item__text");
  commentText.innerText = comment.text;
  commentItem.appendChild(commentText);

  commentContainer.appendChild(commentItem);

  return commentContainer;
}

comments.forEach((comment) => {
  commentContainer.appendChild(createComment(comment));
  const hr = document.createElement("hr");
  commentContainer.appendChild(hr);
});

function checkErrorsInForm(form) {
  const inputs = form.querySelectorAll("input, textarea");
  let valid = true;

  inputs.forEach((input) => {
    if (!input.value) {
      input.classList.add("invalid");
      valid = false;
    } else {
      input.classList.remove("invalid");
    }
  });
  return valid;
}
