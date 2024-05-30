const baseURL = "https://project-1-api.herokuapp.com/"
const API_KEY = "faead40e-7b40-4ae3-b771-67cac927598d"
const commentDiv = document.querySelector(".comments")


class BandSiteAPI {
    constructor(apiKey) {
        this.apiKey = apiKey;
        this.baseURL = baseURL
    }
    async getComments() {
        try {
            const reqResp = await axios.get(`${this.baseURL}comments?api_key=${this.apiKey}`)
            const commentObjArr = reqResp.data;
            console.log(commentObjArr)

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

    
}

function createTagWithClass(tag, className) {
    const tagEl = document.createElement(tag);
    tagEl.classList.add(className);
    return tagEl;
}

const bandsiteAPI = new BandSiteAPI(API_KEY)
bandsiteAPI.getComments()
