const baseURL = "https://project-1-api.herokuapp.com/";
const API_KEY = "chancla";

const isCommentsPage = document.getElementById("home-page") != null;

import {
  displayComments,
  addCommentForm,
  checkErrorsInForm,
  addCommentToPage,
} from "./index-page.js";

import { displayShows } from "./build-shows-page.js";

class BandSiteAPI {
  constructor(apiKey) {
    this.apiKey = apiKey;
    this.baseURL = baseURL;
  }

  async getComments() {
    try {
      const response = await axios.get(
        `${this.baseURL}comments?api_key=${this.apiKey}`
      );
      const commentData = response.data;
      displayComments(commentData);
    } catch (error) {
      console.error("Coudn't make API request", error);
    }
  }
  async postComment(commentObj) {
    try {
      const response = await axios.post(
        `${this.baseURL}comments?api_key=${this.apiKey}`,
        commentObj
      );

      addCommentToPage(response.data);
    } catch (error) {
      console.error("Could not post new comment ==> ", error);
    }
  }

  async getShows() {
    try {
      const response = await axios.get(
        `${this.baseURL}showdates?api_key=${this.apiKey}`
      );
      const showData = response.data;
      console.log(showData);
      displayShows(showData);
      addShowEventListeners();
    } catch (error) {
      console.error("Couldn't display shows => ", error);
    }
  }
}

const bandsiteAPI = new BandSiteAPI(API_KEY);

//if you are on the home page,
if (isCommentsPage) {
  bandsiteAPI.getComments();

  addCommentForm.addEventListener("submit", (event) => {
    event.preventDefault();

    let form = event.target;
    let isValid = checkErrorsInForm(form);

    if (isValid) {
      const commentObject = {name: event.target.name.value, comment: event.target.comment.value};

      bandsiteAPI.postComment(commentObject);
      form.reset();
    }
  });
} else {
  bandsiteAPI.getShows();

}
function addShowEventListeners() {
  const showContainer = document.querySelector('.show-container__shows');
  console.log("Show container:", showContainer);

  showContainer.addEventListener('click', (event) => {
    const showItem = event.target;
    console.log("Clicked item:", showItem);

    if (showItem.classList.contains('show')) {
      // Remove the selected class from the previously selected item
      const previouslySelected = document.querySelector('.show--active');
      if (previouslySelected && previouslySelected !== showItem) {
        previouslySelected.classList.remove('show--active');
        console.log("Removed selected class from:", previouslySelected);
      }

      // Toggle the selected class on the clicked item
      showItem.classList.toggle('show--active');
      console.log("Toggled selected class on:", showItem);
    }
  });
}