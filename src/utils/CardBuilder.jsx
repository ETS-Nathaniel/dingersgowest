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
        <TravelCard date="May 15" />
        <NewOrleans />
        <SanAntonio />
        <WhiteSands />
        <PetrifiedForest />
        <GrandCanyon />
        <SantaMonica />
        <Sequoia />
        <SaltLakeCity />
        <RockyMountains />
        <KansasCity />
        <GatewayArch />
        <Nashville />
    </Carousel>
  )}

export default CardBuilder