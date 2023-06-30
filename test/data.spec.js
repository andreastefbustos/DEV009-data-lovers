// import { example, anotherExample } from '../src/data.js';
import {
  searchCountries,
  generateAlphabet,
  filterByContinents,
  filterBySubregion,
  filterByLanguages,
  // sortByPopulation,
  // sortByArea,
  addPopulationDensity,
  // sortByPopulationDensity,
  // averagePopulationDensityByContinent,
  // filterPopulationDensityByContinent
} from "../src/data.js";

//crear una const que sera igual a un objeto

const countries = [
  {
    "name": {
      "common": "Guatemala",
      "official": "Republic of Guatemala"
    },
    "tld": [
      ".gt"
    ],
    "independent": true,
    "capital": [
      "Guatemala City"
    ],
    "subregion": "Central America",
    "languages": {
      "spa": "Spanish"
    },
    "borders": [
      "BLZ",
      "SLV",
      "HND",
      "MEX"
    ],
    "area": 108889,
    "flag": "🇬🇹",
    "population": 16858333,
    "gini": {
      "2014": 48.3
    },
    "fifa": "GUA",
    "timezones": [
      "UTC-06:00"
    ],
    "continents": [
      "America"
    ],
    "flags": {
      "png": "https://flagcdn.com/w320/gt.png",
      "svg": "https://flagcdn.com/gt.svg",
      "alt": "The flag of Guatemala is composed of three equal vertical bands of light blue, white and light blue, with the national coat of arms centered in the white band."
    }
  },
  {
    "name": {
      "common": "Singapore",
      "official": "Republic of Singapore"
    },
    "tld": [
      ".sg",
      ".新加坡",
      ".சிங்கப்பூர்"
    ],
    "independent": true,
    "capital": [
      "Singapore"
    ],
    "subregion": "South-Eastern Asia",
    "languages": {
      "zho": "Chinese",
      "eng": "English",
      "msa": "Malay",
      "tam": "Tamil"
    },
    "area": 710,
    "flag": "🇸🇬",
    "population": 5685807,
    "fifa": "SIN",
    "timezones": [
      "UTC+08:00"
    ],
    "continents": [
      "Asia"
    ],
    "flags": {
      "png": "https://flagcdn.com/w320/sg.png",
      "svg": "https://flagcdn.com/sg.svg",
      "alt": "The flag of Singapore is composed of two equal horizontal bands of red and white. On the hoist side of the red band is a fly-side facing white crescent which partially encloses five small five-pointed white stars arranged in the shape of a pentagon."
    }
  },
  {
    "name": {
      "common": "Bosnia and Herzegovina",
      "official": "Bosnia and Herzegovina"
    },
    "tld": [
      ".ba"
    ],
    "independent": true,
    "capital": [
      "Sarajevo"
    ],
    "subregion": "Southeast Europe",
    "languages": {
      "bos": "Bosnian",
      "hrv": "Croatian",
      "srp": "Serbian"
    },
    "borders": [
      "HRV",
      "MNE",
      "SRB"
    ],
    "area": 51209,
    "flag": "🇧🇦",
    "population": 3280815,
    "gini": {
      "2011": 33
    },
    "fifa": "BIH",
    "timezones": [
      "UTC+01:00"
    ],
    "continents": [
      "Europe"
    ],
    "flags": {
      "png": "https://flagcdn.com/w320/ba.png",
      "svg": "https://flagcdn.com/ba.svg",
      "alt": "The flag of Bosnia and Herzegovina has a blue field, at the center of which is a large yellow hoist-side facing right-angled triangle that is based on the top edge and spans the height of the field. Adjacent to the hypotenuse of this triangle are nine adjoining five-pointed white stars with the top and bottom stars cut in half by the edges of the field."
    }
  },
  {
    "name": {
      "common": "Maldives",
      "official": "Republic of the Maldives"
    },
    "tld": [
      ".mv"
    ],
    "independent": true,
    "capital": [
      "Malé"
    ],
    "subregion": "Southern Asia",
    "languages": {
      "div": "Maldivian"
    },
    "area": 300,
    "flag": "🇲🇻",
    "population": 540542,
    "gini": {
      "2016": 31.3
    },
    "fifa": "MDV",
    "timezones": [
      "UTC+05:00"
    ],
    "continents": [
      "Asia"
    ],
    "flags": {
      "png": "https://flagcdn.com/w320/mv.png",
      "svg": "https://flagcdn.com/mv.svg",
      "alt": "The flag of Maldives has a red field, at the center of which is a large green rectangle bearing a fly-side facing white crescent."
    }
  },
  {
    "name": {
      "common": "Latvia",
      "official": "Republic of Latvia"
    },
    "tld": [
      ".lv"
    ],
    "independent": true,
    "capital": [
      "Riga"
    ],
    "subregion": "Northern Europe",
    "languages": {
      "lav": "Latvian"
    },
    "borders": [
      "BLR",
      "EST",
      "LTU",
      "RUS"
    ],
    "area": 64559,
    "flag": "🇱🇻",
    "population": 1901548,
    "gini": {
      "2018": 35.1
    },
    "fifa": "LVA",
    "timezones": [
      "UTC+02:00"
    ],
    "continents": [
      "Europe"
    ],
    "flags": {
      "png": "https://flagcdn.com/w320/lv.png",
      "svg": "https://flagcdn.com/lv.svg",
      "alt": "The flag of Latvia has a carmine-red field with a thin white horizontal band across the middle of the field."
    }
  },
  {
    "name": {
      "common": "Anguilla",
      "official": "Anguilla"
    },
    "tld": [
      ".ai"
    ],
    "independent": false,
    "capital": [
      "The Valley"
    ],
    "subregion": "Caribbean",
    "languages": {
      "eng": "English"
    },
    "area": 91,
    "flag": "🇦🇮",
    "population": 13452,
    "fifa": "AIA",
    "timezones": [
      "UTC-04:00"
    ],
    "continents": [
      "America"
    ],
    "flags": {
      "png": "https://flagcdn.com/w320/ai.png",
      "svg": "https://flagcdn.com/ai.svg"
    }
  },
];

