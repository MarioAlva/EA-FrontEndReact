import React from 'react'
import '../css/Event.css'
import Logo from '../assets/img/logo.svg'
import {Serie} from '../models/Serie'
import { ChangeEvent, useEffect, useState } from 'react'
import * as serieService from '../services/SerieServices'
import { stringify } from 'querystring'
//import ReactPlayer from "react-player";



  interface Props {
    serie: Serie;
    loadSeries: () => void;
  }
  
  const SerieList = (props: Props) => {
    const { serie, loadSeries } = props;
        const handleDelete = async (id: string) => {
        await serieService.delSerie(id);
        loadSeries();
      };
    return(
      <div className="col-md-4 p-2">
      <div
        className="card card-body video-card animate__animated animate__backInUp"
        style={{ cursor: "pointer" }}
        //onClick={() => history.push(`/update/${video._id}`)}
      >
        <div className="d-flex justify-content-between">
          <h5>{serie.title}</h5>
          <span
            className="text-danger"
            onClick={() => serie._id && handleDelete(serie._id)}
          >
            X
          </span>
        </div>
        <p>{serie.overview}</p>
        <div className="embed-responsive embed-responsive-16by9">
          <h1>{serie.trailer_path}</h1>
        </div>
      </div>
    </div>
     
        
    
    
        

    )

}
export default SerieList;