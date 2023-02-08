import React from 'react';
import StudentCard from './AdminDashboard/StudentCard';
import TrainerCard from './AdminDashboard/TrainerCard';
import StudentPerformance from './AdminDashboard/StudentPerformance'
import InternshipProgress from './AdminDashboard/InternshipProgress';
import Online from './AdminDashboard/Online';

const AdminDashboard = () => {
  return (
    <div>
      <h1 className='mb-4'>Dashboard</h1>
      <div className="md:grid md:grid-cols-3 gap-6 space-y-4 md:space-y-0">
        <div className="">
          <StudentCard />
        </div>
        <div className="">
          <TrainerCard />
        </div>
        <div className="">
          <InternshipProgress />
        </div>
        <div className="col-span-2">
          <StudentPerformance />
        </div>
        <div className="">
          <Online />
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
