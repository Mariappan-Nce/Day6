class person {
    constructor (firstName, lastName, age, email, phone) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.email = email;
        this.phone = phone;
        this.persondetails = function () {
            return this.firstName + " " + this.lastName + " Age is " + this.age + " and email : " + this.email + ", PhoneNo: " + this.phone;
        }
    }
}
 
let p1 = new person ("Mariappan", "M", "31","mariappan.nce@gmail.com", "123456789" );
console.log(p1.persondetails());