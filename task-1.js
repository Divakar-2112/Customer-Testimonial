let customer=[
    {image:"https://www.course-api.com/images/people/person-1.jpeg",
    name:"Peter Jones",
    designation:"INTERN",
    reviewContent:"Sriracha literally flexitarian irony,vape marfa unicorn.Glossier tattooed 8-bit,fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raciette post-ironic jianbing swag."
    },
    {
        image:"https://www.course-api.com/images/people/person-2.jpeg",
        name:"Anna Johnson",
        designation:"WEB DESIGNER",
        reviewContent:"Helvetica artisan kinfolk thundercats lumbersexual blue bottle.Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe photo booth jean shorts artisan narwhal."
    },
    {
        image:"https://www.course-api.com/images/people/person-3.jpeg",
        name:"Bill Anderson",
        designation:"THE BOSS",
        reviewContent:"Edison bulb put a bird on it humblebrag,marfa pok pok heirloom fashion axe crazy stumptown venmo actually seitan.VHS farm-to-table schtizz,edison bulb pop-up  wolf moon tote bag street arts shabby chic."
    },
    {
        image:"https://www.course-api.com/images/people/person-4.jpeg",
        name:"Susan Smith",
        designation:"WEB DEVELOPER",
        reviewContent:"I'm baby message twee health goth +1.Bicycle rights tumeric charteuse before they sold chambray pop-up.Shaman humblebrag pickled coloring book salvia hoodle,cold-pressed four dollar toast everyday carry ."
    }

]; 
let currentindex=0;

function updatecustomer(index){
    let personimage=document.getElementById("customer-image");
    let personname=document.getElementById("customer-name");
    let persondesignation=document.getElementById("customer-designation");
    let personreviewContent=document.getElementById("customer-reviewContent");


    let customers=customer[index];
    personimage.src=customers.image;
    personname.textContent=customers.name;
    persondesignation.textContent=customers.designation;
    personreviewContent.textContent=customers.reviewContent;
}
document.getElementById("next-btn").addEventListener("click", () => {
    currentindex = (currentindex + 1) % customer.length;
    updatecustomer(currentindex);
});

document.getElementById("prev-btn").addEventListener("click", () => {
    currentindex = (currentindex - 1 + customer.length) % customer.length;
    updatecustomer(currentindex);
});


updatecustomer(currentindex);