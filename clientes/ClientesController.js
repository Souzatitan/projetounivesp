const express = require("express");
const router = express.Router();
const Clientes = require("./Clientes");
const slugify = require("slugify")

router.get("/admin/clientes/new", (req, res)=> {
    res.render("admin/clientes/new")
});

router.post("/clientes/save", (req, res)=> {
    var title = req.body.title;
    if(title != undefined) {

        Clientes.create({
            title:title,
            slug:slugify(title)
        }).then(()=> {
            res.redirect("/admin/clientes");
        })

    }else{
        res.redirect("/admin/clientes/new");
    }
})

router.get("/admin/clientes", (req, res)=> {

    Clientes.findAll().then(clientes => {

        res.render("admin/clientes/index", {clientes: clientes});

    });
    
});

router.post("/clientes/delete", (req, res)=> {
    var id = req.body.id;
    if(id !=undefined) {
        if(!isNaN(id)){

            Clientes.destroy({
                where: {
                    id: id
                }
            }).then(()=> {
                res.redirect("/admin/clientes");
            })

        }else{
            res.redirect("/admin/clientes");
        }
    }else{
        res.redirect("/admin/clientes");
    }
})

router.get("/admin/clientes/edit/:id", (req, res) => {
    var id = req.params.id;

    if(isNaN(id)){
        res.redirect("/admin/clientes");
    } else {
        Clientes.findByPk(id).then(cliente => {
            if(cliente != undefined){
                res.render("admin/clientes/edit", {clientes: cliente});
            } else {
                res.redirect("/admin/clientes");
            }
        }).catch(erro => {
            res.redirect("/admin/clientes");
        });
    }
});


router.post("/clientes/update", (req, res)=>{
    var id = req.body.id;
    var title = req.body.title;

    Clientes.update({title: title, slug: slugify(title)}, {
        where: {
            id: id
        }
    }).then(()=> {
        res.redirect("/admin/clientes");
    })
})
module.exports = router;