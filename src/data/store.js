import { reactive } from "vue";

export const store = reactive({
    links: ["Home", "Services", "Why Us", "Casa Studies", "About", "Blog"],
    phoneNumber: "(555)802-1234",
    footerLinks: {
        services: ["Marketing Plan", "Sales Development", "Digital Marketing", "Princing", "Why Us", "Case Studies"],
        resources: ["Learning Center", "Video Tutorials", "Customers", "Blog"],
        company: ["Who We Are", "Contact Us","Careers"]
    },
    emailCompany: "info@yourcompany.com",
    // cards:  [
    //     {
    //         img: ,
    //         message: '',
    //         booleano: ''
    //     },
    // ],
})
