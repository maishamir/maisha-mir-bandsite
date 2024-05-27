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

function createTagWithClass(tag, classNames) {
  const element = document.createElement(tag);
  classNames.forEach((className) => {
    element.classList.add(className);
  });
  return element;
}

function createShowCard(show) {
  let showItem = createTagWithClass("div", ["show"]);
  let showInfo = createTagWithClass("div", ["show-info"]);
  showItem.appendChild(showInfo);

  let dateLabel = createTagWithClass("p", ["show-info__label"]);
  dateLabel.innerText = "DATE";
  showInfo.appendChild(dateLabel);
  let dateValue = createTagWithClass("p", [
    "show-info__detail",
    "show-info__detail--date",
  ]);
  dateValue.innerText = show.date;
  showInfo.appendChild(dateValue);

  let showInfoTwo = createTagWithClass("div", ["show-info"]);
  showItem.appendChild(showInfoTwo);

  let venueLabel = createTagWithClass("p", ["show-info__label"]);
  venueLabel.innerText = "VENUE";
  showInfoTwo.appendChild(venueLabel);
  let venueValue = createTagWithClass("p", ["show-info__detail"]);
  venueValue.innerText = show.venue;
  showInfoTwo.appendChild(venueValue);

  let showInfoThree = createTagWithClass("div", ["show-info"]);
  showItem.append(showInfoThree);

  let locationLabel = createTagWithClass("p", ["show-info__label"]);
  locationLabel.innerText = "LOCATION";
  showInfoThree.appendChild(locationLabel);
  let locationValue = createTagWithClass("p", ["show-info__detail"]);
  locationValue.innerText = show.location;
  showInfoThree.appendChild(locationValue);

  const button = document.createElement("button");
  button.innerHTML = "BUY TICKETS";

  showItem.appendChild(button);

  return showItem;
}

let showsContainer = document.querySelector(".show-container");

shows.forEach((show) => {
  showsContainer.appendChild(createShowCard(show));
  const hr = document.createElement("hr");
  showsContainer.appendChild(hr);
});
