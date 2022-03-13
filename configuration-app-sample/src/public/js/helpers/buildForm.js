export function buildForm() {
  //build a form
  const divOptions = document.querySelector("#mainNav");
  const form = document.createElement("form");
  form.id = "form";
  const method = document.createElement("select");
  method.id = "selectMethod";
  method.add(new Option("Select Method", ""));
  method.add(new Option("GET", "get"));
  method.add(new Option("POST...(coming soon)", "post"));
  method.add(new Option("PUT...(coming soon)", "put"));
  method.add(new Option("DELETE...(coming soon)", "delete"));
  const orgInput = document.createElement("input");
  orgInput.id = "org";
  orgInput.setAttribute("type", "text");
  orgInput.setAttribute("name", "org");
  orgInput.setAttribute("placeholder", "organization ID");
  const endpointInput = document.createElement("select");
  endpointInput.id = "endpoint";
  endpointInput.add(new Option("Select WxCC API", ""));
  endpointInput.add(new Option("Teams", "team"));
  endpointInput.add(new Option("SkillProfiles", "skill-profile"));
  endpointInput.add(new Option("Users", "user"));
  endpointInput.add(new Option("Queues", "contact-service-queue"));
  endpointInput.add(new Option("Entry Points", "entry-point"));
  const pageInput = document.createElement("input");
  pageInput.id = "page";
  pageInput.setAttribute("type", "text");
  pageInput.setAttribute("name", "page");
  pageInput.setAttribute("placeholder", "Page (optional)");
  const pageSizeInput = document.createElement("input");
  pageSizeInput.id = "pagesize";
  pageSizeInput.setAttribute("type", "text");
  pageSizeInput.setAttribute("name", "pagesize");
  pageSizeInput.setAttribute("placeholder", "Page Size (optional)");
  const pageBody = document.createElement("textarea");
  pageBody.id = "body";
  pageBody.classList.add("apiBody");
  pageBody.setAttribute("type", "text");
  pageBody.setAttribute("name", "body");
  pageBody.setAttribute("placeholder", "body");
  const submit = document.createElement("button");
  submit.id = "submit";
  submit.textContent = "submit";
  divOptions.append(form);
  form.append(method, orgInput, endpointInput, pageBody, pageInput, pageSizeInput, submit);
  const authDiv = document.querySelector("#auth");
  const authButton = document.createElement("input");
  authButton.id = "accessToken";
  authButton.textContent = "Access Token";
  authButton.setAttribute("type", "text");
  authButton.setAttribute("name", "accessToken");
  authButton.setAttribute("placeholder", "coming soon...");
  authDiv.append(authButton);
  const searchResult = document.getElementById("mainArticle");
  const search = document.createElement("input");
  search.id = "search";
  search.setAttribute("type", "text");
  search.setAttribute("name", "accessToken");
  search.setAttribute("placeholder", "Search...");
  // searchResult.append(search);
  // const authLink =
}
