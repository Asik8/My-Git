let data = {
    Sophia: {
        id: 33,
        study: [
            {
                primary:
                [
                    {school_name: "ABC......ps"},
                    {location: "Bager gattt"}
                ]
            },
            {
                secondary:
                [
                    {school_name: "ABC .......Ss"},
                    {location: "St Lorence"}
                ]
            }
        ]
    }
}

// task find secondary school name
console.log(data.Sophia.study[1].secondary[0].school_name);