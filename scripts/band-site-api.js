const baseURL = "https://project-1-api.herokuapp.com/";
const API_KEY = "chancla";

const isCommentsPage = document.getElementById("home-page") != null

import { displayComments, addCommentForm, checkErrorsInForm, addCommentToPage } from "./index-page.js"

import { displayShows, addShowCardToPage } from "./build-shows-page.js";

class BandSiteAPI {
  constructor(apiKey) {
    this.apiKey = apiKey;
    this.baseURL = baseURL;
  }
    
    async getComments() {
        try {
            const response = await axios.get(`${this.baseURL}comments?api_key=${this.apiKey}`)
            const commentData = response.data;
            displayComments(commentData) 
        } catch (error) {
            console.error("Coudn't make API request", error)
        }
    }
    async postComment(commentObj) {
        try {
            const response = await axios.post(`${this.baseURL}comments?api_key=${this.apiKey}`, commentObj)

            addCommentToPage(response.data)
            
        } catch (error) {
            console.error("Could not post new comment ==> ", error)
        }
    }

    async getShows() {
        try {
            const response = await axios.get(`${this.baseURL}showdates?api_key=${this.apiKey}`)
            const showData = response.data;
            console.log(showData)
            displayShows(showData)

        } catch (error) {
            console.error("Couldn't display shows => ", error)
        }
    }
 }

const bandsiteAPI = new BandSiteAPI(API_KEY)


//if you are on the home page, 
if (isCommentsPage) {
    bandsiteAPI.getComments()

    addCommentForm.addEventListener("submit", (event) => {
        event.preventDefault();

        let form = event.target;
        let isValid = checkErrorsInForm(form);

        if (isValid) {
            const commentObject = {};
            const name = event.target.name.value;
            const comment = event.target.comment.value;

            commentObject.name = name;
            commentObject.comment = comment;

            bandsiteAPI.postComment(commentObject)
            form.reset()
        }
    })
} else {
    bandsiteAPI.getShows()
}
