import { format } from 'date-fns';
import React, { useState } from 'react';
import { useQuery } from 'react-query';
import Loading from '../../../shared/Loading';
import BookingModal from '../BookingModal/BookingModal';
import ServiceCard from './ServiceCard/ServiceCard';

const AppointmentCard = ({ date }) => {
    const [treatment, setTreatment] = useState(null)

    const formattedDate = format(date, 'PP')

    const { data: services, isLoading, refetch, } = useQuery(['appointment', formattedDate], () =>
        fetch(`http://localhost:5000/available?date=${formattedDate}`)
            .then(res => res.json())
    )
    if (isLoading) {
        return <Loading></Loading>
    }
    return (
        <div>
            <div>
                <h6 className='text-secondary text-xl text-center'>Available appointments on {format(date, "PP")}</h6>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                {
                    services?.map(service => <ServiceCard
                        key={service._id}
                        service={service}
                        setTreatment={setTreatment}
                    ></ServiceCard>)
                }
            </div>
            {treatment && <BookingModal
                refetch={refetch}
                treatment={treatment}
                setTreatment={setTreatment}
                date={date}></BookingModal>}
        </div>
    );
};

export default AppointmentCard;