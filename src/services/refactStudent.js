export function refactData(data) {
  const regexRegister = /<td  class="colMatricula">(.*?)<\/td>/;
  const regexName = /<td>(.*?)<\/td>/;

  let newStudentName = data.match(/<td>(.*?)<\/td>/g);
  let newStudentMat = data.match(/<td  class="colMatricula">(.*?)<\/td>/g);

  return newStudentName.map((student, index) => {
    return {
      register: newStudentMat[index].replace(regexRegister, "$1"),
      name: student.replace(regexName, "$1"),
    };
  });
}
