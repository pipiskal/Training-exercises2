import React, { useEffect, useState } from "react";
import Card from "./components/card/Card";
import { getCommunities, getTags } from "./apiCalls/GraphQLApi";

export type CommunityType = {
  rank: number;
  join: boolean;
  img: string;
  name: string;
  link?: string;
};

export type TagType = {
  name: string;
};

/*
const communities: CommunityType[] = [
  {
    name: "AskReddit",
    rank: 1,
    join: false,
    img: "https://styles.redditmedia.com/t5_2ubgg/styles/communityIcon_lkxajjefezh51.png",
  },
  {
    name: "space",
    rank: 2,
    join: false,
    img: "https://styles.redditmedia.com/t5_2ubgg/styles/communityIcon_lkxajjefezh51.png",
  },
  {
    name: "boxoffice",
    rank: 3,
    join: true,
    img: "https://styles.redditmedia.com/t5_2ubgg/styles/communityIcon_lkxajjefezh51.png",
  },
  {
    name: "wallstreetbets",
    rank: 4,
    join: true,
    img: "https://styles.redditmedia.com/t5_2ubgg/styles/communityIcon_lkxajjefezh51.png",
  },
  {
    name: "mildlyinfuriating",
    rank: 4,
    join: true,
    img: "https://styles.redditmedia.com/t5_2ubgg/styles/communityIcon_lkxajjefezh51.png",
  },
];

*/
// there is no need the name to have type

/*const tags: TagType[] = [
  { name: "Near you" },
  { name: "News" },
  { name: "Aww" },
  { name: "Sports" },
];
*/

// const link = "https://www.reddit.com/subreddits/leaderboard/news/";
const subImage =
  "https://www.redditstatic.com/desktop2x/img/leaderboard/banner-background.png";

// 1. from the app we pass the tags that are an array of TagTypes
// 2. And the communities that are CommunityTypes
function App() {
  const [tags, setTags] = useState<TagType[]>([]);
  const [communities, setCommunities] = useState<CommunityType[]>([]);
  // we need it cause we get a promise from GrapghQlApi

  // seperate the requests to 2 use effects

  useEffect(() => {
    // getting the tags and setting the reponsed data to the tags State
    const getTagsFromApi = async () => {
      try {
        const tags = await getTags();
        setTags(tags);
        // console.log(tags);
      } catch (error) {
        console.log(error);
      }
    };

    getTagsFromApi();
  }, []);

  useEffect(() => {
    // getting the communities and setting the reponsed data to the communities State
    const getCommunitiesFromApi = async () => {
      try {
        const communities = await getCommunities();
        setCommunities(communities);
      } catch (error) {
        console.log(error);
      }
    };

    getCommunitiesFromApi();
  }, []);

  console.log(communities);

  return (
    <div className="App">
      <Card tags={tags} communities={communities} subImage={subImage} />
    </div>
  );
}

export default App;
