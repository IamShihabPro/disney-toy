import React from 'react';
import Banner from './Banner';
import Shop from './Shop';
import WhychooseUs from './WhychooseUs';
// import Testimonal from './Testimonal';
import { useTitle } from '../../hooks/useTitle';
import ShowReview from '../Review/ShowReview';

const Home = () => {


    useTitle('Home');
    return (
        <div className='space-y-10 w-full'>
           <Banner></Banner>
           <Shop></Shop>
           <WhychooseUs></WhychooseUs>
           {/* <Testimonal></Testimonal> */}
           <ShowReview></ShowReview>
            
        </div>
    );
};

export default Home;