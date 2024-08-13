import React from 'react'
import { Link } from 'react-router-dom'
import{HiUpload, HiViewBoards} from 'react-icons/hi'

const Sidebar = () => {
  return (
    <div className='sidebar'>
        <h4>Dashboard</h4>
        <hr/>

        <div className='list-group'>
            <Link to="upload" className='list-group-item list-group-iteam-action'>
            <HiUpload/> Upload
            </Link>
            <Link to="manage" className='list-group-item list-group-iteam-action'>
            <HiViewBoards/> Manage
            </Link>
        </div>
    </div>
  )
}

export default Sidebar
