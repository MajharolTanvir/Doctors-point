import React from 'react';
import { useForm } from 'react-hook-form';
import { useQuery } from 'react-query';
import { toast } from 'react-toastify';
import Loading from '../../shared/Loading';

const AddDoctor = () => {
    const { register, formState: { errors }, handleSubmit, reset } = useForm();

    const { data: services, isLoading } = useQuery('services', () => fetch('http://localhost:5000/service').then(res => res.json()))

    const imageStorageKey = 'e13c0deb95648d59c098b58894a2f7c7';

    const onSubmit = async data => {
        const image = data.image[0]
        const formData = new FormData();
        formData.append('image', image);
        const url = `https://api.imgbb.com/1/upload?key=${imageStorageKey}`
        fetch(url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(result => {
                if (result.success) {
                    const img = result.data.url;
                    const doctor = {
                        name: data.name,
                        email: data.Email,
                        specialty: data.Specialty,
                        img: img
                    }
                    console.log(doctor);
                    fetch('http://localhost:5000/doctor', {
                        method: 'POST',
                        headers: {
                            'content-type': 'application/json',
                            authorization: `Bearer ${localStorage.getItem('accessToken')}`
                        },
                        body: JSON.stringify(doctor)
                    })
                        .then(res => res.json())
                        .then(inserted => {
                            if (inserted?.insertedId) {
                                toast.success('Doctor added successfully')
                                reset()
                            }
                            else (
                                toast.error('Failed to add the doctor')
                            )
                        })
                }
            })

    };
    if (isLoading) {
        return <Loading></Loading>
    }

    return (
        <div>
            <h5 className='text-2xl'>Add a doctor</h5>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text text-lg font-medium font-sans">Name</span>
                    </label>
                    <input type="text" placeholder='Your name' className="input input-bordered w-full max-w-xs" {...register("name", {
                        required: {
                            value: true,
                            message: 'Name is required'
                        },
                    })} />
                </div>
                <label className="label">
                    {errors.name?.type === 'required' && <span className="label-text-alt text-red-500">{errors.name.message}</span>}
                </label>
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text text-lg font-medium font-sans">Email</span>
                    </label>
                    <input type="email" placeholder='Your email' className="input input-bordered w-full max-w-xs" {...register("Email", {
                        required: {
                            value: true,
                            message: 'Email is required'
                        },
                        pattern: {
                            value: /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/,
                            message: 'Enter a valid email'
                        }
                    })} />
                </div>
                <label className="label">
                    {errors.Email?.type === 'required' && <span className="label-text-alt text-red-500">{errors.Email.message}</span>}
                    {errors.Email?.type === 'pattern' && <span className="label-text-alt text-red-500">{errors.Email.message}</span>}
                </label>
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text text-lg font-medium font-sans">Specialty</span>
                    </label>
                    <select {...register("Specialty")} className="select input-bordered w-full max-w-xs">
                        {
                            services.map(service => <option
                                key={service._id}
                                value={service.name}
                            >{service.name}</option>)
                        }
                    </select>
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text text-lg font-medium font-sans">Photo</span>
                    </label>
                    <input type="file" className="input input-bordered w-full max-w-xs" {...register("image", {
                        required: {
                            value: true,
                            message: 'Image is required'
                        },
                    })} />
                </div>
                <label className="label">
                    {errors.name?.type === 'required' && <span className="label-text-alt text-red-500">{errors.name.message}</span>}
                </label>
                <input className="btn btn-accent w-full max-w-xs" type="submit" value="Add doctor" />
            </form>
        </div>
    );
};

export default AddDoctor;