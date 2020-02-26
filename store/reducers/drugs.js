import axios from 'axios';
import { AsyncStorage } from 'react-native';

const drugs = [];

// ACTION TYPES
const GOT_ALL_DRUGS = 'GOT_ALL_DRUGS';


// ACTION CREATORS
const gotAllDrugs = allDrugs => ({
  type: GOT_ALL_DRUGS,
  allDrugs,
});



// THUNKS
export const getAllDrugs = () => {
  return async dispatch => {
    try {
    //   const userId = await AsyncStorage.getItem('userId');
      const { data } = await axios.get('http://127.0.0.1:8000/drugs/all_drugs/')
    //     params: {
    //       userId,
    //     },
    //   });
      console.log(dispatch(gotAllDrugs(data)));
    } catch (error) {
      console.error(error);
    }
  };
};

export default function(state = drugs, action) {
  switch (action.type) {
    case GOT_ALL_DRUGS:
      console.log('state', state)
      return action.allDrugs;
    default:
      return state;
  }
}