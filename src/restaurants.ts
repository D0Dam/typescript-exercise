interface Restaurant {
  category: "한식" | "중식" | "일식" | "양식";
  name: string;
  distance: number;
  menu: string[];
}

type category = "한식" | "중식" | "일식" | "양식";
//이건 요긴하게 잘 써보세요!
interface Restaurants {
  list: Restaurant[];
}

function addRestaurant(Restaurant: Restaurant) {
  // 채워주세요!
}

function fillterRestaurant(Restaurant: Restaurant, category: category) {
  // 이것도!
}

//예시!
const 나고야: Restaurant = {
  category: "일식",
  name: "나고야",
  distance: 12,
  menu: ["규동", "돈까스"],
};

addRestaurant(나고야);
