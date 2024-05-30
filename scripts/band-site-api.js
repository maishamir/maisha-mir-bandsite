const baseURL = "https://project-1-api.herokuapp.com/"
const API_KEY = "faead40e-7b40-4ae3-b771-67cac927598d"
const commentDiv = document.querySelector(".comments")
const addCommentForm = document.querySelector(".form")


class BandSiteAPI {
    constructor(apiKey) {
        this.apiKey = apiKey;
        this.baseURL = baseURL
    }
    async getComments() {
        try {
            const reqResp = await axios.get(`${this.baseURL}comments?api_key=${this.apiKey}`)
            const commentObjArr = reqResp.data;

            commentObjArr.forEach((comment) => {
                const commentContainer = createTagWithClass("div", "comments-container")
                const userAvatar = createTagWithClass("div", "comments__usrAvatar")
                commentContainer.appendChild(userAvatar)

                const commentItem = createTagWithClass("div", "comments-item")
                const commentDetails = createTagWithClass("div", "comments-item__details");

                const userName = createTagWithClass("p", "comments-item__name")
                userName.innerText = comment.name;
                commentDetails.appendChild(userName);

                const commentDate = createTagWithClass("p", "comments-item__date")
                commentDate.innerText = comment.timestamp;
                commentDetails.appendChild(commentDate)

                commentItem.appendChild(commentDetails)

                const commentText = createTagWithClass("p", "comments-item__text");
                commentText.innerText = comment.comment;
                commentItem.appendChild(commentText)
                
                commentContainer.appendChild(commentItem)

                // console.log(commentContainer)
                // will be done with a separate function
                const hr = document.createElement("hr")
                commentDiv.appendChild(commentContainer)
                commentDiv.appendChild(hr)
            }) 

        } catch (error) {
            console.error("Could not make API request", error)
        }
        
    }

    async postComment(commentObj) {
        try {
            console.log(commentObj)
            await axios.post(`${this.baseURL}comments?api_key=${this.apiKey}`, commentObj)
            // const newComment = reqResp.data;
            this.getComments();

            // I could also do this
            // const requestResp = await axios.post(`${this.baseURL}comments?api_key=${this.apiKey}`, commentObj)
            //const newComment requestResp.data;
            // this.displayComment(newComment)
        } catch (error) {
            if (error.reqResp) {
                if (error.reqResp.status === 400) {
                    console.error("Either the name or the comment was included. Please double check before adding comment.", error)
                } else {
                    console.error("Error occurred while posting the comment.", error)
                }
            } else {
                console.error("There was an error while posting the comment")
            }
        }
    }
}

addCommentForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const commentObject = {};
    const name = event.target.name.value;
    const comment = event.target.comment.value;
    commentObject.name = name;
    commentObject.comment = comment;

    bandsiteAPI.postComment(commentObject)

})


function createTagWithClass(tag, className) {
    const tagEl = document.createElement(tag);
    tagEl.classList.add(className);
    return tagEl;
}

const bandsiteAPI = new BandSiteAPI(API_KEY)
bandsiteAPI.getComments()
