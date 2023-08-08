import  express  from 'express';
const router = express.Router();
router.get('/', (req,res) =>{
    fetch(`http://localhost:3000/api/players`)
    .then(response => response.json())
    .then(players => {
        res.send(players)
     /* res.render('../views/playerList.ejs',{players : players});  */
    })
})
router.get('/:player', (req, res) => {
    fetch(`http://localhost:3000/api/players/${req.params.player}`)
    .then(response => response.json())
    .then(player => {
        console.log(player);
        res.render('../views/player.ejs',{player : player[0]});
    })

});

export default router

