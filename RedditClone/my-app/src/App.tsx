import Card from "./components/card/Card";
// dummy data before the api call

type Tag = {
  name: string;
};

type CommunityInformation = {
  img: string;
  subText: string;
};

const tags: Tag[] = [
  { name: "Top" },
  { name: "Near You" },
  { name: "Sports" },
  { name: "Aww" },
];

const communities: CommunityInformation[] = [
  // will be a CommunityInformation type
  { img: "", subText: "AskReddit" },
  { img: "", subText: "Greece" },
  { img: "", subText: "Italy" },
];

function App() {
  return (
    <div className="App">
      <Card tags={tags} />
    </div>
  );
}

export default App;
