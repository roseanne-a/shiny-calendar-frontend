import NewsTicker, { Directions } from "react-advanced-news-ticker";
import "./Ticker.css";

export default function Ticker({ events = [] }) {
  return events.length > 0 ? (
    <NewsTicker
      rowHeight={80}
      maxRows={2}
      speed={600}
      direction={Directions.UP}
      duration={4000}
      autoStart={true}
      pauseOnHover={false}
      id="nt-example1"
      className="nt-example1"
      style={{ marginTop: 34 }}
    >
      <div>Etiam imperdiet volutpat libero eu tristique.</div>
      <div>Curabitur porttitor ante eget hendrerit adipiscing.</div>
      <div>Praesent ornare nisl lorem, ut condimentum lectus gravida ut.</div>
      <div>Nunc ultrices tortor eu massa placerat posuere.</div>
    </NewsTicker>
  ) : (
    `No Events`
  );
}
