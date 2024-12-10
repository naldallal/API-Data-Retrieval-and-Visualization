async function getData() {
  // define url
  const url = "https://data.gov.bh/api/explore/v2.1/catalog/datasets/01-statistics-of-students-nationalities_updated/records?where=colleges%20like%20%22IT%22%20AND%20the_programs%20like%20%22bachelor%22&limit=100";
  // frtch
  const response = await fetch(url);
  // decode
  const data = await response.json();
  // specifying the element that going to effected
  const tableBody = document.getElementById("tableBody");
  data.results.forEach(element => {
    const row = document.createElement('tr');
      row.innerHTML = `
        <th scope="row">${element.year}</th>
        <td>${element.the_programs}</th>
        <td>${element.semester}</td>
        <td>${element.nationality}</td>
        <td>${element.colleges}</td>
        <td>${element.number_of_students}</td>
        `;
        tableBody.appendChild(row);
  });
}
// calling fuction to do its work
document.addEventListener('DOMContentLoaded', getData);
