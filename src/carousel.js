import React, { useState } from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

const items = [
    <img height={'auto'} width={'100%'} src='https://sun9-79.userapi.com/impg/m4OJXuWr728lXPVFw5WHdyLL9J1gPQjEADkXOw/OOL5mxl3Xug.jpg?size=324x324&quality=96&sign=ddf3dc1650cfa6571f8c74715e513b15&type=album'/>,
    <img height={'auto'} width={'100%'} src='https://sun9-79.userapi.com/impg/m4OJXuWr728lXPVFw5WHdyLL9J1gPQjEADkXOw/OOL5mxl3Xug.jpg?size=324x324&quality=96&sign=ddf3dc1650cfa6571f8c74715e513b15&type=album'/>,
    <img height={'auto'} width={'100%'} src='https://sun9-79.userapi.com/impg/m4OJXuWr728lXPVFw5WHdyLL9J1gPQjEADkXOw/OOL5mxl3Xug.jpg?size=324x324&quality=96&sign=ddf3dc1650cfa6571f8c74715e513b15&type=album'/>,
    <img height={'auto'} width={'100%'} src='https://sun9-79.userapi.com/impg/m4OJXuWr728lXPVFw5WHdyLL9J1gPQjEADkXOw/OOL5mxl3Xug.jpg?size=324x324&quality=96&sign=ddf3dc1650cfa6571f8c74715e513b15&type=album'/>
 
];

const items1 = [
    <img class='pd' height={'auto'} width={'100px'} src='https://sun9-79.userapi.com/impg/m4OJXuWr728lXPVFw5WHdyLL9J1gPQjEADkXOw/OOL5mxl3Xug.jpg?size=324x324&quality=96&sign=ddf3dc1650cfa6571f8c74715e513b15&type=album'/>,
    <img class='pd'  height={'auto'} width={'100px'} src='https://sun9-79.userapi.com/impg/m4OJXuWr728lXPVFw5WHdyLL9J1gPQjEADkXOw/OOL5mxl3Xug.jpg?size=324x324&quality=96&sign=ddf3dc1650cfa6571f8c74715e513b15&type=album'/>,
    <img class='pd'  height={'auto'} width={'100px'} src='https://sun9-79.userapi.com/impg/m4OJXuWr728lXPVFw5WHdyLL9J1gPQjEADkXOw/OOL5mxl3Xug.jpg?size=324x324&quality=96&sign=ddf3dc1650cfa6571f8c74715e513b15&type=album'/>,
    <img class='pd'  height={'auto'} width={'100px'} src='https://sun9-79.userapi.com/impg/m4OJXuWr728lXPVFw5WHdyLL9J1gPQjEADkXOw/OOL5mxl3Xug.jpg?size=324x324&quality=96&sign=ddf3dc1650cfa6571f8c74715e513b15&type=album'/>
 
];
const thumbItems = (items, [setThumbIndex, setThumbAnimation]) => {
    return items.map((item, i) => (
        <div className="thumb" onClick={() => (setThumbIndex(i), setThumbAnimation(true))}>
            {item}
        </div>
    ));
};

export const Carousel = () => {
    const [mainIndex, setMainIndex] = useState(0);
    const [mainAnimation, setMainAnimation] = useState(false);
    const [thumbIndex, setThumbIndex] = useState(0);
    const [thumbAnimation, setThumbAnimation] = useState(false);
    const [thumbs] = useState(thumbItems(items, [setThumbIndex, setThumbAnimation]));

    const slideNext = () => {
        if (!thumbAnimation && thumbIndex < thumbs.length - 1) {
            setThumbAnimation(true);
            setThumbIndex(thumbIndex + 1);
        }
    };

    const slidePrev = () => {
        if (!thumbAnimation && thumbIndex > 0) {
            setThumbAnimation(true);
            setThumbIndex(thumbIndex - 1);
        }
    };

    const syncMainBeforeChange = (e) => {
        setMainAnimation(true);
    };

    const syncMainAfterChange = (e) => {
        setMainAnimation(false);

        if (e.type === 'action') {
            setThumbIndex(e.item);
            setThumbAnimation(false);
        } else {
            setMainIndex(thumbIndex);
        }
    };

    const syncThumbs = (e) => {
        setThumbIndex(e.item);
        setThumbAnimation(false);

        if (!mainAnimation) {
            setMainIndex(e.item);
        }
    };

    return [
       <AliceCarousel
            activeIndex={mainIndex}
            animationType="fadeout"
            animationDuration={400}
            disableDotsControls
            disableButtonsControls
            items={items}
            mouseTracking={!thumbAnimation}
            onSlideChange={syncMainBeforeChange}
            onSlideChanged={syncMainAfterChange}
            touchTracking={!thumbAnimation}
       />,
       <div className="thumbs mt-10 d_flex">
           <AliceCarousel
                activeIndex={thumbIndex}
                autoWidth
                disableDotsControls
                disableButtonsControls
                items={items1}
                mouseTracking={false}
                onSlideChanged={syncThumbs}
                touchTracking={!mainAnimation}
           />
           <div className="btn-prev" onClick={slidePrev}>&lang;</div>
           <div className="btn-next" onClick={slideNext}>&rang;</div>
       </div>
    ]
};