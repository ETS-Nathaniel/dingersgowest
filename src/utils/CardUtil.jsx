import React from 'react';
import TravelCard from './cards/Traveling';

  var currentdate = new Date(); 
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

  const TripStart = new Date(2020,4,16,7)
  const TripEnd = new Date(2020,4,29,0)
  const NewOrleansStart = new Date(2020,4,16,16)
  const NewOrleansEnd = new Date(2020,4,17,8)
  const SanAntonioStart = new Date(2020,4,17,18)
  const SanAntonioEnd = new Date(2020,4,18,11)
  const WhiteSandsStart = new Date(2020,4,18,20)
  const WhiteSandsEnd = new Date(2020,4,19,12)
  const PetForestStart = new Date(2020,4,19,19)
  const PetForestEnd = new Date(2020,4,20,11)
  const GrandCanyonStart = new Date(2020,4,20,14)
  const GrandCanyonEnd = new Date(2020,4,21,16)
  const SantaMonicaStart = new Date(2020,4,21,23)
  const SantaMonicaEnd = new Date(2020,4,22,14)
  const SequoiaStart = new Date(2020,4,22,19)
  const SequoiaEnd = new Date(2020,4,23,26)
  const SaltLakeStart = new Date(2020,4,24,7)
  const SaltLakeEnd = new Date(2020,4,24,13)
  const RockyMtnStart = new Date(2020,4,24,21)
  const RockyMtnEnd = new Date(2020,4,26,6)
  const KCStart = new Date(2020,4,26,18)
  const KCEnd = new Date(2020,4,26,20)
  const GatewayStart = new Date(2020,4,27,0)
  const GatewayEnd = new Date(2020,4,27,11)
  const NashStart = new Date(2020,4,27,16)
  const NashEnd = new Date(2020,4,28,12)

  if (currentdate>TripStart && currentdate<NewOrleansStart){T1=<TravelCard />}
  else if (currentdate>NewOrleansEnd && currentdate<SanAntonioStart){T2=<TravelCard />;focus=1}
  else if (currentdate>SanAntonioStart && currentdate<SanAntonioEnd){focus=1}
  else if (currentdate>SanAntonioEnd && currentdate<WhiteSandsStart){T3=<TravelCard />;focus=2}
  else if (currentdate>WhiteSandsStart && currentdate<WhiteSandsEnd){focus=2}
  else if (currentdate>WhiteSandsEnd && currentdate<PetForestStart){T4=<TravelCard />;focus=3}
  else if (currentdate>PetForestStart && currentdate<PetForestEnd){focus=3}
  else if (currentdate>PetForestEnd && currentdate<GrandCanyonStart){T5=<TravelCard />;focus=4}
  else if (currentdate>GrandCanyonStart && currentdate<GrandCanyonEnd){focus=4}
  else if (currentdate>GrandCanyonEnd && currentdate<SantaMonicaStart){T6=<TravelCard />;focus=5}
  else if (currentdate>SantaMonicaStart && currentdate<SantaMonicaEnd){focus=5}
  else if (currentdate>SantaMonicaEnd && currentdate<SequoiaStart){T7=<TravelCard />;focus=6}
  else if (currentdate>SequoiaStart && currentdate<SequoiaEnd){focus=6}
  else if (currentdate>SequoiaEnd && currentdate<SaltLakeStart){T8=<TravelCard />;focus=7}
  else if (currentdate>SaltLakeStart && currentdate<SaltLakeEnd){focus=7}
  else if (currentdate>SaltLakeEnd && currentdate<RockyMtnStart){T9=<TravelCard />;focus=8}
  else if (currentdate>RockyMtnStart && currentdate<RockyMtnEnd){focus=8}
  else if (currentdate>RockyMtnEnd && currentdate<KCStart){T10=<TravelCard />;focus=9}
  else if (currentdate>KCStart && currentdate<KCEnd){focus=9}
  else if (currentdate>KCEnd && currentdate<GatewayStart){T11=<TravelCard />;focus=10}
  else if (currentdate>GatewayStart && currentdate<GatewayEnd){focus=10}
  else if (currentdate>GatewayEnd && currentdate<NashStart){T12=<TravelCard />;focus=11}
  else if (currentdate>NashStart && currentdate<NashEnd){focus=11}
  else if (currentdate>NashEnd && currentdate<TripEnd){T13=<TravelCard />;focus=12}

  export {T1,T2,T3,T4,T5,T6,T7,T8,T9,T10,T11,T12,T13,focus}
