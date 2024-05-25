const shows = [
  {
    date: "Mon Sept 09 2024",
    venue: "Ronald Lane",
    location: "San Francisco, CA",
  },
  {
    date: "Tue Sept 17 2024",
    venue: "Pier 3 East",
    location: "San Francisco, CA",
  },
  {
    date: "Wed Dec 18 2024",
    venue: "Press Club",
    location: "San Francisco, CA",
  },
];

/* 
    <div class="show-item">
        <div class="show-item__date">
            <p>DATE</p>
            <p>date</p>
        </div>
        <div class="show-item__venue">
            <p>VENUE</p>
            <p>venue</p>
        </div>
        <div class="show-item__location">
            <p>LOCATION</p>
            <p>location</p>
        </div>
    </div>
*/

function createShowCard(show) {
  let showItem = document.createElement("div"); //div class show-item
  showItem.classList.add("show");
  let dateItem = document.createElement("div"); //div class show-item__date

  // <p>DATE</p>
  const dateLabel = document.createElement("p");
  dateLabel.classList.add("show-info__label");
  dateLabel.innerHTML = "DATE";
  dateItem.appendChild(dateLabel);

  // <p>date</p>
  const date = document.createElement("p");
  date.classList.add("show-info__detail--date");
  date.innerHTML = show.date;
  dateItem.appendChild(date);

  showItem.appendChild(dateItem);

  let venueItem = document.createElement("div");

  // <p>VENUE</p>
  const venueLabel = document.createElement("p");
  venueLabel.classList.add("show-info__label");
  venueLabel.innerHTML = "VENUE";
  venueItem.appendChild(venueLabel);

  // <p>venue</p>
  const venue = document.createElement("p");
  venue.innerHTML = show.venue;
  venueItem.appendChild(venue);

  showItem.appendChild(venueItem);
  let locationItem = document.createElement("div");

  // <p>LOCATION</p>
  const locationLabel = document.createElement("p");
  locationLabel.classList.add("show-info__label");
  locationLabel.innerHTML = "LOCATION";
  locationItem.appendChild(locationLabel);

  // <p>location</p>
  const location = document.createElement("p");
  location.innerHTML = show.location;
  locationItem.appendChild(location);

  showItem.appendChild(locationItem);

  const button = document.createElement("button");
  button.innerHTML = "BUY TICKETS";

  showItem.appendChild(button);
  return showItem;
}

let showsContainer = document.querySelector(".show-container");

// for each object in the shows array, run the createShowItem and append it to the showsContainer
shows.forEach((show) => {
  showsContainer.appendChild(createShowCard(show));
  const hr = document.createElement("hr");
  showsContainer.appendChild(hr);
});