const CountriesAmerica=[
  {
    "name": {
      "common": "Guatemala",
      "official": "Republic of Guatemala"
    },
    "tld": [
      ".gt"
    ],
    "independent": true,
    "capital": [
      "Guatemala City"
    ],
    "subregion": "Central America",
    "languages": {
      "spa": "Spanish"
    },
    "borders": [
      "BLZ",
      "SLV",
      "HND",
      "MEX"
    ],
    "area": 108889,
    "flag": "🇬🇹",
    "population": 16858333,
    "gini": {
      "2014": 48.3
    },
    "fifa": "GUA",
    "timezones": [
      "UTC-06:00"
    ],
    "continents": [
      "America"
    ],
    "flags": {
      "png": "https://flagcdn.com/w320/gt.png",
      "svg": "https://flagcdn.com/gt.svg",
      "alt": "The flag of Guatemala is composed of three equal vertical bands of light blue, white and light blue, with the national coat of arms centered in the white band."
    }
  },
  {
    "name": {
      "common": "Anguilla",
      "official": "Anguilla"
    },
    "tld": [
      ".ai"
    ],
    "independent": false,
    "capital": [
      "The Valley"
    ],
    "subregion": "Caribbean",
    "languages": {
      "eng": "English"
    },
    "area": 91,
    "flag": "🇦🇮",
    "population": 13452,
    "fifa": "AIA",
    "timezones": [
      "UTC-04:00"
    ],
    "continents": [
      "America"
    ],
    "flags": {
      "png": "https://flagcdn.com/w320/ai.png",
      "svg": "https://flagcdn.com/ai.svg"
    }
  },
];

const TEST_TEXT_ALPHABET = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]

// Test function `searchCountries`
describe('searchCountries', () => {
  it("Should return an object with a country information", () => {
    expect(typeof searchCountries(countries, "Si")).toEqual("object");
  });
});

// Test function `generateAlphabet`
describe('generateAlphabet', () => {
  it('Should return an array of alphabet', () => {
    expect(generateAlphabet()).toEqual(TEST_TEXT_ALPHABET)
  })
});

// Test function `filterByContinents`
describe('FilterByContinents("America")', () => {
  it("Should return an object with  an array of countries that belong America", () => {
    expect(typeof filterByContinents(countries, "America")).toBe("object");
  });

  it ("Should return empty array",() => {
    expect(filterByContinents(countries,"Africa")).toEqual([])
  });
});

test('filterByContinents should return countries from the specified continent',() => {
  const continent = 'America';
  const result = filterByContinents(countries,continent);

  expect(result).toEqual(CountriesAmerica);
});

// Test function `filterBySubregion`
describe('filterBySubregion("Caribbean")', () => {
  it("Should return an object", () => {
    expect(typeof filterBySubregion(countries, "Caribbean")).toBe("object");
  });

  it("Should return an empty array for non-existing subregion", () => {
    expect(filterBySubregion(countries, "NonExistingSubregion")).toEqual([]);
  });

  // it("Should filter countries by subregion", () => {
  //   const filteredCountries = filterBySubregion(countries, "Caribbean");

  //   expect(filteredCountries).toEqual(countries)
  // });
});

// Test function `filterByLanguages`
describe('filterByLanguages', () => {
  it("Should return an object", () => {
    expect(typeof filterByLanguages(countries, "spa")).toBe("object");
  });
});

// Test function `sortByPopulation`
describe('addPopulationDensity', () => {
  it("Should return an object", () => {
    expect(typeof addPopulationDensity(countries)).toBe("object");
  });
});





// describe("generateCountriesList result should be a function", () => {
//   it("is a function", () => {
//     expect(typeof generateCountriesList).toBe("function");
//   });
// });

// describe("generateCountriesList", () => {
//   it("Should return an array with countries names", () => {
//     expect(generateCountriesList(countries)).toEqual(
//       [
//         "Singapore",
//         "Bosnia and Herzegovina",
//         "Guatemala",
//         "Latvia",
//         "Maldives",
//         'Anguilla',
//       ].sort()
//     );
//   });
// });

// describe('example', () => {
//   it('is a function', () => {
//     expect(typeof example).toBe('function');
//   });

//   it('returns `example`', () => {
//     expect(example()).toBe('example');
//   });
// });

// describe('anotherExample', () => {
//   it('is a function', () => {
//     expect(typeof anotherExample).toBe('function');
//   });

//   it('returns `anotherExample`', () => {
//     expect(anotherExample()).toBe('OMG');
//   });
// });
