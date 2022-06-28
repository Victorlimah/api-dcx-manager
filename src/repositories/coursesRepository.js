import { db } from '../data/db.js';

export function getCenters(){
  return db.query(`SELECT * FROM centers`);
}

export function getCourses(centerId){
  return db.query(`SELECT * FROM courses WHERE "centerId"= $1`, [centerId]);
}