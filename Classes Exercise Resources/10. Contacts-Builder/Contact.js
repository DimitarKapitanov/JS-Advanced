class Contact{
    constructor(firstNme, lastName, phone, email){
        this.firstNme = firstNme;
        this.lastName = lastName;
        this.phone = phone;
        this.email = email;
        this.online = false;
    }


}
function solve(){
    document.getElementsByClassName('title');
    console.log(contacts[1])
}

let contacts = [
    new Contact("Ivan", "Ivanov", "0888 123 456", "i.ivanov@gmail.com"),
    new Contact("Maria", "Petrova", "0899 987 654", "mar4eto@abv.bg"),
    new Contact("Jordan", "Kirov", "0988 456 789", "jordk@gmail.com")
  ];
  contacts.forEach(c => c.render('main'));

  setTimeout(() => contacts[1].online = true, 2000);