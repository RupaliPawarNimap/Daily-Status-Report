function vowels(str){
    let v ="aeiouAEIOU"
    let newarr =[]
    for(let key of str){
        if(v.includes(key)&& !newarr.includes(key)){
            newarr.push(key)

        }
    }
    console.log(newarr);
}
// vowels("Rupaliii")

function vowels(str){
    let newarr =[]
    let v ="aeiouAEIOU"
    for(let key of str){
        for(let ele of v){
            if(key==ele && newarr.includes(key)){
                key+=1
            }
        }
    }
    console.log(newarr);
}
vowels("Rupaliiii")

// I hope you are doing well,

// Kindly complete the below assignment in Postgres and Mongo, once completed kindly share the git repo link: 

// Details:
// Managers can create an appointment with one or multiple developers.
// Attendees have the ability to accept or decline the appointment.
// Managers who have scheduled an appointment should be able to see if the developers have accepted or declined appointment.
// Users should be able to filter the number of appointments date wise.
// Users can have a blocked list where they can block other users.
// If someone has blocked a user then she/he cannot schedule an appointment with them. Example. If Rajesh has blocked Mahesh then Mahesh cannot schedule an appointment with Rajesh.
// Developers cannot delete the appointment only Managers can.
// Bulk Upload users in the application from a CSV or Excel file.
// Below are the features of Bulk upload : 
// View the list of bulk upload
// Show the number of records uploaded successfully and error count in the list.
// Allow the user to download the file which was uploaded
// Users should be able to export the meetings with the filter
// Create Reports to view the number of meetings scheduled and attended in a month and a custom filter for date.

// Must have:
// Authentication using jwt flow: Login, Register, Forgot Password, Reset Password
// Roles: Manager and Developers.
// Proper error handling and validations.
// Design the database schema first. Get it approved and only then start working on the assignment.
// At least one native query should be implemented.
// Implement Redis wherever possible.
// Implement all the standards that you have learned so far.
// Proper naming convention is must.
// Create swagger api documentation for created API.