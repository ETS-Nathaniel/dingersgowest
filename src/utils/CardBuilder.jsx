import React, {useState} from 'react';
import Carousel from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';
import {NewOrleans, SanAntonio, WhiteSands, PetrifiedForest, GrandCanyon, SantaMonica, Sequoia, SaltLakeCity, RockyMountains, KansasCity, GatewayArch, Nashville} from './cards/index';
import {T1,T2,T3,T4,T5,T6,T7,T8,T9,T10,T11,T12,T13,focus} from './CardUtil';

const CardBuilder = () => {
  const [state, setState] = useState({
    value: focus
  })

  var onChange = e => setState({ value: e.target ? e.target.value : e });

  return (
      <Carousel
        value={state.value}
        onChange={onChange}
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
        {T1}
        <NewOrleans />
        {T2}
        <SanAntonio />
        {T3}
        <WhiteSands />
        {T4}
        <PetrifiedForest />
        {T5}
        <GrandCanyon />
        {T6}
        <SantaMonica />
        {T7}
        <Sequoia />
        {T8}
        <SaltLakeCity />
        {T9}
        <RockyMountains />
        {T10}
        <KansasCity />
        {T11}
        <GatewayArch />
        {T12}
        <Nashville />
        {T13}
    </Carousel>
  )}

export default CardBuilder