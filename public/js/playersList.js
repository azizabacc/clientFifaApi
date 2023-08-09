const playerCards = document.querySelectorAll(".playerCard");
const playersId = document.querySelectorAll("span");
// give player id to each playerCard
for(let i=0; i<playerCards.length;i++){
    playerCards[i].id=playersId[i].textContent;
}
playerCards.forEach(playerCard => {
    console.log(playerCard.id);
})
  playerCards.forEach(playerCard => {
    playerCard.addEventListener('click',  () => {

      
            window.location.href = `/players/${playerCard.id}`;
      
      
      });
  });