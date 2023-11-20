// A function that adds and removes the class "active" on the section you click on.
function toggle(e) {
  const element = e.target;
  element.classList.toggle("active");

  const description = element.nextElementSibling;
  description.classList.toggle("active");
}

// Selects an HTML element, and calls a function which will be executed when the element is clicked.
const sections = document.querySelectorAll(".title");

sections.forEach((section) => {
  section.addEventListener("click", toggle);
});

// Fetch data from the given URL and create sections and descriptions from the fetched data
fetch("https://jsonplaceholder.typicode.com/posts")
  .then((response) => response.json())
  .then((data) => {
    data.forEach((post, index) => {
      const sectionID = `section${index + 1}`;
      const sectionElement = document.getElementById(sectionID);

      const descriptionDiv = document.createElement("div");
      descriptionDiv.classList.add("description");
      descriptionDiv.textContent = post.body;

      sectionElement.insertAdjacentElement("afterend", descriptionDiv);

      sectionElement.addEventListener("click", toggle);
    });
  })
  .catch((error) => console.error("Error:", error));
