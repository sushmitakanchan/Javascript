myObj= {
    js:"Javascript",
    py:"Python",
    cpp:"C++",
    rb:"Ruby"
}

for (const key in myObj) {
        // console.log(`${key} is shortcut for ${myObj[key]}`);
        
    }

const programming = ["java","js","ruby","swift"]//if printed key returns index
for (const key in programming) {
    //console.log(programming[key]);     
    }

//to check whether forIn loop works on MAP
const map = new Map()
map.set("IN", "India")
map.set("US", "United States")
map.set("FR", "France")
map.set("IN", "India")
// console.log(map);

for (const key in map) {
    console.log(key);
        
    }


