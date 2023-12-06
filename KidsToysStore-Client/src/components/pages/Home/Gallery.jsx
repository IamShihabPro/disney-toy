import React from 'react';

const Gallery = () => {
    return (
        <div >

            <div className='border-b-4 border-red-400  '>

                <h1 className='text-left text-2xl font-bold my-2'><span className='text-red-400 px-5'>Kiddo</span> Gallery</h1>

            </div>

            <div className='grid lg:grid-cols-4 gap-4 my-5 mx-5 '>

                <img className='w-72' src= 'https://www.splashlearn.com/blog/wp-content/uploads/2023/02/best-educational-toys-for-kids-that-all-parents-need-to-know-about.jpeg' alt="" />

                <img className='w-72' src= 'https://www.montessorinature.com/wp-content/uploads/2022/01/Ways-You-Can-Utilize-Toys-to-Help-Kids-Learn-Andrea-Montessori-Academy-Montessori-Nature-15.jpg' alt="" />
                <img className='w-72' src= 'https://www.readabilitytutor.com/wp-content/uploads/2021/12/Toddlers.jpg' alt="" />
                <img className='w-72' src= 'https://lingokids.com/wp-content/uploads/2020/01/children-learning-games.jpg' alt="" />
                <img className='w-72' src= 'https://lingokids.com/wp-content/uploads/2020/01/children-learning-games.jpg' alt="" />
                <img className='w-72' src= 'https://littleonemag.com/wp-content/uploads/2019/05/3036428-min-530x350.jpg' alt="" />
                <img className='w-72' src= 'https://us.123rf.com/450wm/oksix/oksix2102/oksix210200024/163147144-moments-of-misunderstandings-and-conflicts-in-the-childrens-group.jpg?ver=6' alt="" />
                <img className='w-72' src= 'https://www.splashlearn.com/blog/wp-content/uploads/2023/03/how-to-select-the-best-educational-toys-for-kids.jpeg' alt="" />
                
                {/* <img className='w-52' src={playing1} alt="" />
                <img className='w-52' src={playing2} alt="" />
                <img className='w-52' src={playing3} alt="" />
                <img className='w-52' src={playing4} alt="" />
                <img className='w-52' src={playing7} alt="" />
                <img className='w-52' src={playing6} alt="" /> */}







            </div>



        </div>
    );
};

export default Gallery;