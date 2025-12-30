
import { useEffect, useState } from 'react';
import WhatWeAre from '../../assets/image/WhatWeAre.jpg'
import SingleList from './SingleList';


const WhoWeAre = () => {

    const [clinicList, setClinicList] = useState([]);
    const [description, setDescription] = useState('');

    useEffect(() => {
        fetch('/whatweare.json')
            .then(res => res.json())
            .then(data => {
                setClinicList(data.stats)
                setDescription(data.description)
            })

    }, [])

    console.log(clinicList)

    return (
        <div className='w-9/12 mx-auto '>
            <h2 className='text-center text-3xl'>What We Do</h2>
            <div className='flex gap-3'>
                <div>
                    <div className='grid grid-cols-2'>
                        {
                            clinicList.map(list => <SingleList key={list.id} list={list}></SingleList>)
                        }
                    </div>
                    <p>{description}</p>
                </div>
                <div>
                    <img src={WhatWeAre} alt="" />
                </div>
            </div>
        </div>
    );
};

export default WhoWeAre;