import express from 'express';

let router = express.Router();

let mockData = [
  {
    "_id": 0,
    "headline": "aute",
    "body": "Fugiat laborum culpa irure exercitation elit. Ad reprehenderit Lorem ex occaecat enim veniam. Minim ullamco voluptate sit aliqua exercitation non reprehenderit. Labore consequat laboris incididunt ea deserunt Lorem non sint dolor laborum id. Proident duis pariatur aliquip enim sunt duis ullamco cupidatat labore occaecat tempor fugiat sit laborum. Laborum duis velit laboris ex voluptate et consectetur aliquip.\r\n"
  },
  {
    "_id": 1,
    "headline": "deserunt",
    "body": "Ullamco magna esse tempor tempor esse ut ut ex. Mollit ullamco exercitation reprehenderit voluptate ipsum cillum Lorem elit laborum sit. Irure aliqua excepteur irure labore mollit pariatur sint.\r\n"
  },
  {
    "_id": 2,
    "headline": "enim",
    "body": "Dolore consequat excepteur labore sint laboris aute. Exercitation Lorem consectetur veniam officia sunt qui ea ea irure reprehenderit deserunt eiusmod proident occaecat. Dolor occaecat nulla esse Lorem ad ex ex proident consectetur consectetur elit. Dolor duis pariatur anim eu ea. Laboris officia commodo aute velit veniam nulla. Nisi sunt consequat qui tempor consectetur esse ex do aliquip. Duis ipsum sit minim officia labore enim nostrud esse anim eu.\r\n"
  },
  {
    "_id": 3,
    "headline": "sint",
    "body": "Aliquip consequat tempor officia fugiat enim exercitation consectetur deserunt aute esse. Do proident sunt velit est consectetur enim aliqua ad deserunt ea. Ex exercitation dolor culpa ex. Occaecat do esse enim dolore. Officia ipsum deserunt ut irure magna duis in.\r\n"
  },
  {
    "_id": 4,
    "headline": "anim",
    "body": "Ut veniam elit eu amet cillum dolore amet sit sunt. Lorem mollit cupidatat adipisicing ea esse est nisi. Ipsum occaecat deserunt velit eu. Tempor eu anim id sit fugiat. Lorem nostrud labore non proident Lorem tempor occaecat.\r\n"
  },
  {
    "_id": 5,
    "headline": "adipisicing",
    "body": "Cupidatat tempor in amet eiusmod qui est incididunt fugiat duis ad exercitation excepteur ipsum cupidatat. Sint id laborum deserunt eiusmod non labore veniam minim pariatur aliquip velit ullamco pariatur proident. Aliquip ut laboris do fugiat.\r\n"
  }
];
router.get('/',(req, res) =>{
  // 2 sec delay added
  setTimeout((function() {res.status(200).json(mockData)}), 2000);
});

export default router;
