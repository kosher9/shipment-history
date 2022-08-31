// You can change the content of data
let data = []

fetch('../data/shipment2.json')
  .then(response => response.json())
  .then(d => {
    data = d
  })
  .catch(error => console.log(error));

let date = ""
const MIN_TEXT = 70

const renderArrived = function (item) {
  if (item.shipment.satus?.shipmentIsDelayed) {
    return `<div class="point">
                <div class="map-ctn">
                    <clr-icon class="map" shape="map-marker"></clr-icon>
                </div>
             </div>`
  } else if (item.shipment.satus?.shipmentException) {
    return `<div class="point-red">
                <div class="map-ctn">
                    <clr-icon class="map" shape="map-marker"></clr-icon>
                </div>
             </div>`
  } else {
    return `<div class="point">
                <div class="map-ctn">
                    <clr-icon class="map" shape="map-marker"></clr-icon>
                </div>
             </div>`
  }
}

const renderDelivered = function (item) {
  if (item.shipment.satus?.shipmentIsDelayed) {
    return `<div class="point-orange">
                <clr-icon class="check" shape="success-standard"></clr-icon>
              </div>`
  } else if (item.shipment.satus?.shipmentException) {
    return `<div class="point-red">
                <clr-icon class="check" shape="success-standard"></clr-icon>
              </div>`
  } else {
    return `<div class="point">
                <clr-icon class="check" shape="success-standard"></clr-icon>
              </div>`
  }
}

const renderDefault = function (item) {
  if (item.shipment.satus?.shipmentIsDelayed) {
    return `<div class="point-orange">
                <span class="dot-orange"></span>
              </div>`
  } else if (item.shipment.satus?.shipmentException) {
    return `<div class="point-red">
                <span class="dot-red"></span>
              </div>`
  } else {
    return `<div class="point">
                <span class="dot"></span>
              </div>`
  }
}

const renderTimeline = function (item) {
  const state = item.eventPosition.status
  switch (state) {
    case "ARRIVED AT YOUR PLACE":
      return renderArrived(item)
    case "DELIVERED":
      return renderDelivered(item)
    default :
      return renderDefault(item)
  }
};

const renderDate = function (item) {
  if (date !== moment(item.eventDateTime).format('MMMM Do')) {
    date = moment(item.eventDateTime).format('MMMM Do')
    return `
      <h3 class="date">${moment(item.eventDateTime).format('MMMM Do')}</h3>
      <h3 class="hour">${moment(item.eventDateTime).format('h:mm a')}</h3>
    `
  } else {
    date = moment(item.eventDateTime).format('MMMM Do')
    return `
      <h3 class="date"></h3>
      <h3 class="hour">${moment(item.eventDateTime).format('h:mm a')}</h3>
    `
  }

}

const renderComment = function (item) {
  if (item.eventPosition?.comments.length > MIN_TEXT) {
    return `<h3 class="comment">${item.eventPosition?.comments.substring(0, MIN_TEXT)}<span class="dots">...</span><span class="more">${item.eventPosition?.comments.substring(MIN_TEXT, item.eventPosition?.comments.length)}</span><button class="myBtn">View all</button></h3>`
  } else {
    return `<h3 class="comment">${item.eventPosition?.comments ? item.eventPosition.comments : ''}</h3>`
  }
}

function createDom() {
  const timelineCtn = document.querySelector('.timeline-ctn')
  timelineCtn.innerHTML = ''
  data.forEach((item, i) => {
    const timeline = `<div class="timeline">
            <div class="date-ctn">
                ${renderDate(item)}
            </div>
            <div class="sep">
                ${renderTimeline(item)}
            </div>
            <div class="details-ctn">
                <div class="detail" data-id="${i}">
                    <h3 class="status">${item.eventPosition.status ? item.eventPosition.status : ''}</h3>
                    ${renderComment(item)}
                </div>
                <div>
                    <h3 class="state-info">${item.eventPosition?.city ? item.eventPosition.city[0].toUpperCase() + item.eventPosition.city.slice(1).toLowerCase() : ''}, ${item.eventPosition?.country ? item.eventPosition?.country.toUpperCase() : ''}</h3>
                </div>
            </div>
        </div>`
    timelineCtn.innerHTML += timeline
  })
  const moreTextsButtons = timelineCtn.querySelectorAll('.myBtn')
  moreTextsButtons.forEach((button) => {
    button.addEventListener('click', (e) => {
      console.log(button)
      console.log(e.path[1].getElementsByClassName('dots'))
      let dots = e.path[1].getElementsByClassName('dots')[0];
      let moreText = e.path[1].getElementsByClassName('more')[0];
      let btnText = e.path[1].getElementsByClassName('myBtn')[0];

      if (dots.style.display === "none") {
        dots.style.display = "inline";
        btnText.innerHTML = "View all";
        moreText.style.display = "none";
      } else {
        dots.style.display = "none";
        btnText.innerHTML = "View less";
        moreText.style.display = "inline";
      }
    })
  })
}

window.addEventListener('load', () => {
  createDom();
});