function createTagWithClass(tag, className) {
  const element = document.createElement(tag);
  element.classList.add(className);
  return element;
}

const commentContainer = document.querySelector(".comments");
const addCommentForm = document.querySelector(".form");

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
  const date = new Date(comment.timestamp).toLocaleDateString("en-US")
  commentDate.innerText = date;
  
  commentDetails.appendChild(commentDate);

  commentItem.appendChild(commentDetails);

  const commentText = createTagWithClass("p", "comments-item__text");
  commentText.innerText = comment.comment;
  commentItem.appendChild(commentText);

  commentContainer.appendChild(commentItem);

  return commentContainer;
}

function displayComments(comments) {
  commentContainer.innerHTML = '';
  const newComments = [...comments]
  newComments.sort((a, b) => {
    return a.timestamp - b.timestamp
  })
  newComments.forEach((comment) => {
    console.log(comment)
    addCommentToPage(comment)
  })
}

function addCommentToPage(comment) {
  const newCommentElement = createComment(comment)
  commentContainer.prepend(newCommentElement);
  const hr = document.createElement("hr");
  commentContainer.prepend(hr)
}

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


export {
  displayComments,
  commentContainer,
  addCommentForm,
  checkErrorsInForm,
  addCommentToPage,
  createComment
}