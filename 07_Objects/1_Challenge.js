const cohort = {
  name: "May2022",
  id: 1234,
  studentNames: ["Aivaras", "Tara", "George", "Klara"],
};

const cohortInfo = (cohort) => {
  console.log(
    `${cohort.id} - ${cohort.name} - ${cohort.studentNames.length} students in this cohort`
  );
};

cohortInfo(cohort);
