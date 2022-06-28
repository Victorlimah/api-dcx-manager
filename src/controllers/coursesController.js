import chalk from "chalk";
import { getCenters, getCourses } from "../repositories/coursesRepository";

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