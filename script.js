const students = [
  {
    name: "Tanya",
    course: 3,
    subjects: {
      math: [4, 4, 3, 4],
      algorithms: [3, 3, 3, 4, 4, 4],
      data_science: [5, 5, 3, 4],
    },
  },
  {
    name: "Victor",
    course: 4,
    subjects: {
      physics: [5, 5, 5, 3],
      economics: [2, 3, 3, 3, 3, 5],
      geometry: [5, 5, 2, 3, 5],
    },
  },
  {
    name: "Anton",
    course: 2,
    subjects: {
      statistics: [1, 2, 1, 1, 1, 1, 1, 3, 4, 5],
      english: [5, 3],
      cosmology: [5, 5, 5, 5],
    },
  },
];

function getSubjects() {
  let lessons = [];
  for (i = 0; i < students.length; i++) {
    lessons = lessons.concat(Object.keys(students[i].subjects));
  }

  const getUpper = () => {
    return lessons.map((lesson) => {
      let word = lesson.split("");
      if (word.indexOf("_") != -1) {
        word[word.indexOf("_")] = " ";
        word[0] = word[0].toUpperCase();
        console.log(word.join(""));
      } else {
        console.log(lesson[0].toUpperCase() + lesson.slice(1));
      }
    });
  };
  getUpper();
}

//getSubjects();

const getAvarage = (student) => {
  let marks = [];
  let sum = 0;
   students.map((person) => {
    if (person.name === student) {
      let arrays = person.subjects;
      for (key in arrays) {
        marks = marks.concat(arrays[key]);
      }
      marks.map((number) => {
        sum += number;
      });
    }
  });

  return sum / marks.length;
};

//console.log(getAvarage("Tanya"));

const getInformation = (student) => {
  students.map((person) => {
    if (person.name === student) {
      console.log("course:", person.course);
      console.log("name:", person.name);
      console.log("AvarageMark:", getAvarage(student));
    }
  });
};

//getInformation("Tanya");

const getSortedNames = () => students.map((student) =>student.name).sort();

//console.log(getSortedNames());

const getBestStudent = () => {
  names = [];
  numbers = [];
  max = 0;
  students.map((person) => {
    let mark = getAvarage(person.name);
    numbers.push(mark);
    names.push(person.name);
    if (mark > max) {
      max = mark;
    }
  });
  for (i = 0; i < names.length; i++) {
    if (max === numbers[i]) {
      console.log(names[i]);
    }
  }
};
//getBestStudent();


const getLettersNumbers = (word) =>{
     word = word.split('');
     const newObj = word.reduce((acc, el)=>{
       if(acc[el]){
           return {...acc, [el]: acc[el]+=1}
       }
      else return {...acc, [el]: 1}
     }, {})
console.log(newObj)
     return newObj;
}

getLettersNumbers('paaassword');