
const Board = require('../../models/board');

async function whatBoard(){
  const boards = await Board.find({}).sort({ createdAt: -1 });
  const result = boards.map((item) => {
    if (item.createdAt) {
      item.date = moment(item.createdAt).format('YYYY-MM-DD');
    }
    return item;
  });
  
  console.log(result);
}



whatBoard();