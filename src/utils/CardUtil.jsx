import React from 'react';
import TravelCard from './cards/Traveling';

  var currentdate = new Date(); 
  var day = currentdate.getDate();
  var hour = currentdate.getHours();

  var focus=0
  var T1 = null;  //16th to NO (4pm)
  var T2 = null;  //17th to San Antonio (8am to 6pm)
  var T3 = null;  //18th to White Sands (11am to 8pm)
  var T4 = null;  //19th to Petrified Forest (12pm to 7pm)
  var T5 = null;  //20th to Grand Canyon (11am to 2pm)
  var T6 = null;  //21st to Santa Monica (4pm to 11pm)
  var T7 = null;  //22nd to Sequoia (2pm to 7pm)
  var T8 = null;  //23rd/24th to Salt Lake City (4pm to 7am)
  var T9 = null;  //24th to Rocky Mountain (1pm to 9pm)
  var T10 = null; //26th to Kansas City (6am to 6pm)
  var T11 = null; //26th to Gateway Arch (8pm to 11pm)
  var T12 = null; //27th to Nashville (11am to 4pm)
  var T13 = null; //28th to HOME (12pm to 11pm)

  if (day<16){T1=<TravelCard />}
  else if (day==16 && hour>=16){}
  else if (day==17 && hour>=8){T2=<TravelCard />}

  export {T1,T2,T3,T4,T5,T6,T7,T8,T9,T10,T11,T12,T13,focus}
