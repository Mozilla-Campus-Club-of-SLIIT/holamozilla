import "./Timeline.css"

function TimelineEvent({ event, direction }) {
  return (
    <div className={`timeline-event timeline-event-${direction}`}>
      <div className="event-metadata">
        <h4 className="event-title">{event.title}</h4>
        {event.duration && <div className="event-times">{event.duration}</div>}
      </div>
      {event.speakerName && (
        <div className="event-speaker">
          <img src={event.speakerImage} className="event-speaker-image" />
          <div>
            <div className="event-speaker-name">{event.speakerName}</div>
            <div className="event-speaker-title">{event.speakerTitle}</div>
          </div>
        </div>
      )}
    </div>
  )
}

export default function Timeline({ events }) {
  return (
    <div className="timeline-wrapper">
      <div className="center-line" />
      {events.map((event, index) => <TimelineEvent event={event} direction={index % 2 === 0 ? "left" : "right"} />)}
    </div>
  )
}