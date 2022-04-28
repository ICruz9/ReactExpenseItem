import "../CSS/ChartBar.css";

function ChartBar(props) {
  let barfillHeigth = "0%";
  if (props.maxValue > 0) {
    barfillHeigth = Math.round((props.value / props.maxValue) * 100) + "%";
  }
  return (
    <div className="chart-bar">
      <div className="chart-bar__inner">
        <div
          className="chart-bar__fill"
          style={{ height: barfillHeigth }}
        ></div>
      </div>
      <div className="chart-bar__label">{props.label}</div>
    </div>
  );
}

export default ChartBar;
