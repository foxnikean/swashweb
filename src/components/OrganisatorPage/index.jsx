import React from 'react'
import "./OrganisatorPage.scss"
import OrgNav from './components/orgNav'
import AddEvent from '../AddEvent'
const OrganisatorPage = () => {
  return (
    <div className='org-container'>
        <span className='org-header'>Organizatör Özel</span>
        <OrgNav/>
        <AddEvent/>
    </div>
  )
}

export default OrganisatorPage