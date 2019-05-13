function preventRefreshOnSubmit(){
    document.querySelector('form').addEventListener('submit', function(event){
      event.preventDefault()
    })
}

preventRefreshOnSubmit()

function retrieveEmployeeInformation() {
  return $("input:text").val();
};

function addNewElementAsLi() {

};

function addNewLiOnClick() {

};

function clearEmployeeListOnLinkClick() {

};
