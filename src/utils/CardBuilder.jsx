import React from 'react';
import Carousel from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';
import {NewOrleans, SanAntonio, WhiteSands, PetrifiedForest, GrandCanyon, SantaMonica, Sequoia, SaltLakeCity, RockyMountains, KansasCity, GatewayArch, Nashville} from './cards/index';
import TravelCard from './cards/Traveling';

const CardBuilder = () => {

  return (
      <Carousel
        className="row"
        centered
        slidesPerPage={3.5}
        arrows
        breakpoints={{
        1500: {
          slidesPerPage: 3,
        },
        1280: {
          slidesPerPage: 2,
        },
        880: {
          slidesPerPage: 1,
        },
      }}
      >
        <TravelCard hide="" date="May 16" />
        <NewOrleans />
        <TravelCard hide="" date="May 17" />
        <SanAntonio />
        <TravelCard hide="" date="May 18" />
        <WhiteSands />
        <TravelCard hide="" date="May 19" />
        <PetrifiedForest />
        <TravelCard hide="" date="May 20" />
        <GrandCanyon />
        <TravelCard hide="" date="May 21" />
        <SantaMonica />
        <TravelCard hide="" date="May 22" />
        <Sequoia />
        <TravelCard hide="" date="May 23-24" />
        <SaltLakeCity />
        <TravelCard hide="" date="May 24" />
        <RockyMountains />
        <TravelCard hide="" date="May 26" />
        <KansasCity />
        <TravelCard hide="" date="May 26" />
        <GatewayArch />
        <TravelCard hide="" date="May 27" />
        <Nashville />
        <TravelCard hide="" date="May 28" />
    </Carousel>
  )}

export default CardBuilder