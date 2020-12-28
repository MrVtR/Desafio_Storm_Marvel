import './CharacterDetail.scss';
function CharacterDetail(props) {
  const {id} = props.location;
  console.log(id);
    return (
      <div className="Detail">
        <h1>{id}</h1>
      </div>
    );
}

export default CharacterDetail;
