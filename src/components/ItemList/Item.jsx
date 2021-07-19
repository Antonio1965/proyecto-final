// import { Link } from "react-router-dom";

export const Item = ({ item }) => {
  return (
    // <Link to={`/item/${item.id}`}>
      <div className="card-item">
        <img src='https://th.bing.com/th/id/OIP.xsKYJ5zq2I4jMp-AEM_3dQHaEj?pid=ImgDet&rs=1' alt='Drone' />
        <div className="text">
          <strong>Drone-2021</strong>
          <hr></hr>
          <p> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt, reiciendis!

          </p>
          <p>
            Precio: <span>15000</span>
          </p>
        </div>
      </div>
    // </Link>
  );
};