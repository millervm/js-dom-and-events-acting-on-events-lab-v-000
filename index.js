function preventRefreshOnSubmit(){
    document.querySelector('form').addEventListener('submit', function(event){
      event.preventDefault()
    })
}

preventRefreshOnSubmit()

function retrieveEmployeeInformation() {
  return $('input[name="name"]').attr("value");
};

function addNewElementAsLi() {

};

function addNewLiOnClick() {

};

function clearEmployeeListOnLinkClick() {

};
