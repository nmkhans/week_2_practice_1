const friends = ["rahim", "karim", "abdul", "sadsd", "heroAlom"];

let name = "";

const big = friends.forEach(friend => {
  if(friend.length > name.length) {
    name = friend;
  }
})

console.log(name)