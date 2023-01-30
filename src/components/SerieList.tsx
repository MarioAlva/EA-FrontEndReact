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
      <div onClick={clickSerie} className="col-md-4 p-2" style={{width: "130px", height: "95%", margin: "0 5px", backgroundColor: "#3a3a3a", borderRadius: ".4vw", overflow: "hidden" }}>
      <div
        className="card card-body video-card animate__animated animate__backInUp"
        style={{ cursor: "pointer", height: "100%", width: "100%", display: "flex", justifyContent: "center", alignItems: "center" }} 
        
        //onClick={() => history.push(`/update/${video._id}`)}
      >
        <img height="100%" src={serie.poster_path + ''} alt="poster" />
      </div>
    </div>
    )
}
export default SerieList;