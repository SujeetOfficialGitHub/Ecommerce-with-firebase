import React from "react"
import {Button, Table} from 'react-bootstrap'
import classes from './Home.module.css'
import TourDate from "../components/layout/TourDate"
const toursList = [
  {
    id: 't1',
    date : new Date('July 7 2023'),
    city: 'DETROIT, MI',
    place: 'DTE ENERGY MUSIC THEATRE'
  },
  {
    id: 't2',
    date : new Date('August 11 2023'),
    city: 'TORONTO,ON',
    place: 'BUDWEISER STAGE'
  },
  {
    id: 't3',
    date : new Date('August 13 2023'),
    city: 'BRISTOW, VA',
    place: 'JIGGY LUBE LIVE'
  },
  {
    id: 't4',
    date : new Date('December 17 2023'),
    city: 'PHOENIX, AZ',
    place: 'AK-CHIN PAVILION'
  }
]
const Home = () => {
  return (
    <div className={classes['tour-list']}>
        <h1 className="text-center">TOURS</h1>
        <Table striped bordered hover >
          <tbody>
          {toursList.map((tour) => (
          <tr key={tour.id} className={classes.tour}>
            <td><TourDate tourDate={tour.date} /></td>
            <td>{tour.city}</td>
            <td>{tour.place}</td>
            <td><Button className="btn-sm">Buy Tickets</Button></td>
          </tr>
        ))}
          </tbody>
      </Table>
    </div>
  )
}

export default Home

