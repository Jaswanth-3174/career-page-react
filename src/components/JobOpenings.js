import React from 'react';

const JobOpenings = () => {
    // Example job data with image paths
    const jobs = [
        {
            title: 'Software Engineer',
            department: 'Engineering',
            location: 'New York',
            jobType: 'Full-time',
            description: 'Develop and maintain software applications.',
            image: '/images/job1.jpg',
        },
        {
            title: 'Project Manager',
            department: 'Management',
            location: 'San Francisco',
            jobType: 'Full-time',
            description: 'Manage and oversee project development.',
            image: '/images/job2.jpg',
        },
        {
            title: 'Data Scientist',
            department: 'Data',
            location: 'Chicago',
            jobType: 'Part-time',
            description: 'Analyze and interpret complex data.',
            image: '/images/job3.jpg',
        },
        {
            title: 'UX Designer',
            department: 'Design',
            location: 'Seattle',
            jobType: 'Contract',
            description: 'Design user interfaces and improve user experience.',
            image: '/images/job4.jpg',
        },
        {
            title: 'Marketing Specialist',
            department: 'Marketing',
            location: 'Austin',
            jobType: 'Full-time',
            description: 'Create and manage marketing campaigns.',
            image: '/images/job5.jpg',
        },
        {
            title: 'Customer Support',
            department: 'Support',
            location: 'Remote',
            jobType: 'Full-time',
            description: 'Provide support to customers and resolve issues.',
            image: '/images/job6.jpg',
        },
    ];

    return (
        <section className="job-openings py-5">
            <div className="container">
                <h2 className="text-center mb-4">Job Openings</h2>
                <div className="row">
                    {jobs.map((job, index) => (
                        <div className="col-md-4 mb-4" key={index}>
                            <div className="card h-100">
                                <img src={job.image} className="card-img-top" alt={job.title} />
                                <div className="card-body">
                                    <h5 className="card-title">{job.title}</h5>
                                    <p className="card-text"><strong>Department:</strong> {job.department}</p>
                                    <p className="card-text"><strong>Location:</strong> {job.location}</p>
                                    <p className="card-text"><strong>Job Type:</strong> {job.jobType}</p>
                                    <p className="card-text">{job.description}</p>
                                    <a href="#" className="btn btn-link p-0">Read More</a>
                                </div>
                                <div className="card-footer bg-transparent">
                                    <a href="#" className="btn btn-primary btn-block">Apply Now</a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default JobOpenings;
