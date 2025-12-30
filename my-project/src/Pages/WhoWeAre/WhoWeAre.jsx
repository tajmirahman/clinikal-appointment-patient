
import { useEffect, useState } from 'react';
import WhatWeAre from '../../assets/image/WhatWeAre.jpg'
import SingleList from './SingleList';


const WhoWeAre = () => {

    const [clinicList, setClinicList] = useState([]);

    useEffect(() => {
        fetch('/whatweare.json')
            .then(res => res.json())
            .then(data => setClinicList(data.stats))
    }, [])

    console.log(clinicList)

    return (
        <div className='w-9/12 mx-auto flex justify-between items-center gap-3'>
            <h2>What We Do</h2>
            <div>
                {
                    clinicList.map(list=><SingleList key={list.id} list={list}></SingleList>)
                }
            </div>
        </div>
    );
};

export default WhoWeAre;