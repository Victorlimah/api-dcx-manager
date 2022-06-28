import chalk from "chalk";
import axios from "axios";
import { getURL } from "../utils/index.js";
import { refactData } from "../services/refactStudent.js";
import { getCenters, getCourses } from "../repositories/coursesRepository.js";

export async function listCenters(_req, res){
  try{
    const centers = await getCenters();
    res.status(200).send(centers.rows);
  } catch(err){
    console.log(chalk.red(`ERROR IN listCenters: ${err}`));
    res.status(500).send(err);
  }
}

export async function listCourses(req, res){
  try{
    const centerId = req.params.centerId;
    const courses = await getCourses(centerId);
    res.status(200).send(courses.rows);
  } catch(err){
    console.log(chalk.red(`ERROR IN listCourses: ${err}`));
    res.status(500).send(err);
  }
}

export async function listStudents(req, res){
  try{
    let { studentName, courseCode } = req.params;
    studentName = studentName.toUpperCase();
    
    axios
      .get(getURL(courseCode))
      .then((response) => {
        let studentsArray = refactData(response.data);

        let student = studentsArray.filter((s) => s.name.includes(studentName));
        let messageErro = { message: "Esse estudante não existe no sistema" };

        if (student) res.status(200).send(student);
        else res.status(404).send(messageErro);
      })
      .catch((err) => res.send(err));
  } catch(err){
    console.log(chalk.red(`ERROR IN listStudents: ${err}`));
    res.status(500).send(err);
  }

}