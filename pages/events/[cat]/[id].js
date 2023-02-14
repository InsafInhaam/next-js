import SingleEvent from "../../../src/components/events/single-event";

const EventPage = ({ data }) => {
  return (
    <SingleEvent data={data}/>
  );
};

export default EventPage;

export async function getStaticPaths() {
    const data = await import("/data/data.json");
    const allEvents = Object.values(data.allEvents);
  
    const allPaths = allEvents.map((path) => {
      return {
        params: {
          cat: String(path?.city),
          id: String(path?.id),
        },
      };
    });
  
    return {
      paths: allPaths,
      fallback: false,
    };
  }
  

  export async function getStaticProps(context) {
    const id = context.params.id;
    const { allEvents } = await import('/data/data.json');
    const eventData = allEvents.find((ev) => id === ev?.id);
  
    return {
      props: { data: eventData },
    };
  }