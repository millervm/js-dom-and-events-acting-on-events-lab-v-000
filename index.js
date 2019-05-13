function preventRefreshOnSubmit(){
    document.querySelector('form').addEventListener('submit', function(event){
      event.preventDefault()
    })
}

preventRefreshOnSubmit()

function retrieveEmployeeInformation() {
  return document.querySelector('input').value;
};

function addNewElementAsLi() {
  document.querySelector('ul.employee-list').append(retrieveEmployeeInformation());
};

function addNewLiOnClick() {
  return document.querySelector('input').addEventListener("click", function() {

  });
};

function clearEmployeeListOnLinkClick() {

};
