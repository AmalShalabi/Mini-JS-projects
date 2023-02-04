// Main Variables
let theInput = document.querySelector(".get-repos input");
let getButton = document.querySelector(".get-button");
let reposData = document.querySelector(".show-data");
let title4=document.getElementById('title4')

getButton.onclick = function () {
  getRepos();
};

//Get Repos Function
function getRepos() {
  if (theInput.value == "") {
    reposData.innerHTML = "<span>Please Write Github UserName.<span>";
  } else {
    fetch(`https://api.github.com/users/${theInput.value}/repos`)
      .then((response) => response.json())
      .then((repositories) => {
        //Empty The Container
        reposData.innerHTML = "";
        title4.innerHTML=""
        //Loop on Repositories
        repositories.forEach((repo) => {
          //Create Main Div Element
          let mainDiv = document.createElement("div");
          // Create Repo Name Text
          let repoName = document.createTextNode(repo.name);

          //Create Repo URL Anchore
          let theUrl = document.createElement("a");
          //Create the URL Repo text
          let theUrlText = document.createTextNode(" Visit");

          //Append The Url Text To The Anchore tag
          theUrl.appendChild(theUrlText);
          //Add The Hypertet Reference "href"
          theUrl.href = `https://github.com/${theInput.value}/${repo.name}`;

          //set Attribute Blank
          theUrl.setAttribute("target", "__blank");

          //Create image to the icon
          let icon = document.createElement("img");
          icon.src = "./dir.png";
          icon.style.width = "20px";
          icon.style.marginRight = "30px";

          // Add Class On Main Div
          mainDiv.className = "repo-box";
          //Append Icon to The MainDiv
          mainDiv.appendChild(icon);
          //Append The Text To Main Div
          mainDiv.appendChild(repoName);
          //Append The Anchore To Main Div
          mainDiv.appendChild(theUrl);
          //Append the main div to container
          reposData.appendChild(mainDiv);
        });
          title4.innerHTML += "Number Of Repositories: "+ repositories.length;
      })


  }
}
