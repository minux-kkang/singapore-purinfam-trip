window.TRIP_DATA = {
  trip: {
    title: "Singapore Family Trip 2026",
    startDate: "2026-09-19",
    endDate: "2026-09-24",
    travelers: {
      total: 11,
      adults: 8,
      childAge7: 1,
      childrenAge3: 2
    }
  },

  flights: {
    outbound: {
      airline: "Korean Air",
      flightNo: "KE643",
      route: "Incheon → Singapore",
      date: "2026-09-19",
      arrivalTime: "19:15"
    },
    return: {
      airline: "Korean Air",
      flightNo: "KE644",
      route: "Singapore → Incheon",
      date: "2026-09-24",
      departureTime: "22:00"
    }
  },

  hotel: {
    name: "Singapore Marriott Tang Plaza Hotel",
    checkIn: "2026-09-19",
    checkOut: "2026-09-24",
    nights: 5,
    rooms: 4,
    reservationNumbers: [
      "86404986",
      "86404965",
      "86404979",
      "86393926"
    ],
    requests: {
      nearbyRooms: true,
      someTwinBeds: true,
      stepStoolForChildRoom: true,
      rollawayBed: true,
      airPurifierSubjectToAvailability: true
    },
    breakfast: {
      includedByDefault: false,
      specialAdultRate: "S$25++",
      age5AndUnderFree: true,
      age7FreeWithPayingAdult: true
    },

    // 사용자가 실제 등급을 확인한 후 수정 가능
    loyalty: {
      program: "Marriott Bonvoy",
      status: "Platinum Elite"
    }
  },

  dining: {
    jumbo: {
      name: "JUMBO Seafood - Riverside Point",
      date: "2026-09-22",
      time: "19:00",
      partySize: 11,
      reservationId: "6V5D9N"
    }
  }
};
