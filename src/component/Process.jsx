import React from 'react'
import Heading from './Heading'
import { TbCircleDashedNumber1, TbCircleDashedNumber2, TbCircleDashedNumber3, TbCircleDashedNumber4 } from "react-icons/tb";
import { PiPlant,PiFactory } from "react-icons/pi";
import { SlBadge } from "react-icons/sl";
import { BsTruck } from "react-icons/bs";

const Process = () => {
    const renderSteps=steps.map(item=>{
        return(
            <div className={`flex-1 basis-[300px] ${item.id%2===0? 'md:-mt-100':''}`}>
                <span className='w-18 h-18 md:text-8xl text-6xl flex bg-grey-100 md:mx-auto rounded-full justify-center items-center md:outline-4 outline-1'>{item.number}</span>
                <div className='flex gap-x-5 mt-10 items-center'>
                    
                        <span className='flex justify-center items-center text-3xl bg-green-500 w-35 h-15 rounded-full '>{item.icon}</span>
                    

                    <div className=''>
                        <h4 className='text-2xl font-bold'>{item.title}</h4>
                        <p className='mt-2'>{item.para}</p>
                    </div>
                </div>
            </div>
        )
    })
    return (
        <section>
            <div className='max-w-[1400px] mx-auto px-10 py-20'>
                <div className='w-fit mr-auto'>
                    <Heading green='Our' black='Process' />
                </div>

                <div className='flex flex-wrap  gap-y-17 md:mt-20 mt-10 items-center justify-center  md:pt-50'>
                    {renderSteps}
                </div>
            </div>
        </section>
    )
}

export default Process

const steps = [
    {
        id: 1,
        number: <TbCircleDashedNumber1 />,
        title: 'Sourcing',
        para: 'It is a long established fact that a reader will be distracted by the readable content of a page.',
        icon: <PiPlant />
    },
    {
        id: 2,
        number: <TbCircleDashedNumber2 />,
        title: 'Manufacturing',
        para: 'It is a long established fact that a reader will be distracted by the readable content of a page.',
        icon: <PiFactory />
    },
    {
        id: 3,
        number: <TbCircleDashedNumber3 />,
        title: 'Quality Control',
        para: 'It is a long established fact that a reader will be distracted by the readable content of a page.',
        icon: <SlBadge />
    },
    {
        id: 4,
        number: <TbCircleDashedNumber4 />,
        title: 'Logistics',

        para: 'It is a long established fact that a reader will be distracted by the readable content of a page.',
        icon: <BsTruck />
    }
];

