// ======== Exercise 2.3 ========
  // Instructions:
  // • Create an interface `Coords` that has numeric `latitude` and `longitude` properties.
  // • Extend the existing interface `City` (without modifying it inline) by adding a
  //   `coords` property of type `Coords`.
  // • Fix whatever is wrong with `tampa`

  // [do not edit] (pretend this is coming from external `foo.d.ts` lib)

  interface Coords{
      latitude: number;
      longitude: number;
  }
  interface City {
    name: string;
    coords: Coords;
  }
  // [/do not edit]

  const montreal = {
    coords: {
      latitude: 42.332,
      longitude: -73.324,
    },
    name: 'Montréal'
  };

  const tampa = {
    coords: {
      latitude: 27.9478,
      longitude: -82.4584,
    },
    name: 'Tampa'
  };

  function getCityInfo(city: City) {
    const coords = `(${city.coords.latitude.toFixed(3) }, ${city.coords.longitude.toFixed(3) })`;
    return `${city.name.toUpperCase()} is located at ${coords}.`;
  }

  console.log('[Exercise 2.3]', `${getCityInfo(montreal)} \n\n ${getCityInfo(tampa)}`);