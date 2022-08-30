// You can change the content of data
const data = [
  {
    "eventDateTime": "2022-08-24T09:37:13.504Z",
    "shipment": { "satus": { "shipmentIsDelayed": 1 } },
    "eventPosition": {
      "status": "IN TRANSIT",
      "comments": "",
      "city": "DAKAR",
      "country": "SN"
    }
  },
  {
    "eventDateTime": "2022-08-24T19:37:13.504Z",
    "shipment": { "satus": { "shipmentIsDelayed": 1 } },
    "eventPosition": {
      "status": "PICK UP DELAYED",
      "comments": "Lorem ipsum dolorLorem ipsum dolorLorem ipsum dolorLorem ipsum dolor",
      "city": "KINSHASA",
      "country": "CD"
    }
  },
  {
    "eventDateTime": "2022-08-25T05:37:13.504Z",
    "shipment": { "satus": { "shipmentIsDelayed": 0 } },
    "eventPosition": {
      "status": "PICK UP DELAYED",
      "comments": "Lorem ipsum dolorLorem ipsum dolorLorem ipsum dolorLorem ipsum dolor",
      "city": "LESOTHO",
      "country": "ZA"
    }
  },
  {
    "eventDateTime": "2022-08-25T15:37:13.504Z",
    "shipment": { "satus": { "shipmentIsDelayed": 1 } },
    "eventPosition": {
      "status": "ARRIVED AT YOUR PLACE",
      "comments": "Lorem ipsum dolorLorem ipsum dolorLorem ipsum dolorLorem ipsum dolor",
      "city": "TENKODOGO",
      "country": "BF"
    }
  },
  {
    "eventDateTime": "2022-08-26T01:37:13.504Z",
    "shipment": { "satus": { "shipmentIsDelayed": 1 } },
    "eventPosition": {
      "status": "IN TRANSIT",
      "comments": "Lorem ipsum dolorLorem ipsum dolorLorem ipsum dolorLorem ipsum dolor",
      "city": "DOUALA",
      "country": "CM"
    }
  },
  {
    "eventDateTime": "2022-08-26T11:37:13.504Z",
    "shipment": { "satus": { "shipmentIsDelayed": 0 } },
    "eventPosition": {
      "status": "IN TRANSIT",
      "comments": "Lorem ipsum dolor",
      "city": "CAPE TOWN",
      "country": "ZA"
    }
  },
  {
    "eventDateTime": "2022-08-26T21:37:13.504Z",
    "shipment": { "satus": { "shipmentIsDelayed": 0 } },
    "eventPosition": {
      "status": "PICK UP SCHEDULE",
      "comments": "Lorem ipsum dolorLorem ipsum dolor",
      "city": "ABUJA",
      "country": "NG"
    }
  },
  {
    "eventDateTime": "2022-08-27T07:37:13.504Z",
    "shipment": { "satus": { "shipmentIsDelayed": 1 } },
    "eventPosition": {
      "status": "ARRIVED AT YOUR PLACE",
      "comments": "Lorem ipsum dolorLorem ipsum dolorLorem ipsum dolor",
      "city": "MOPTI",
      "country": "ML"
    }
  },
  {
    "eventDateTime": "2022-08-27T17:37:13.504Z",
    "shipment": { "satus": { "shipmentIsDelayed": 0 } },
    "eventPosition": {
      "status": "PICK UP DELAYED",
      "comments": "Lorem ipsum dolorLorem ipsum dolor",
      "city": "YAOUNDE",
      "country": "CM"
    }
  },
  {
    "eventDateTime": "2022-08-28T03:37:13.504Z",
    "shipment": { "satus": { "shipmentIsDelayed": 0 } },
    "eventPosition": {
      "status": "PICK UP SCHEDULE",
      "comments": "Lorem ipsum dolorLorem ipsum dolor",
      "city": "KIKWIT",
      "country": "CD"
    }
  },
  {
    "eventDateTime": "2022-08-28T13:37:13.504Z",
    "shipment": { "satus": { "shipmentIsDelayed": 0 } },
    "eventPosition": {
      "status": "IN TRANSIT",
      "comments": "Lorem ipsum dolorLorem ipsum dolor",
      "city": "CAPE TOWN",
      "country": "ZA"
    }
  },
  {
    "eventDateTime": "2022-08-28T23:37:13.504Z",
    "shipment": { "satus": { "shipmentIsDelayed": 1 } },
    "eventPosition": {
      "status": "PICK UP SCHEDULE",
      "comments": "Lorem ipsum dolorLorem ipsum dolorLorem ipsum dolorLorem ipsum dolor",
      "city": "DAKAR",
      "country": "SN"
    }
  },
  {
    "eventDateTime": "2022-08-29T09:37:13.504Z",
    "shipment": { "satus": { "shipmentIsDelayed": 0 } },
    "eventPosition": {
      "status": "PICK UP DELAYED",
      "comments": "Lorem ipsum dolorLorem ipsum dolor",
      "city": "MOPTI",
      "country": "ML"
    }
  },
  {
    "eventDateTime": "2022-08-29T19:37:13.504Z",
    "shipment": { "satus": { "shipmentIsDelayed": 0 } },
    "eventPosition": {
      "status": "PICK UP DELAYED",
      "comments": "Lorem ipsum dolorLorem ipsum dolorLorem ipsum dolor",
      "city": "OUAGADOUGOU",
      "country": "BF"
    }
  },
  {
    "eventDateTime": "2022-08-30T05:37:13.504Z",
    "shipment": { "satus": { "shipmentIsDelayed": 0 } },
    "eventPosition": {
      "status": "ARRIVED AT YOUR PLACE",
      "comments": "",
      "city": "MOPTI",
      "country": "ML"
    }
  },
  {
    "eventDateTime": "2022-08-30T15:37:13.504Z",
    "shipment": { "satus": { "shipmentIsDelayed": 1 } },
    "eventPosition": {
      "status": "IN TRANSIT",
      "comments": "",
      "city": "GAO",
      "country": "ML"
    }
  },
  {
    "eventDateTime": "2022-08-31T01:37:13.504Z",
    "shipment": { "satus": { "shipmentIsDelayed": 0 } },
    "eventPosition": {
      "status": "ARRIVED AT YOUR PLACE",
      "comments": "Lorem ipsum dolorLorem ipsum dolor",
      "city": "KINSHASA",
      "country": "CD"
    }
  },
  {
    "eventDateTime": "2022-08-31T11:37:13.504Z",
    "shipment": { "satus": { "shipmentIsDelayed": 0 } },
    "eventPosition": {
      "status": "PICK UP SCHEDULE",
      "comments": "Lorem ipsum dolorLorem ipsum dolorLorem ipsum dolor",
      "city": "GAO",
      "country": "ML"
    }
  },
  {
    "eventDateTime": "2022-08-31T21:37:13.504Z",
    "shipment": { "satus": { "shipmentIsDelayed": 1 } },
    "eventPosition": {
      "status": "ARRIVED AT YOUR PLACE",
      "comments": "",
      "city": "LAGOS",
      "country": "NG"
    }
  },
  {
    "eventDateTime": "2022-09-01T07:37:13.504Z",
    "shipment": { "satus": { "shipmentIsDelayed": 0 } },
    "eventPosition": {
      "status": "ARRIVED AT YOUR PLACE",
      "comments": "Lorem ipsum dolor",
      "city": "KIKWIT",
      "country": "CD"
    }
  },
  {
    "eventDateTime": "2022-09-01T17:37:13.504Z",
    "shipment": { "satus": { "shipmentIsDelayed": 1 } },
    "eventPosition": {
      "status": "IN TRANSIT",
      "comments": "Lorem ipsum dolor",
      "city": "YAOUNDE",
      "country": "CM"
    }
  },
  {
    "eventDateTime": "2022-09-02T03:37:13.504Z",
    "shipment": { "satus": { "shipmentIsDelayed": 0 } },
    "eventPosition": {
      "status": "ARRIVED AT YOUR PLACE",
      "comments": "Lorem ipsum dolorLorem ipsum dolorLorem ipsum dolorLorem ipsum dolor",
      "city": "DOUALA",
      "country": "CM"
    }
  },
  {
    "eventDateTime": "2022-09-02T13:37:13.504Z",
    "shipment": { "satus": { "shipmentIsDelayed": 1 } },
    "eventPosition": {
      "status": "PICK UP SCHEDULE",
      "comments": "",
      "city": "MARIENTAL",
      "country": "NA"
    }
  },
  {
    "eventDateTime": "2022-09-02T23:37:13.504Z",
    "shipment": { "satus": { "shipmentIsDelayed": 0 } },
    "eventPosition": {
      "status": "IN TRANSIT",
      "comments": "Lorem ipsum dolor",
      "city": "KIKWIT",
      "country": "CD"
    }
  },
  {
    "eventDateTime": "2022-09-03T09:37:13.504Z",
    "shipment": { "satus": { "shipmentIsDelayed": 1 } },
    "eventPosition": {
      "status": "ARRIVED AT YOUR PLACE",
      "comments": "",
      "city": "CABINDA",
      "country": "AO"
    }
  },
  {
    "eventDateTime": "2022-09-03T19:37:13.504Z",
    "shipment": { "satus": { "shipmentIsDelayed": 1 } },
    "eventPosition": {
      "status": "PICK UP DELAYED",
      "comments": "Lorem ipsum dolorLorem ipsum dolorLorem ipsum dolorLorem ipsum dolor",
      "city": "OUAGADOUGOU",
      "country": "BF"
    }
  },
  {
    "eventDateTime": "2022-09-04T05:37:13.504Z",
    "shipment": { "satus": { "shipmentIsDelayed": 1 } },
    "eventPosition": {
      "status": "PICK UP SCHEDULE",
      "comments": "Lorem ipsum dolorLorem ipsum dolorLorem ipsum dolorLorem ipsum dolor",
      "city": "GAO",
      "country": "ML"
    }
  },
  {
    "eventDateTime": "2022-09-04T15:37:13.504Z",
    "shipment": { "satus": { "shipmentIsDelayed": 0 } },
    "eventPosition": {
      "status": "PICK UP SCHEDULE",
      "comments": "Lorem ipsum dolorLorem ipsum dolorLorem ipsum dolorLorem ipsum dolor",
      "city": "YAOUNDE",
      "country": "CM"
    }
  },
  {
    "eventDateTime": "2022-09-05T01:37:13.504Z",
    "shipment": { "satus": { "shipmentIsDelayed": 1 } },
    "eventPosition": {
      "status": "PICK UP SCHEDULE",
      "comments": "Lorem ipsum dolorLorem ipsum dolorLorem ipsum dolorLorem ipsum dolor",
      "city": "OUAGADOUGOU",
      "country": "BF"
    }
  },
  {
    "eventDateTime": "2022-09-05T11:37:13.504Z",
    "shipment": { "satus": { "shipmentIsDelayed": 0 } },
    "eventPosition": {
      "status": "PICK UP DELAYED",
      "comments": "Lorem ipsum dolorLorem ipsum dolor",
      "city": "PORTO-NOVO",
      "country": "BJ"
    }
  },
  {
    "eventDateTime": "2022-09-05T21:37:13.504Z",
    "shipment": { "satus": { "shipmentIsDelayed": 0 } },
    "eventPosition": {
      "status": "ARRIVED AT YOUR PLACE",
      "comments": "Lorem ipsum dolorLorem ipsum dolor",
      "city": "KINSHASA",
      "country": "CD"
    }
  },
  {
    "eventDateTime": "2022-09-06T07:37:13.504Z",
    "shipment": { "satus": { "shipmentIsDelayed": 1 } },
    "eventPosition": {
      "status": "IN TRANSIT",
      "comments": "Lorem ipsum dolorLorem ipsum dolorLorem ipsum dolorLorem ipsum dolor",
      "city": "MOPTI",
      "country": "ML"
    }
  },
  {
    "eventDateTime": "2022-09-06T17:37:13.504Z",
    "shipment": { "satus": { "shipmentIsDelayed": 0 } },
    "eventPosition": {
      "status": "IN TRANSIT",
      "comments": "Lorem ipsum dolorLorem ipsum dolorLorem ipsum dolor",
      "city": "KOUDOUGOU",
      "country": "BF"
    }
  },
  {
    "eventDateTime": "2022-09-07T03:37:13.504Z",
    "shipment": { "satus": { "shipmentIsDelayed": 0 } },
    "eventPosition": {
      "status": "PICK UP SCHEDULE",
      "comments": "Lorem ipsum dolor",
      "city": "CABINDA",
      "country": "AO"
    }
  },
  {
    "eventDateTime": "2022-09-07T13:37:13.504Z",
    "shipment": { "satus": { "shipmentIsDelayed": 0 } },
    "eventPosition": {
      "status": "IN TRANSIT",
      "comments": "Lorem ipsum dolorLorem ipsum dolorLorem ipsum dolor",
      "city": "YAOUNDE",
      "country": "CM"
    }
  },
  {
    "eventDateTime": "2022-09-07T23:37:13.504Z",
    "shipment": { "satus": { "shipmentIsDelayed": 1 } },
    "eventPosition": {
      "status": "IN TRANSIT",
      "comments": "",
      "city": "TOMBOUCTOU",
      "country": "ML"
    }
  },
  {
    "eventDateTime": "2022-09-08T09:37:13.504Z",
    "shipment": { "satus": { "shipmentIsDelayed": 1 } },
    "eventPosition": {
      "status": "PICK UP SCHEDULE",
      "comments": "Lorem ipsum dolorLorem ipsum dolor",
      "city": "KINSHASA",
      "country": "CD"
    }
  },
  {
    "eventDateTime": "2022-09-08T18:37:13.504Z",
    "shipment": { "satus": { "shipmentException": 1 } },
    "eventPosition": {
      "status": "OUT FOR DELIVERY",
      "comments": "Lorem ipsum dolor",
      "city": "LAGOS",
      "country": "NG"
    }
  },
  {
    "eventDateTime": "2022-09-08T18:37:13.504Z",
    "shipment": { "satus": { "shipmentIsDelayed": 1 } },
    "eventPosition": {
      "status": "OUT FOR DELIVERY",
      "comments": "Lorem ipsum dolor",
      "city": "LAGOS",
      "country": "NG"
    }
  },
  {
    "eventDateTime": "2022-09-08T19:37:13.504Z",
    "shipment": { "satus": { "shipmentIsDelayed": 0 } },
    "eventPosition": {
      "status": "DELIVERED",
      "comments": "Lorem ipsum dolor",
      "city": "LAGOS",
      "country": "NG"
    }
  }
]

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