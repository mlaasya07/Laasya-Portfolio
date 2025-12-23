// ===== Nodes =====
const nodes = [
    {id: "Me ", status: "alive"},

    // Categories
    {id: "Friends", status: "prends"},
    {id: "Partners", status: "partners"},
    {id: "Family", status: "familie"},

    // Sub-categories
    {id: "SchoolFriends", status: "sfs"},
    {id: "CollegeFriends", status: "cfs"},
    {id: "ApartmentFriends", status: "APT"},


    {id: "Current", status: "cp"},   // Only one current partner
    {id: "Ex ", status: "ex"},      // Ex-partners   
    {id: "Sship", status: "sship"},       // Situationhips

    //familie
    {id: "ImmediateFamily", status: "imf"},
    {id: "DistantFamily", status: "dif"},

    {id: "Cousins", status: "cuzs"},

    // best friends / close friends
    {id: "Bfs ", status: "bfs"},

    //girls and boys
    {id: "Girls", status: "girls"},
    {id: "Boys", status: "boys"},

    // Actual people [alive]
    {id: "Tejas", status: "alive"},           // Current partner
    {id: "Raghav", status: "alive"},          // Ex-partner
    {id: "Mahima", status: "alive"},
    {id: "Meha", status: "alive"},
    {id: "Gayatri", status: "alive"},
    {id: "Madhuri", status: "alive"},
    {id: "Ramakrishna", status: "alive"},
    {id: "Manisha", status: "alive"},
    {id: "Roshini", status: "alive"},
    {id: "Vasist ", status: "alive"},         // best friend of Raghav, Brother of Me
    {id: "Sanghamitra", status: "alive"},   // friend of Vasist, hated by Me

    // Actual people 
    //dead 
    {id: "Harshad", status: "dead"},          // Ex-partner

];

// ===== Links =====
const links = [
    // Level 1: Categories connected to Me
    {source: "Friends", target: "Me ", type: "prends"},
    {source: "Partners", target: "Me ", type: "partners"},
    {source: "Family", target: "Me ", type: "familie"},
    {source: "ApartmentFriends", target: "Me ", type: "APT"},

    // Level 2: Sub-categories connected to parent
    {source: "SchoolFriends", target: "Friends", type: "sfs"},
    {source: "CollegeFriends", target: "Friends", type: "cfs"},
    {source: "ApartmentFriends", target: "Friends", type: "APT"},
    {source: "Bfs ", target: "Friends", type: "bfs"},

    {source: "Current", target: "Partners", type: "cp"},
    {source: "Sship", target: "Partners", type: "sship"},
    {source: "Ex ", target: "Partners", type: "ex"},


    {source: "ImmediateFamily", target: "Family", type: "imf"},
    {source: "DistantFamily", target: "Family", type: "dif"},
    {source: "Cousins", target: "Family", type: "cuzs"},
    


    //girls and boys
    {source: "Girls", target: "Friends", type: "girls"},
    {source: "Boys", target: "Friends", type: "boys"},

    // Level 3: People connected to sub-category

    // School Friends
    {source: "Mahima", target: "Me", type: "School friends"},
    {source: "Meha", target: "Me", type: "School friends"},

    // College Friends
    {source: "Gayatri", target: "Me", type: "College Friends"},
    
    // Current Partner
    {source: "Tejas", target: "Me", type: "cp"},

    // Situationhips
    {source: "Raghav", target: "Me", type: "sship"},
    {source: "Meha", target: "Me", type: "sship"},

    // EX  
    {source: "Harshad", target: "Me", type: "ex"},

    // Immediate Family
    {source: "Madhuri", target: "Me", type: "imf"},
    {source: "Ramakrishna", target: "Me", type: "imf"},
    {source: "Vasist ", target: "Me", type: "imf"},
    {source: "Vasist ", target: "Madhuri", type: "imf"},
    {source: "Vasist ", target: "Ramakrishna", type: "imf"},

    // Distant Family
    {source: "Manisha", target: "Me", type: "dif"},

    // Apartment Friends
    {source: "Raghav", target: "Me", type: "APT"},
    {source: "Harshad", target: "Me", type: "APT"},
    {source: "Roshini", target: "Me", type: "APT"},
    {source: "Sanghamitra", target: "Me", type: "APT"},

    // Girls
    {source: "Mahima", target: "Girls", type: "girls"},
    {source: "Meha", target: "Girls", type: "girls"},
    {source: "Gayatri", target: "Girls", type: "girls"},
    {source: "Sanghamitra", target: "Girls", type: "girls"},


    // Boys
    {source: "Tejas", target: "Boys", type: "boys"},
    {source: "Raghav", target: "Boys", type: "boys"},
    {source: "Harshad", target: "Boys", type: "boys"},


    
    //best friends between friends
    {source: "Raghav", target: "Vasist ", type: "bfs"},
    {source: "Vasist ", target: "Sanghamitra", type: "bfs"},
    {source: "Sanghamitra", target: "Meha", type: "bfs"},


    //Cousins
    {source: "Manisha", target: "Vasist ", type: "cuzs"},
];

