// switch (key) {
//     case value:
        
//         break;

//     default:
//         break;
// }

const month = "march"
switch (month) {
    case "jan":
        console.log("January");
        break;
    case "feb":
        console.log("feb");
        break;
    case "march":
        console.log("march");
        break;
    case "april":
        console.log("april");
        break;

    default:
        console.log("default case match");
        break;
}

// IMPORTANT: suppose agr case march k bad break nhi lgaya to match bhi print ho jay ga or april bhi . In short us case k bad sary cases execute ho jayn gy except defaiult