let patternTitle, patternAuthor, patternCompany1, patternCompany2, patternSource;

document.querySelector("#loadPattern").addEventListener("click", loadMyPattern);

// loadMyPattern should be a function where clicking Load My Pattern displays the pattern (sans steps) on the UI.

// In the short-term, let's just show the values from the input fields.

function loadMyPattern() {
    patternTitle = document.querySelector("#title").value;
    patternAuthor = document.querySelector("#author").value;
    patternCompany1 = document.querySelector("#company1").value;
    patternCompany2 = document.querySelector("#company2").value;
    patternSource = document.querySelector("#source").value;
    
    console.log("title", patternTitle);
    console.log("author", patternAuthor);
    console.log("company 1", patternCompany1);
    console.log("company 2", patternCompany2);
    console.log("source", patternSource);

  document.querySelector("#displayTitle").innerText = patternTitle;
document.querySelector("#displayAuthor").innerText = patternAuthor;
document.querySelector("#displayCompany1").innerText = patternCompany1;
document.querySelector("#displayCompany2").innerText = patternCompany2;
  if (!patternCompany2) {
    document.querySelector("#displayCompany2").style.display = none;
  } else {
    document.querySelector("#displayCompany2").innerHTML = patternCompany2;
  } 
  document.querySelector("#displaySource").innerText = patternSource;
  /* if (patternSource.includes('www') || patternSource.includes("http")) {
      let a = document.createElement("a");
      let link = document.createTextNode(patternSource);
      a.appendChild(link);
      a.title = patternSource;
      a.href = patternSource;
      document.section.appendChild(a);
  } */
}

// click the Get Pattern Counter button

// document.querySelector("#patternCounter").addEventListener("click", countMyRow);

// goes to the next page and triggers a function OR indicator that pattern is loaded

// function does the following:

// takes input from previous page (title, author, company, pattern source)

// GET request to get a response with necessary pattern information

// display the main pattern information

// display interface with line by line pattern information and buttons to increment, save, or finish

// think Array.from() in Bachelor Code 3 (latest super review)
