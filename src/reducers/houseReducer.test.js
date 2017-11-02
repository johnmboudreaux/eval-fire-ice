import {houseReducer} from './houseReducer';

describe('houseReducer', () => {

  it('CREATE_BABY_PRODUCT should add to state', () => {
    const action = {
      type: 'HOUSES_TO_STORE',
      houses: [
        {
          url:"https://www.anapioficeandfire.com/api/houses/81",
          name:"House Corbray of Heart's Home",
          region:"",
          coatOfArms:"Three black ravens in flight, holding three red hearts, on a white field(Argent, three ravens volant sable, each clutching in their claws a heart gules)",
          words:"",
          titles:[
            "Lord of Heart's Home",
            "King of the Fingers (historical)"
          ],
          seats:[
            "Heart's Home"
          ],
          currentLord:"https://www.anapioficeandfire.com/api/characters/681",
          heir:"https://www.anapioficeandfire.com/api/characters/677",
          overlord:"https://www.anapioficeandfire.com/api/houses/7",
          founded:"",
          founder:"https://www.anapioficeandfire.com/api/characters/256",
          diedOut:"",
          ancestralWeapons:[
            "Lady Forlorn"
          ],
          cadetBranches:[

          ],
          swornMembers:[
            "https://www.anapioficeandfire.com/api/characters/255",
            "https://www.anapioficeandfire.com/api/characters/256",
            "https://www.anapioficeandfire.com/api/characters/447",
            "https://www.anapioficeandfire.com/api/characters/654",
            "https://www.anapioficeandfire.com/api/characters/677",
            "https://www.anapioficeandfire.com/api/characters/681",
            "https://www.anapioficeandfire.com/api/characters/871",
            "https://www.anapioficeandfire.com/api/characters/1182"
          ]
        }
      ]
    };
    const expectation = action.houses;

    expect(houseReducer(undefined, action)).toEqual(expectation);
  });

});
