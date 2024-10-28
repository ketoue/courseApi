
const Course = require('../Model/Course');
exports.isEmpty = (some) => {
    if (some === "" || some === undefined || some === null) {
        return true;
    }
    return false;
}

// Créer une nouvelle course
exports.createCourse = async(req,res)=>{
    const {id_reservation, id_chauffeur,id_client,statut} = req.body;
    date_depart = Date.now()
    date_Arrive = Date.now()
    if (this.isEmpty(id_reservation) || this.isEmpty(id_chauffeur) || this.isEmpty(statut) || this.isEmpty(date_depart) || this.isEmpty(date_Arrive)) {
        return res.status(400).send(`Missing informations`)
    }

   

    const course = {
        id_reservation : id_reservation,
        id_chauffeur : id_chauffeur,
        id_client :req.id,
        statut : statut,
        date_depart: date_depart,
        date_Arrive:date_Arrive
    }

    const Coursec = await Course.create(course)

    if (Coursec) return res.send({
        "status" : true,
        "data" : "New course added"
    })

    return res.send({
        "status" : false,
        "data" : "Error ! course not added"
    })

}
// Obtenir toutes les courses
exports.getCourses= async (req, res) => {
    let courses;
    courses =await Course.find()

    res.send({
        "status": true,
        "data": courses
    })
};

// Obtenir une course par ID
exports.getOneCourse = async (req,res)=>{
    const {id_reservation} = req.body;
    const c = await Course.findOne({
        id_reservation : id_reservation
    })

    if (!c) {
        return res.status(400).send({
            "status" : false,
            "data" : "Not found"
        })
    } 
    return res.send({
        "status" : true,
        "data" : c
    })
}

// Mettre à jour une course par ID
exports.updateCourse = async (req,res)=>{
    try {
        const {id_reservation} = req.body;
        const updates = req.body
        const c = await Course.findOne({
            id_reservation : id_reservation,
            id_client : req.id
        })
    
        if (!c) {
            return res.status(400).send({
                "status" : false,
                "data" : "Not found"
            })
        }

        Object.keys(updates).forEach(key => {
            c[key] = updates[key];
        });

        await c.save();

        return res.send({
            "status": true,
            "data": "Course updated successfully"
        });     

        
    } catch (error) {
        return res.status(500).send({
            "status": false,
            "data": "Error updating course",
            "error": error.message
        });
    }
}

// // Supprimer une course par ID
// exports.delete( async (req, res) => {
//     try {
//         const course = await Course.findByIdAndDelete(req.params.id);
//         if (!course) {
//             return res.status(404).send();
//         }
//         res.status(200).send(course);
//     } catch (error) {
//         res.status(500).send(error);
//     }
// });


