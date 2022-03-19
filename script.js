const students = [
  {
    name: "Tanya",
    course: 3,
    subjects: {
      math: [4, 4, 3, 4],
      algorithms: [3, 3, 3, 4, 4, 4, 5, 5, 5, 5, 5, 5, 5],
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

function getSubjects(student) {
  students.forEach((person) => {
    if (person.name === student) {
      data = Object.keys(person.subjects);
      data.map((name) => {
        let word = name.split("");
        if (word.indexOf("_") != -1) {
          word[word.indexOf("_")] = " ";
          word[0] = word[0].toUpperCase();
          console.log(word.join(""));
        } else {
          console.log(name[0].toUpperCase() + name.slice(1));
        }
      });
    }
  });
}

//getSubjects("Tanya");

const getAvarage = (student) => {
  let marks = [];
  let sum = 0;
  students.forEach((person) => {
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
      info = {
        course: person.course,
        name: person.name,
        AvarageMark: getAvarage(student),
      };
      console.log(info);
    }
  });
};

//getInformation("Tanya");

const getSortedNames = () => students.map((student) => student.name).sort();

//console.log(getSortedNames());


const getLettersNumbers = (word) => {
  word = word.split("");
  const newObj = word.reduce((acc, el) => {
    if (acc[el]) {
      return { ...acc, [el]: (acc[el] += 1) };
    } else return { ...acc, [el]: 1 };
  }, {});
  console.log(newObj);
  return newObj;
};

//getLettersNumbers('paaassword');

function getBestStudent() {
  let data = [];
  students.forEach((person) => {
    data.push({ name: person.name, mark: getAvarage(person.name) });
  });

  function sortByMark(data) {
    data.sort((a, b) => (a.mark < b.mark ? 1 : -1));
  }
  sortByMark(data);
  console.log(data[0]);
}

getBestStudent();
