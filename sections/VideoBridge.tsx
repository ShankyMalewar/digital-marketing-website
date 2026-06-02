export default function VideoBridge() {
  return (
    <section className="video-bridge" aria-label="Brand animation space">
      <div className="video-bridge__stage" aria-hidden="true">
        <span className="video-bridge__line video-bridge__line--top" />
        <span className="video-bridge__orb video-bridge__orb--blue" />
        <span className="video-bridge__orb video-bridge__orb--yellow" />
        <span className="video-bridge__mark" />
        <span className="video-bridge__line video-bridge__line--bottom" />
      </div>
    </section>
  );
}
