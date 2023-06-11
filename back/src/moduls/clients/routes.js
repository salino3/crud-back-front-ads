const express = require('express');
const answers = require('../../network/answers');
const controllers = require('./controllers');

const router = express.Router();

router.get("/", Alls);
router.get("/:id", One);
router.post("/", addOne);
router.put("/", Delete);
 


 async function Alls(req, res, next) {
  try {
    await controllers.getAlls().then((items) => {
      answers.success(req, res, items, 200);
    });
  } catch (error) {
       next(error);
  };
};
 
async function One(req, res, next) {
    try {
        
      await controllers.One(req.params.id)
        .then((items) => {
          answers.success(req, res, items, 200);
        });
    } catch (error) {
       next(error);
    }
};


async function addOne(req, res, next) {
    try {  
      await controllers.addOne(req.body);
      if (req.body.id == 0 || !data.id) {
        msg = "Item saved succefully";
      } else {
        msg = "Item updated succefully";
      }
        answers.success(req, res, msg, 201);
        
    } catch (error) {
       next(error);
    };
};

async function Delete(req, res, next) {
    try {
        
      await controllers.Delete(req.body)
        .then((items) => {
          answers.success(req, res, "Item succefully deleted!", 200);
        });
    } catch (error) {
       next(error);
    };
};


module.exports = router;