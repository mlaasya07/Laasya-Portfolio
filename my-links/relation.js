// ===== Nodes =====
const nodes = [
{id: "Me", status: "alive", kind: "me" },

// Categories (fixed)
{id: "Friends", status: "prends", kind: "category" },
{id: "CloseFriends", status: "bfs", kind: "category"},
{id: "SchoolFriends", status: "sfs", kind: "category"},
{id: "CollegeFriends", status: "cfs", kind: "category"},
{id: "ApartmentFriends", status: "APT", kind: "category"},

{id: "Family", status: "familie", kind: "category" },
{id: "Partners", status: "partners", kind: "category" },
{id: "Couples", status: "familie", kind: "category"},
{id: "Cousins", status: "cuzs", kind: "category"},





// People
{id: "Tejas", status: "alive", kind: "person"},           // Current partner
{id: "Raghav", status: "alive", },          // Ex-partner
{id: "Mahima", status: "alive"},
{id: "Meha", status: "alive"},
{id: "Gayatri", status: "alive"},
{id: "Madhuri", status: "alive"},
{id: "Ramakrishna", status: "alive"},
{id: "Manisha", status: "alive"},
{id: "Roshini", status: "alive"},
{id: "Vasist", status: "alive"},         // best friend of Raghav, Brother of Me
{id: "Sanghamitra", status: "alive"},   // friend of Vasist, hated by Me
{id: "Neelima", status: "alive"},

// Actual people 
//dead 
{ id: "Harshad", status: "dead", kind: "person" }
];

// ===== Links =====
const links = [
// People → Me
{ source: "Vasist", target: "Me", type: "imf" },
{ source: "Raghav", target: "Me", type: "sship" },
{ source: "Tejas", target: "Me", type: "cp" },
{ source: "Mahima", target: "Me", type: "sfs" },
{ source: "Harshad", target: "Me", type: "ex" },
{ source: "Ramakrishna", target: "Me", type: "imf"},
{ source: "Madhuri", target: "Me", type:"imf"},
{ source: "Manisha", target: "Me", type:"cuzs"},
{ source: "Sanghamitra", target: "Me", type: "APT"},
{ source: "Roshini", target: "Me", type: "bfs"},
{ source: "Neelima", target: "Me", type: "imf"},

// Me → Categories
{ source: "Me", target: "Friends", type: "prends" },
{ source: "Me", target: "ApartmentFriends", type: "APT"},
{ source: "Me", target: "SchoolFriends", type: "sfs"},
{ source: "Me", target: "CollegeFriends", type: "cfs"},
{ source: "Me", target: "CloseFriends", type: "bfs"},


{ source: "Me", target: "Family", type: "familie" },
{ source: "Me", target: "Partners", type: "partners" },
{ source: "Me", target: "Couples", type: "familie"},
{ source: "Me", target: "Cousins", type: "cuzs"},
{ source: "Me", target: "CloseFriends", type: "bfs"},



// Person ↔ Person

// Immediate Family
{source: "Vasist", target: "Neelima", type: "imf"},

//best friends
{source: "Raghav", target: "Vasist", type: "bfs" },
{source: "Vasist", target: "Sanghamitra", type: "bfs"},
{source: "Harshad", target: "Sanghamitra", type: "bfs"},
{source: "Harshad", target: "Meha", type: "bfs"},
{source: "Sanghamitra", target: "Meha", type: "bfs"},

// friends
{source: "Raghav", target: "Roshini", type: "prends"},


// Cousins
{source: "Manisha", target: "Vasist", type: "cuzs"},



// Couples
{source: "Madhuri", target: "Ramakrishna", type: "familie"},
];
