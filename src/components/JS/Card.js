import "../CSS/Card.css";

function Card(props) { 
    const classCard="card "+props.className; 
    return (
      <div className={classCard}>
          {props.children}
      </div>
    );
  }
  export default Card;
  