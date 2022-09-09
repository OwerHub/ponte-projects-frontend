import { IncomingMessage } from "http";
import { Iproject } from "../types/projectTypes";

import {projectsList} from "../datas/projects"

let projects :Iproject[]= projectsList

export function fakebackendAnswer(timeToWait: number) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(projects);
    }, timeToWait);
  });
}

export function fakebackendAdd(project: Iproject, timeToWait: number) {
  if (!projects.some((oneProject) => oneProject.id === project.id)) {
    projects.push(project);
  } else console.log("ebbű kettő van!");

  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(projects);
    }, timeToWait);
  });
}

export function fakebackendDelete(deleteProjectID: number, timeToWait: number) {
  projects = projects.filter((project) => project.id !== deleteProjectID);
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(projects);
    }, timeToWait);
  });
}


export function fakebackendResults(inComingid: number, timeToWait: number) {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(projects.find(project=> project.id === inComingid));
      }, timeToWait);
    });
  }