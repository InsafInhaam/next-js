const EventsCatPage = () => {
  return (
    <div>
      <h1>Event1 page</h1>
      <a href="/events/event1">Event 1</a>
      <a href="/events/event2">Event 2</a>
      <a href="/events/event3">Event 3</a>
      <a href="/events/event4">Event 4</a>
      <a href="/events/event5">Event 5</a>
    </div>
  );
};

export default EventsCatPage;

export async function getStaticPaths() {
  const { events_categories } = await import("../../../data/data.json");
  const allPaths = events_categories.map((ev) => {
    return {
      params: {
        cat: ev.id.toString(),
      },
    };
  });

  return {
    paths: allPaths,
    fallback: false,
  };
}  

export async function getStaticProps(context){
    const {allEvents} = await import('../../../data/data.json')
    return{props: {}}
}