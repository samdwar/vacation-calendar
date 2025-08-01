const API_KEY = "LY5OtIsujx44YH6xsOosqZZPPGXZk6G4";

export async function fetchHolidays(year, countryCode) {
  const url = `https://calendarific.com/api/v2/holidays?api_key=${API_KEY}&country=${countryCode.toLowerCase()}&year=${year}&type=national`;

  try {
    const res = await fetch(url);

    if (!res.ok) {
      console.warn(`API error: ${res.status}`);
      return [];
    }

    const json = await res.json();

    // const json = {
    //   "meta": {
    //     "code": 200
    //   },
    //   "response": {
    //     "holidays": [
    //       {
    //         "name": "Republic Day",
    //         "description": "India's Republic Day marks the anniversary of the adoption of the Indian constitution. It is an annual gazetted holiday in India on January 26.",
    //         "country": {
    //           "id": "in",
    //           "name": "India"
    //         },
    //         "date": {
    //           "iso": "2025-01-26",
    //           "datetime": {
    //             "year": 2025,
    //             "month": 1,
    //             "day": 26
    //           }
    //         },
    //         "type": [
    //           "National holiday"
    //         ],
    //         "primary_type": "Gazetted Holiday",
    //         "canonical_url": "https:\/\/calendarific.com\/holiday\/india\/republic-day",
    //         "urlid": "india\/republic-day",
    //         "locations": "All",
    //         "states": "All"
    //       },
    //       {
    //         "name": "Maha Shivaratri\/Shivaratri",
    //         "description": "Maha Shivratri is an annual festival dedicated to Shiva, the Hindu God of destruction. For devotees, is a day of reflection and meditation.",
    //         "country": {
    //           "id": "in",
    //           "name": "India"
    //         },
    //         "date": {
    //           "iso": "2025-02-26",
    //           "datetime": {
    //             "year": 2025,
    //             "month": 2,
    //             "day": 26
    //           }
    //         },
    //         "type": [
    //           "National holiday",
    //           "Hinduism"
    //         ],
    //         "primary_type": "Gazetted Holiday",
    //         "canonical_url": "https:\/\/calendarific.com\/holiday\/india\/maha-shivaratri-shivaratri",
    //         "urlid": "india\/maha-shivaratri-shivaratri",
    //         "locations": "All",
    //         "states": "All"
    //       },
    //       {
    //         "name": "Holi",
    //         "description": "Holi is a spring festival of colors celebrated by Hindus, Sikhs and others. It celebrates the triumph of good over evil and the upcoming season of spring. The festival can last up to sixteen days.",
    //         "country": {
    //           "id": "in",
    //           "name": "India"
    //         },
    //         "date": {
    //           "iso": "2025-03-14",
    //           "datetime": {
    //             "year": 2025,
    //             "month": 3,
    //             "day": 14
    //           }
    //         },
    //         "type": [
    //           "National holiday",
    //           "Hinduism"
    //         ],
    //         "primary_type": "Gazetted Holiday",
    //         "canonical_url": "https:\/\/calendarific.com\/holiday\/india\/holi",
    //         "urlid": "india\/holi",
    //         "locations": "All",
    //         "states": "All"
    //       },
    //       {
    //         "name": "Ramzan Id",
    //         "description": "One day of Eid-ul-Fitar, which marks the end of Ramadan, is a gazetted holiday in India.",
    //         "country": {
    //           "id": "in",
    //           "name": "India"
    //         },
    //         "date": {
    //           "iso": "2025-03-31",
    //           "datetime": {
    //             "year": 2025,
    //             "month": 3,
    //             "day": 31
    //           }
    //         },
    //         "type": [
    //           "National holiday"
    //         ],
    //         "primary_type": "Gazetted Holiday",
    //         "canonical_url": "https:\/\/calendarific.com\/holiday\/india\/eid-ul-fitar",
    //         "urlid": "india\/eid-ul-fitar",
    //         "locations": "All",
    //         "states": "All"
    //       },
    //       {
    //         "name": "Mahavir Jayanti",
    //         "description": "Mahavir Jayanti is a gazetted holiday in India",
    //         "country": {
    //           "id": "in",
    //           "name": "India"
    //         },
    //         "date": {
    //           "iso": "2025-04-10",
    //           "datetime": {
    //             "year": 2025,
    //             "month": 4,
    //             "day": 10
    //           }
    //         },
    //         "type": [
    //           "National holiday"
    //         ],
    //         "primary_type": "Gazetted Holiday",
    //         "canonical_url": "https:\/\/calendarific.com\/holiday\/india\/mahavir-jayanti",
    //         "urlid": "india\/mahavir-jayanti",
    //         "locations": "All",
    //         "states": "All"
    //       },
    //       {
    //         "name": "Good Friday",
    //         "description": "Many Christians commemorate Jesus Christ\u2019s crucifixion and death on Good Friday. It is a gazetted holiday in India.",
    //         "country": {
    //           "id": "in",
    //           "name": "India"
    //         },
    //         "date": {
    //           "iso": "2025-04-18",
    //           "datetime": {
    //             "year": 2025,
    //             "month": 4,
    //             "day": 18
    //           }
    //         },
    //         "type": [
    //           "National holiday"
    //         ],
    //         "primary_type": "Gazetted Holiday",
    //         "canonical_url": "https:\/\/calendarific.com\/holiday\/india\/good-friday",
    //         "urlid": "india\/good-friday",
    //         "locations": "All",
    //         "states": "All"
    //       },
    //       {
    //         "name": "Buddha Purnima\/Vesak",
    //         "description": "Vesak, also known as Buddha Purnima, celebrates of Gautama Buddha's birth, enlightenment and death.",
    //         "country": {
    //           "id": "in",
    //           "name": "India"
    //         },
    //         "date": {
    //           "iso": "2025-05-12",
    //           "datetime": {
    //             "year": 2025,
    //             "month": 5,
    //             "day": 12
    //           }
    //         },
    //         "type": [
    //           "National holiday"
    //         ],
    //         "primary_type": "Gazetted Holiday",
    //         "canonical_url": "https:\/\/calendarific.com\/holiday\/india\/buddha-purnima",
    //         "urlid": "india\/buddha-purnima",
    //         "locations": "All",
    //         "states": "All"
    //       },
    //       {
    //         "name": "Bakrid",
    //         "description": "For India's more than 200 million Muslims, Bakrid, the Festival of Sacrifice, is one of the holiest days of the year.",
    //         "country": {
    //           "id": "in",
    //           "name": "India"
    //         },
    //         "date": {
    //           "iso": "2025-06-07",
    //           "datetime": {
    //             "year": 2025,
    //             "month": 6,
    //             "day": 7
    //           }
    //         },
    //         "type": [
    //           "National holiday"
    //         ],
    //         "primary_type": "Gazetted Holiday",
    //         "canonical_url": "https:\/\/calendarific.com\/holiday\/india\/eid-ul-adha",
    //         "urlid": "india\/eid-ul-adha",
    //         "locations": "All",
    //         "states": "All"
    //       },
    //       {
    //         "name": "Muharram\/Ashura",
    //         "description": "Muharram, or the Islamic New Year, is a public holiday in India.",
    //         "country": {
    //           "id": "in",
    //           "name": "India"
    //         },
    //         "date": {
    //           "iso": "2025-07-06",
    //           "datetime": {
    //             "year": 2025,
    //             "month": 7,
    //             "day": 6
    //           }
    //         },
    //         "type": [
    //           "National holiday"
    //         ],
    //         "primary_type": "Gazetted Holiday",
    //         "canonical_url": "https:\/\/calendarific.com\/holiday\/india\/muharram",
    //         "urlid": "india\/muharram",
    //         "locations": "All",
    //         "states": "All"
    //       },
    //       {
    //         "name": "Independence Day",
    //         "description": "India's Independence Day is an annual gazetted holiday on August 15 to commemorate the day India became an independent nation.",
    //         "country": {
    //           "id": "in",
    //           "name": "India"
    //         },
    //         "date": {
    //           "iso": "2025-08-15",
    //           "datetime": {
    //             "year": 2025,
    //             "month": 8,
    //             "day": 15
    //           }
    //         },
    //         "type": [
    //           "National holiday"
    //         ],
    //         "primary_type": "Gazetted Holiday",
    //         "canonical_url": "https:\/\/calendarific.com\/holiday\/india\/independence-day",
    //         "urlid": "india\/independence-day",
    //         "locations": "All",
    //         "states": "All"
    //       },
    //       {
    //         "name": "Janmashtami",
    //         "description": "Krishna Janmashtami is a Hindu festival that celebrates the birth of Krishna, the eighth incarnation of the god Vishnu. It is celebrated on the eighth day of the Hindu month of Bhadrava (Bhadrapada), which is usually in August or September.",
    //         "country": {
    //           "id": "in",
    //           "name": "India"
    //         },
    //         "date": {
    //           "iso": "2025-08-16",
    //           "datetime": {
    //             "year": 2025,
    //             "month": 8,
    //             "day": 16
    //           }
    //         },
    //         "type": [
    //           "National holiday",
    //           "Hinduism"
    //         ],
    //         "primary_type": "Gazetted Holiday",
    //         "canonical_url": "https:\/\/calendarific.com\/holiday\/india\/janmashtami",
    //         "urlid": "india\/janmashtami",
    //         "locations": "All",
    //         "states": "All"
    //       },
    //       {
    //         "name": "Milad un-Nabi\/Id-e-Milad",
    //         "description": "Milad un-Nabi is a gazetted holiday in India and marks the Prophet Muhammad's birthday.",
    //         "country": {
    //           "id": "in",
    //           "name": "India"
    //         },
    //         "date": {
    //           "iso": "2025-09-05",
    //           "datetime": {
    //             "year": 2025,
    //             "month": 9,
    //             "day": 5
    //           }
    //         },
    //         "type": [
    //           "National holiday"
    //         ],
    //         "primary_type": "Gazetted Holiday",
    //         "canonical_url": "https:\/\/calendarific.com\/holiday\/india\/milad-un-nabi",
    //         "urlid": "india\/milad-un-nabi",
    //         "locations": "All",
    //         "states": "All"
    //       },
    //       {
    //         "name": "Mahatma Gandhi Jayanti",
    //         "description": "Mahatma Gandhi's birthday is an annual gazetted holiday in India on October 2.",
    //         "country": {
    //           "id": "in",
    //           "name": "India"
    //         },
    //         "date": {
    //           "iso": "2025-10-02",
    //           "datetime": {
    //             "year": 2025,
    //             "month": 10,
    //             "day": 2
    //           }
    //         },
    //         "type": [
    //           "National holiday"
    //         ],
    //         "primary_type": "Gazetted Holiday",
    //         "canonical_url": "https:\/\/calendarific.com\/holiday\/india\/mahatma-gandhi-jayanti",
    //         "urlid": "india\/mahatma-gandhi-jayanti",
    //         "locations": "All",
    //         "states": "All"
    //       },
    //       {
    //         "name": "Dussehra",
    //         "description": "Dussehra, also known as Vijaya Dashami, is an Indian festival that celebrates good forces over evil forces. It spans for 10 days and is celebrated in varied traditions across India.",
    //         "country": {
    //           "id": "in",
    //           "name": "India"
    //         },
    //         "date": {
    //           "iso": "2025-10-02",
    //           "datetime": {
    //             "year": 2025,
    //             "month": 10,
    //             "day": 2
    //           }
    //         },
    //         "type": [
    //           "National holiday",
    //           "Hinduism"
    //         ],
    //         "primary_type": "Gazetted Holiday",
    //         "canonical_url": "https:\/\/calendarific.com\/holiday\/india\/dussehra",
    //         "urlid": "india\/dussehra",
    //         "locations": "All",
    //         "states": "All"
    //       },
    //       {
    //         "name": "Diwali\/Deepavali",
    //         "description": "Diwali is a festival of physical and spiritual light celebrated in October or November each year.",
    //         "country": {
    //           "id": "in",
    //           "name": "India"
    //         },
    //         "date": {
    //           "iso": "2025-10-20",
    //           "datetime": {
    //             "year": 2025,
    //             "month": 10,
    //             "day": 20
    //           }
    //         },
    //         "type": [
    //           "National holiday",
    //           "Hinduism"
    //         ],
    //         "primary_type": "Gazetted Holiday",
    //         "canonical_url": "https:\/\/calendarific.com\/holiday\/india\/diwali",
    //         "urlid": "india\/diwali",
    //         "locations": "All",
    //         "states": "All"
    //       },
    //       {
    //         "name": "Guru Nanak Jayanti",
    //         "description": "Guru Nanak Jayanti is a gazetted holiday in India",
    //         "country": {
    //           "id": "in",
    //           "name": "India"
    //         },
    //         "date": {
    //           "iso": "2025-11-05",
    //           "datetime": {
    //             "year": 2025,
    //             "month": 11,
    //             "day": 5
    //           }
    //         },
    //         "type": [
    //           "National holiday"
    //         ],
    //         "primary_type": "Gazetted Holiday",
    //         "canonical_url": "https:\/\/calendarific.com\/holiday\/india\/guru-nanak-jayanti",
    //         "urlid": "india\/guru-nanak-jayanti",
    //         "locations": "All",
    //         "states": "All"
    //       },
    //       {
    //         "name": "Christmas",
    //         "description": "Many Christians celebrate Christmas Day, which is a gazetted holiday in India, on December 25 each year.",
    //         "country": {
    //           "id": "in",
    //           "name": "India"
    //         },
    //         "date": {
    //           "iso": "2025-12-25",
    //           "datetime": {
    //             "year": 2025,
    //             "month": 12,
    //             "day": 25
    //           }
    //         },
    //         "type": [
    //           "National holiday"
    //         ],
    //         "primary_type": "Gazetted Holiday",
    //         "canonical_url": "https:\/\/calendarific.com\/holiday\/india\/christmas",
    //         "urlid": "india\/christmas",
    //         "locations": "All",
    //         "states": "All"
    //       }
    //     ]
    //   }
    // };
    // //
    const holidays = json?.response?.holidays;
    if (!Array.isArray(holidays)) {
      console.error("❌ holidays is not an array:", holidays);
      return [];
    }

    // Extract just date.iso strings
    return holidays.map(item => ({
      date: item.date.iso,
      name: item.name
    }));
  } catch (err) {
    console.error("❌ Error in fetchHolidays:", err);
    return [];
  }
}
