import { Box } from "@mui/material";
import { Stack } from "@mui/material";
import { Post } from "./Post";

export const Feed = () => {
  return (
    <Box flex={4}>
      <Stack spacing={2} sx={{
        justifyContent:"center",
        alignItems: "center",
        margin:{xs:"16px 20px 8px 0",md:"0"}
      }} m={2}>
        <Post
          letter={"D"}
          title="dragon on river"
          subheader="September 14, 2016"
          image="https://www.zastavki.com//pictures/640x480/2023/Fantasy_Fantasy_dragon_over_the_river_161496_29.jpg"
          bodyText="The picture depicts a majestic dragon
        soaring gracefully above a serene river.
        The dragon's large, powerful wings are spread wide,
        catching the gentle breeze as it glides effortlessly through the air.
        Its scales glisten in the sunlight, reflecting hues of emerald green and sapphire blue."
        />
        <Post
          letter={"P"}
          title="old piano in the magic forest"
          subheader="November 22, 2018"
          image="https://www.zastavki.com/pictures/originals/2023/Fantasy_Old_piano_in_a_magical_forest_161715_.jpg"
          bodyText="The image portrays an evocative scene of an ancient piano resting serenely amidst the enchanting embrace of a magical forest. The forest exudes an aura of mysticism, with towering trees draped in lush foliage that filters gentle beams of sunlight. Amidst this ethereal backdrop, the old piano stands as a testament to both human artistry and the passage of time."
        />
        <Post
          letter={"E"}
          title="man discover a great elephant"
          subheader="April 10, 2020"
          image="https://www.zastavki.com/pictures/originals/2023/Fantasy_Fantastic_elephant_by_the_water_with_a_man_158350_.jpg"
          bodyText="The image captures a moment of awe and discovery as a man encounters a majestic elephant of grand proportions. The man stands before the colossal creature, his expression a blend of wonder, reverence, and perhaps a touch of trepidation. The elephant, with its massive frame and intricate wrinkles, commands attention and respect, embodying strength and wisdom."
        />
        <Post
          letter={"C"}
          title="Flying castle in the sky"
          subheader="August 17, 2021"
          image="https://www.zastavki.com/pictures/originals/2020Fantasy_Fantastic_castle_on_a_flying_island_in_the_sky_143070_.jpg"
          bodyText="The image portrays a captivating and fantastical scene—a majestic flying castle suspended high above the earth, nestled among the clouds. The castle's architecture is intricate and enchanting, adorned with towering spires, ornate balconies, and delicate turrets that seem to touch the sky itself."
        />
        <Post
          letter={"A"}
          title="Evaporation on an alien planet"
          subheader="Mars 19, 2022"
          image="https://www.zastavki.com/pictures/originals/2015/Fantasy_Evaporation_on_an_alien_planet__Kuldar_Leement_110258_.jpg"
          bodyText="The image depicts a mesmerizing scene set on an alien planet, where fantastical elements and vibrant colors blend in an otherworldly landscape. Puffy, luminous clouds of various shapes and sizes fill the sky, casting an enchanting glow across the terrain below."
        />
        <Post
          letter={"L"}
          title="Wonder Land"
          subheader="july 25, 2023"
          image="https://www.zastavki.com/pictures/originals/2013/Fantasy__038817_.jpg"
          bodyText="The picture captures the essence of a whimsical wonderland, a realm that defies the ordinary and enchants the senses. A lush and vibrant landscape unfolds, filled with towering mushrooms that seem to glow with an otherworldly light. These giant mushrooms create a dreamlike canopy, casting playful shadows on the ground below."
        />
      </Stack>
    </Box>
  );
};
