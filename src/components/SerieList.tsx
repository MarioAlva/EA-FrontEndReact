import '../css/Event.css'
import Serie from '../models/Serie'
import * as serieService from '../services/SerieServices'
import { useNavigate } from "react-router-dom"

  interface Props {
    serie: Serie;
    loadSeries: () => void;
  }

  
  const SerieList = (props: Props) => {
	  const navigate = useNavigate();
    const { serie, loadSeries } = props;
        const handleDelete = async (id: string) => {
        await serieService.delSerie(id);
        loadSeries();
      };

	  const clickSerie = () => {
		navigate(`/serie/${serie._id}`);
	  };
    return(
      <div onClick={clickSerie} className="col-md-4 p-2">
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