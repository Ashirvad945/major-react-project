import React from 'react'
import DashboardSidebar from '../components/DashboardSidebar'
import PhotoManagment from '../components/seller/PhotoManagment'

const SellerDashboard = () => {
  return (
    <div className='flex flex-col sm:flex-row'>
      <DashboardSidebar/>
      <div>
        {/* we will change the pages switch case */}
      </div>
      <PhotoManagment/>
    </div>
  )
}

export default SellerDashboard
