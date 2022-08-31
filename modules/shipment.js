// You can change the content of data
let data = []

fetch('../data/shipment2.json')
  .then(response => response.json())
  .then(d => {
    data = d
  })
  .catch(error => console.log(error));

let date = ""

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

const renderDefault = function (item){
  if(item.shipment.satus?.shipmentIsDelayed){
    return `<div class="point-orange">
                <span class="dot-orange"></span>
              </div>`
  } else if(item.shipment.satus?.shipmentException) {
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

const renderDate = function (item){
  if(date !== moment(item.eventDateTime).format('MMMM Do')){
    date = moment(item.eventDateTime).format('MMMM Do')
    return `
      <h3 class="date">${moment(item.eventDateTime).format('MMMM Do')}</h3>
      <h3 class="hour">${moment(item.eventDateTime).format('h:mm a')}</h3>
    `
  }else {
    date = moment(item.eventDateTime).format('MMMM Do')
    return `
      <h3 class="date"></h3>
      <h3 class="hour">${moment(item.eventDateTime).format('h:mm a')}</h3>
    `
  }

}

function createDom() {
  const timelineCtn = document.querySelector('.timeline-ctn')
  timelineCtn.innerHTML = ''
  data.forEach((item) => {
    const timeline = `<div class="timeline">
            <div class="date-ctn">
                ${renderDate(item)}
            </div>
            <div class="sep">
                ${renderTimeline(item)}
            </div>
            <div class="details-ctn">
                <div class="detail">
                    <h3 class="status">${item.eventPosition.status ? item.eventPosition.status : ''}</h3>
                    <h3 class="comment">${item.eventPosition.comments ? item.eventPosition.comments : ''}</h3>
                </div>
                <div>
                    <h3 class="state-info">${item.eventPosition?.city ? item.eventPosition.city[0].toUpperCase() + item.eventPosition.city.slice(1).toLowerCase() : ''}, ${item.eventPosition?.country ? item.eventPosition?.country.toUpperCase() : ''}</h3>
                </div>
            </div>
        </div>`
    timelineCtn.innerHTML += timeline
  })
}

window.addEventListener('load', () => {
  createDom();
});