const innertable = document.getElementById('innertable');

const car = [
    {
        order:1,
        brand: "Mercedes",
        city: "Baku",
        model: "Cls63 AMG",
        seria: 10,
        from: "Germany"
    },
    {
        order:2,
        brand: "Audi",
        city: "Baku",
        model: "RS7r MTM",
        seria: 77,
        from: "Germany"
    },
    {
        order:3,
        brand: "Toyota",
        city: "Ganja",
        model: "Supra MK4",
        seria: 20,
        from: "Japan"
    },
    {
        order:4,
        brand: "Cadillac",
        city: "Nakhchivan",
        model: "Escalade V",
        seria: 85,
        from: "USA"
    },
    {
        order:5,
        brand: "Porsche",
        city: "Gabala",
        model: "911 GT3 RS",
        seria: 36,
        from: "Germany"
    },
    {
        order:6,
        brand: "Bentley",
        city: "Guba",
        model: "Flying Spur",
        seria: 40,
        from: "United Kingdom"
    },
    {
        order:7,
        brand: "Land Rover",
        city: "Tovuz",
        model: "RR Sport",
        seria: 60,
        from: "United Kingdom"
    },
    {
        order:8,
        brand: "GMC",
        city: "Sheki",
        model: "Yukon",
        seria: 55,
        from: "USA"
    },
    {
        order:9,
        brand: "Mercedes",
        city: "Xachmaz",
        model: "G63 AMG",
        seria: 27,
        from: "Germany"
    },
    {
        order:10,
        brand: "Tayota",
        city: "Aghsu",
        model: "Rav4",
        seria: "06",
        from: "Japan"
    }
    
]

let text = '';

car.forEach(data =>{
    const{order,brand,model,city,seria,from}=data;
    text += `
     
     <tr>
     <td>${order}</td>
     <td>${brand}</td>
     <td>${model}</td>
     <td>${city}</td>
     <td>${seria}</td>
     <td>${from}</td>
   </tr>
    `
})

innertable.innerHTML = text;