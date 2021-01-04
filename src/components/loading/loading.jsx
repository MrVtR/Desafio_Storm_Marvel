import './loading.scss';
import avengers from '../../assets/images/avengers.gif';
export default function Loading() {
  return (
    <div className="loading">
      <h1>Carregando...</h1>
      <img src={avengers} alt="" className="logoLoading" />
    </div>
  );
}
