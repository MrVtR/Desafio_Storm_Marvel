import './CharacterDetail.scss';
function CharacterDetail(props) {
  const {id,comics,events,series,stories} = props.location;
  console.log(comics);
    return (
      <div className="Detail">
        <h1>{id}</h1>
      </div>
    );
}

export default CharacterDetail;
